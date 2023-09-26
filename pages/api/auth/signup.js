import { connectDB } from "@/util/database";

export default async function SignUp(요청, 응답) {
  if (요청.method === "POST") {
    const client = await connectDB;
    const db = client.db("forum");
    let result = await db.collection("user_data").insertOne(요청.body);
  }
}
