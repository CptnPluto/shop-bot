import { sql } from "@vercel/postgres";
import type { User } from "@/lib/definitions";

export async function getUser(email: string): Promise<User | undefined> {
	try {
		const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
		return user.rows[0];
	} catch (error) {
		console.error("Failed to fetch user from DB:", error);
		throw new Error("Failed to fetch user from DB.");
	}
}

