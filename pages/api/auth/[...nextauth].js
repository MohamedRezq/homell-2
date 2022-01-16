import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.Github_Client_ID,
      clientSecret: process.env.Github_Client_Secret,
    }),
  ],
});
