import NextAuth from "next-auth";

declare module "next-auth" {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        user: {
            name: string;
            email?: string | null;
            picture?: string | null;
            sub?: string | null;
            email_verified?: boolean;
        };
    }
    interface JWT {
        name: string;
        email?: string;
        picture?: string;
        image: string;
        email_verified?: boolean;
    }
}
