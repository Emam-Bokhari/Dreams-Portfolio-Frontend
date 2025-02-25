// module code
// import { authOptions } from "@/utils/authOptions"
// import NextAuth from "next-auth"

// export const handler = NextAuth(authOptions)

// export { handler as GET, handler as POST }

// Ph support team code
// import { authOptions } from "@/utils/authOptions";
// import NextAuth, { NextAuthOptions } from "next-auth";
// import { NextRequest, NextResponse } from "next/server";

// const handler = (req: NextRequest) => NextAuth(authOptions as NextAuthOptions)(req);

// export const GET = (req: NextRequest) => handler(req);
// export const POST = (req: NextRequest) => handler(req);



import NextAuth, { NextAuthOptions } from "next-auth"

import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const authOptions: NextAuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        })
    ],
    pages: {
        signIn: "/login",
    },
    secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }





