"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import { signIn } from "auth";
import { AuthError } from "next-auth";
import { sql } from "@vercel/postgres";
import bcrypt from "bcrypt";
import { generateSampleData } from "@/utils/placeholder-data";
import { SignupState, User } from "./definitions";
import { UserSchema } from "./zod";

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

export async function fetchFoodData(): Promise<any> {
	try {
		const sampleData = generateSampleData();

		// const response = await fetch("/api/food");
		// if (!response.ok) {
		// throw new Error("Failed to fetch food data");
		// }
		// const data = await response.json();
		console.log("Fetching food data: ", sampleData[0]);
		return { message: `Successfully fetched food data`, foodData: sampleData, errors: {} };
	} catch (error) {
		console.error("Error fetching food data: ", error);
		return { message: "Error fetching food data", errors: error };
	}
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
