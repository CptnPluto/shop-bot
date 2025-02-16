import NextAuth from "next-auth";
import { authConfig } from "auth.config";

// export { auth as middleware } from 'auth';

export default NextAuth(authConfig).auth;

export const config = {
	// https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
	// Matching all paths except those starting with /api, /_next/static, /_next/image, or ending with .png
	matcher: ["/((?!api|_next/static|seed|_next/image|.*\\.png$).*)"],
};
