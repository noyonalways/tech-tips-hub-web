import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import GithubProvider from "next-auth/providers/github";
import { socialLogin } from "@/services/auth";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
  ],

  callbacks: {
    signIn: async ({ profile, account, user }) => {
      // console.log({ profile, account, user });

      if (!profile || !account) {
        return false;
      }
      if (account.provider === "google") {
        if (user) {
          const reqBody = {
            fullName: user.name!,
            email: user.email!,
            profilePicture: user.image!,
          };

          await socialLogin(reqBody);
        }
      }
      if (account.provider === "facebook") {
        const reqBody = {
          fullName: user.name!,
          email: user.email!,
          profilePicture: user.image!,
        };
        await socialLogin(reqBody);
      }
      if (account.provider === "github") {
        const reqBody = {
          fullName: user.name!,
          email: user.email!,
          profilePicture: user.image!,
        };
        await socialLogin(reqBody);
      }

      return true;
    },
  },

  pages: {
    signIn: "/login",
    signOut: "/auth/signout",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
