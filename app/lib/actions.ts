"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import { signIn } from "auth";
import { AuthError } from "next-auth";
import { sql } from "@vercel/postgres";
import bcrypt from "bcrypt";

const FormSchema = z.object({
	address: z.string(),
	macros: z.string(),
	nutritionals: z.string(),
	budget: z.string(),
	deliveryTime: z.string(),
	mealPlan: z.string(),
	name: z.string().min(2, { message: "Name must be 2 or more characters long." }),
	email: z.string().email({ message: "Invalid email address." }),
	password: z.string().min(6, { message: "Password must be 5 or more characters long." }),
	passwordConf: z.string().min(6, { message: "Password must be 5 or more characters long." }),
});
// .refine((data) => data.password === data.passwordConf, {
// 	message: "Passwords don't match",
// 	path: ["passwordConf"],
// });

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

export type UserSignup = {
	name: string;
	email: string;
	address: string;
	macros: string;
	nutritionals: string;
	budget: string;
	deliveryTime: string;
	mealPlan: string;
	password: string;
	passwordConf: string;
};

export type SignupState = {
	errors?: {
		name?: string[];
		email?: string[];
		password?: string[];
		passwordConf?: string[];
		status?: string[];
	};
	message?: string | null;
	prevState?: FormData;
};

export async function getAllProducts(prevState: any, formData: FormData) {
	console.log("Getting all products");
	console.log("Form data: ", formData.get("name"));
	return { message: `Successfully submitted`, formData: formData, errors: {} };
}

export async function userSignup(prevState: SignupState, formData: FormData): Promise<any> {
	const rawData = Object.fromEntries(formData.entries());
	console.log("Raw data: ", rawData);
	const validatedFields = FormSchema.safeParse(rawData);
	console.log("validated fields: ", validatedFields);

	if (!validatedFields.success) {
		return {
			errors: validatedFields.error?.flatten().fieldErrors,
			message: "Missing fields. Failed to create invoice.",
			state: prevState,
		};
	}

	console.log("Signing user up.");

	return { message: "Success!", errors: {} };
}

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
