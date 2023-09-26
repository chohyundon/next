import React from "react";
import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Test(요청, 응답) {
  if (요청.method === "DELETE") {
    const client = await connectDB;
    const db = client.db("forum");
    let result = await db
      .collection("post")
      .deleteOne({ _id: new ObjectId(요청.query) });
    return 응답.status(200).json("삭제되었습니다.");
  }
}
