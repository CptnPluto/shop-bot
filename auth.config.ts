import type { NextAuthConfig } from 'next-auth';


const validPaths = [
    '/home',
    '/dashboard',
]
export const authConfig = {
    pages: {
        signIn: '/login',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            // const isOnHome = nextUrl.pathname.startsWith('/home');
            const isOnValidPath = validPaths.includes(nextUrl.pathname);
            if (isOnValidPath) {
                if (isLoggedIn) return true;
                return false;
            } else if  (isLoggedIn) {
                return Response.redirect(new URL('/home', nextUrl));
            }
            return true;
        }
    },
    providers: [],
} satisfies NextAuthConfig;

  