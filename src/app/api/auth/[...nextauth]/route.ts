import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: any = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_SECRET_ID || "",
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    // signIn(params: any) {
    //   return true;
    // },
    redirect(params: any) {
      return "/dashboard";
    },
    session({ session, token, user }: any) {
      // if (session.user) session.user.id = token.id;
      return session;
    },
    authorized({ req, token }: any) {
      if (token) return true; // If there is a token, the user is authenticated
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
