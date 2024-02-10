import NextAuth, { Account, Profile, Session } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { JWT } from "next-auth/jwt";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID
                ? process.env.GOOGLE_CLIENT_ID
                : "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
                ? process.env.GOOGLE_CLIENT_SECRET
                : "",
        }),
    ],
    secret: process.env.SECRET || "",
    callbacks: {
        async jwt({
            token,
            account,
            profile,
        }: {
            token: JWT;
            account: Account | null;
            profile?: Profile | undefined | null;
        }) {
            if (profile) {
                Object.assign(token, profile);
            }
            return token;
        },

        async session({ session, token }: { session: Session; token: JWT }) {
            session.user = token;
            return session;
        },
    },
};
export default NextAuth(authOptions);
