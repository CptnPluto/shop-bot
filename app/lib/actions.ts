"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import { signIn } from "auth";
import { AuthError } from "next-auth";
import { sql } from "@vercel/postgres";
import bcrypt from "bcrypt";
import { generateSampleData } from "@/utils/placeholder-data";
import { FoodItemType, GenRecipesResponse, SignupState, User } from "./definitions";
import { FoodPreferencesSchema, UserSchema } from "./zod";
import { cookies } from "next/headers";
import { getUser } from "@/utils/db";
import { sortFoodData } from "@/utils/sortFoodData";

const CreateAccount = z
	.object({
		name: z.string().min(2, { message: "Name must be 2 or more characters long." }),
		email: z.string().email({ message: "Invalid email address." }),
		password: z.string().min(6, { message: "Password must be 5 or more characters long." }),
		passwordConf: z.string().min(6, { message: "Password must be 5 or more characters long." }),
	})
	.refine((data) => data.password === data.passwordConf, {
		message: "Passwords don't match",
		path: ["passwordConf"],
	});

export async function authenticate(prevState: string | undefined, formData: FormData) {
	try {
		await signIn("credentials", formData);
	} catch (error) {
		if (error instanceof AuthError) {
			switch (error.type) {
				case "CredentialsSignin":
					console.log("Credentials: ", formData);
					return "Invalid credentials.";
				default:
					return "Something went wrong.";
			}
		}
		throw error;
	}
}

export async function signup(prevState: SignupState, formData: FormData): Promise<any> {
	const rawData = Object.fromEntries(formData.entries());
	console.log("Raw data: ", rawData);
	const validatedFields = CreateAccount.safeParse(rawData);

	if (!validatedFields.success) {
		return {
			errors: validatedFields.error?.flatten().fieldErrors,
			message: "Missing fields. Failed to create account.",
		};
	}

	try {
		console.log("Creating account.");
		const saltRounds = 10;
		const hashedPassword = await bcrypt.hash(validatedFields.data.password, saltRounds);
		await sql`
            INSERT INTO users (name, email, password)
            VALUES (${validatedFields.data.name}, ${validatedFields.data.email}, ${hashedPassword})
        `;
	} catch (error) {
		return { message: "Error creating account in DB", errors: error };
	}

	redirect("/login");
}

export async function updateUser(userData: User): Promise<any> {
	const validatedFields = UserSchema.safeParse(userData);
	if (!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors,
			message: "Missing fields. Failed to create invoice.",
		};
	}
	try {
		await sql`
			UPDATE users
			SET 
				name = ${userData.name},
				email = ${userData.email},
				age = ${userData.age},
				address = ${userData.address}
			WHERE id = ${userData.id}
		`;
	} catch (error) {
		console.error("Failed to update user in DB:", error);
		throw new Error("Failed to update user in DB.");
	}
}

export async function fetchFoodData(): Promise<any> {
	try {
		// load user preferencesArray
		const cookieStore = await cookies();
		const userEmail = cookieStore.get("email")?.value || "";
		const userData = await getUser(userEmail);
        console.log("userData: ", userData);
		const rawMacroData = {
			protein: userData?.protein,
			fat: userData?.fat,
			carbohydrates: userData?.carbohydrates,
			nutritionals: userData?.nutritionals,
		};

		const validatedFields = FoodPreferencesSchema.safeParse(rawMacroData);

		if (!validatedFields.success) {
			return {
				errors: validatedFields.error.flatten().fieldErrors,
				message: "Marco data error.",
			};
		}

		// perform fetch to external api WHERE matches preferencesArray
		const foodData: FoodItemType[] = generateSampleData();

		if (userData?.nutritionals) sortFoodData(userData?.nutritionals, foodData);
		// const response = await fetch("/api/food");
		// if (!response.ok) {
		// throw new Error("Failed to fetch food data");
		// }
		// const data = await response.json();
		return { message: `Successfully fetched food data`, foodData: foodData, errors: {} };
	} catch (error) {
		console.error("Error fetching food data: ", error);
		return { message: "Error fetching food data", errors: error };
	}
}

export async function generateRecipes(foodData: FoodItemType[]): Promise<GenRecipesResponse> {
    try {
        const response = await fetch("http://localhost:3000/api/genRecipes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(foodData),
        });

        if (!response.ok) {
			return {
				message: "Failed to generate recipes. Sending placeholder",
				recipes: [
					{
						id: 1,
						title: "Spaghetti Bolognese",
						content:
							"Ingredients: spaghetti, ground beef, tomato sauce, garlic, herbs. Instructions: Cook spaghetti; simmer beef in tomato sauce with garlic and herbs; combine and serve hot.",
					},
					{
						id: 2,
						title: "Chicken Salad",
						content:
							"Ingredients: grilled chicken, mixed greens, cherry tomatoes, cucumbers, vinaigrette. Instructions: Toss ingredients together and drizzle with vinaigrette.",
					},
					{
						id: 3,
						title: "Vegetable Stir Fry",
						content:
							"Ingredients: broccoli, bell peppers, carrots, soy sauce, garlic, ginger. Instructions: Stir fry vegetables with garlic and ginger; add soy sauce at the end.",
					},
				],
				errors: {}
			}
        }

        const recipes = await response.json();
        return { message: "Successfully generated recipes", recipes: recipes, errors: {} };
    } catch (error) {
        console.error("Error generating recipes: ", error);
        return { message: "Error generating recipes", errors: error };
    }

}

// sort food data based on user preferences
// export async function generateRecipes(foodData): Promise<any> {
// 	// load user macro data
// 	const macroData = { carbs: user.carbohydrates, protein: user.portein, fat: user.fat };
// 	// pass foodData and macroData to AI API to generate recipes
// }
