import React from "react";
import { ObjectId } from "mongodb";
import { connectDB } from "@/util/database";

export default async function edit(요청, 응답) {
  if (요청.method === "POST") {
    let 바꿀거 = { title: 요청.body.title, content: 요청.body.content };
    const client = await connectDB;
    const db = client.db("forum");

    let edit = await db
      .collection("post")
      .updateOne({ _id: new ObjectId(요청.body._id) }, { $set: 바꿀거 });
  }
  응답.status(200).redirect(302, "/list");
}
