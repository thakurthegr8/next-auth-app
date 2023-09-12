import NextAuth from "next-auth/next";
import authOptions from "@/src/services/auth";

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

export default handler;
