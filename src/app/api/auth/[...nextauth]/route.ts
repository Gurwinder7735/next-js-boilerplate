import { socialLogin } from "@/services/auth";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: any = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_SECRET_ID ?? "",
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn(params: any) {
      try {
        const res: any = await socialLogin({
          token: params?.account?.id_token,
        });

        params.account.customToken = res.token; // Use the correct field based on your API response
        params.account.refreshToken = res.refreshToken; // Use the correct field based on your API response

        return true;
        console.log("RESPONSE FROM BACKEND COMES HERE.");
      } catch (err) {
        console.log(err);

        return true;
      }
    },
    async jwt({ token, user, account }: any) {
      // This is called whenever a JWT is created or updated.
      if (account?.customToken) {
        token.customToken = account.customToken; // Store the custom token in the JWT
        token.refreshToken = account.refreshToken; // Store the custom token in the JWT
      }

      return token; // Return the modified token
    },

    redirect(params: any) {
      return "/dashboard";
    },
    session({ session, token, user }: any) {
      console.log(token, "token>>>>");
      console.log(session, "session>>>>>>>");
      return {
        ...session,
        user: {
          ...session.user,
          refreshToken: token.refreshToken,
          customToken: token.customToken,
        },
      };
    },
  },
  secret: process.env.NEXTAUTH_SECRET, // Make sure this is set
  session: {
    strategy: "jwt", // Ensure this matches your setup
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET, // Ensure this is set
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
