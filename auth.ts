import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { authConfig } from "./auth.config";
import { getUser } from "@/utils/db";
import { signInSchema } from "@/lib/zod";

export const { handlers, auth, signIn, signOut } = NextAuth({
	...authConfig,
	providers: [
		Credentials({
			async authorize(credentials) {
				const parsedCredentials = signInSchema.safeParse(credentials);

				if (parsedCredentials.success) {
					const { email, password } = parsedCredentials.data;
					const user = await getUser(email);

					if (!user) return null;
                    
					const passwordsMatch = await bcrypt.compare(password, user.password);
					if (passwordsMatch) return user;
				}

				console.log("Invalid credentials");
				return null;
			},
		}),
	],
});
