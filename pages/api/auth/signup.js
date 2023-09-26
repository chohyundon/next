import { connectDB } from "@/util/database";
import bcrypt from "bcrypt";

export default async function SignUp(요청, 응답) {
  if (요청.method === "POST") {
    let hash = await bcrypt.hash(요청.body.password, 10);
    요청.body.password = hash;

    if (요청.body.name === "king") {
      요청.body.role = "admin";
    } else {
      요청.body.role = "user";
    }

    const client = await connectDB;
    const db = client.db("forum");
    let result = await db.collection("user_data").insertOne(요청.body);
    응답.status(200).json("가입성공");
  }
}
