import db, { connectMongoDB } from "@/src/services/db";
import User from "@/src/services/db/models/user";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials", // Used in signin function to refer(as an identifier)
      credentials: {}, // Used for input fields, but we are using custom login page

      // Logic for login
      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          await db();
          const user = await User.findOne({ email });

          if (!user) {
            return null;
          }

          const passwordsMatch = await bcrypt.compare(password, user.password);
          if (!passwordsMatch) {
            return null;
          }

          return user;
        } catch (error) {
          console.log("error", error);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
};
export default authOptions;
