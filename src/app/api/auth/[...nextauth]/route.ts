import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import { userAgent } from "next/server";

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
  ],

  callbacks: {
    signIn: ({ profile, account, user }) => {
      console.log({ profile, account, user });

      if (!profile || !account) {
        return false;
      }
      if (account.provider === "google") {
        const reqBody = {
          fullName: user.name,
          username: user.name?.toLowerCase().split(" ").join(""),
          email: user.email,
          profilePicture: user.image,
        };
        console.log(reqBody);
      }
      if (account.provider === "facebook") {
        const reqBody = {
          fullName: user.name,
          username: user.name?.toLowerCase().split(" ").join(""),
          email: user.email,
          profilePicture: user.image,
        };
        console.log(reqBody);
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
