import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { ObjectId } from "mongodb";

export default async function Comment(요청, 응답) {
  let a = await getServerSession(요청, 응답, authOptions);
  if (요청.method === "POST") {
    요청.body = JSON.parse(요청.body);
    let 저정할거 = {
      content: 요청.body.comment,
      parent: new ObjectId(요청.body.id),
      author: a.user.email,
    };
    const client = await connectDB;
    const db = client.db("forum");
    let result = await db.collection("comment").insertOne(저정할거);
    응답.status(200).json("성공");
  }
}
