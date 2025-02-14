import type { NextAuthConfig } from 'next-auth';


const validPaths = [
    '/home',
    '/step-1',
    '/step-2',
    '/step-3',
    '/step-4',
    '/step-5',
    '/step-6',
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

  