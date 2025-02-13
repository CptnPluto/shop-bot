import { sql } from "@vercel/postgres";
import type { User } from "@/lib/definitions";
import { UserSchema } from "@/lib/zod";

export async function getUser(email: string): Promise<User | undefined> {
	try {
		const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
		return user.rows[0];
	} catch (error) {
		console.error("Failed to fetch user from DB:", error);
		throw new Error("Failed to fetch user from DB.");
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
