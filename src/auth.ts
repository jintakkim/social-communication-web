import NextAuth, { NextAuthOptions } from "next-auth";
import Github from "next-auth/providers/github"

import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "./db";
import { CredentialsProvider } from "next-auth/providers/credentials";

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

if(!GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRET)
    throw new Error("Missing github oauth credentials")

export const authConfig: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name
        })
    ]
}

export const {handlers: {GET,POST}, auth, signOut, signIn} = NextAuth({
    adapter: PrismaAdapter(db),
    providers: [
        Github({
            clientId: GITHUB_CLIENT_ID,
            clientSecret: GITHUB_CLIENT_SECRET,
        })
    ]
})