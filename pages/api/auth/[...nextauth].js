import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    //github 로그인
    GithubProvider({
      clientId: "9f1769a7f7a60786ad55",
      clientSecret: "b64aacc3a634ae209888ebd048196faf89579b87",
    }),
  ],
  secret: "su135794",
  adapter: MongoDBAdapter(connectDB),
};
export default NextAuth(authOptions);
