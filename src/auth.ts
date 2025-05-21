import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import GithubProvider from "next-auth/providers/github";
import {prisma} from "./lib/index";

if(!process.env.CLIENT_ID || !process.env.CLIENT_SECRET){
    throw new Error("Please define the CLIENT_ID and CLIENT_SECRET environment variables inside .env.local");
}   
export const {handlers:{GET,POST}, auth} = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        GithubProvider({
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async session({ session, user }){
            if(session && user){
                session.user.id = user.id;
            }
            return session;
        }  
    }    
})