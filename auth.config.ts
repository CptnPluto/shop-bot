import next from "next";
import type { NextAuthConfig } from "next-auth";

const validPaths = [
	"/home",
	"/step-1",
	"/step-2",
	"/step-3",
	"/step-4",
	"/step-5",
	"/step-6",
	"/run-shopbot",
	"/add-to-cart",
	"/review",
];
export const authConfig = {
	pages: {
		signIn: "/login",
	},
	callbacks: {
		authorized({ auth, request: { nextUrl } }) {
			const isLoggedIn = !!auth?.user;
			// const isOnHome = nextUrl.pathname.startsWith('/home');
			const path = nextUrl.pathname;
			const validRoutes = [
				"/home",
				"/step-1",
				"/step-2",
				"/step-3",
				"/step-4",
				"/step-5",
				"/step-6",
				"/run-shopbot",
				"/add-to-cart",
				"/review*", // changed from '/review/path*'
			];
			console.log("nextUrl.pathname: ", path);
			const isValidRoute = validRoutes.some((route) => matchPath(path, route));
			console.log(isValidRoute);

			if (isValidRoute) {
				if (isLoggedIn) return true;
				return false;
			} else if (isLoggedIn) {
				return Response.redirect(new URL("/home", nextUrl));
			}
			return true;
		},
	},
	providers: [],
} satisfies NextAuthConfig;

function matchPath(currentPath: string, pattern: string): boolean {
	// Convert route pattern to a regex
	const regexPattern = pattern
		.replace(/\/:path\*/g, "(/.*)?") // Handle dynamic segments
		.replace(/\*/g, ".*") // Handle wildcards
		.replace(/\//g, "\\/"); // Escape slashes

	const regex = new RegExp(`^${regexPattern}$`);
	return regex.test(currentPath);
}
