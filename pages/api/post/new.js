import React from "react";
import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function New(요청, 응답) {
  let session = await getServerSession(요청, 응답, authOptions);
  if (session) {
    요청.body.author = session.user.email;
  }

  if (요청.method === "POST") {
    if (요청.body.title === "" || 요청.body.content === "") {
      return 응답.status(400).json("재대로 입력해주세요");
    }
    const client = await connectDB;
    const db = client.db("forum");
    let result = await db.collection("post").insertOne(요청.body);
    return 응답.status(200).redirect(300, "/list");
  }
}
