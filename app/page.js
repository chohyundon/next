import { connectDB } from "@/util/database";
import React from "react";

export default async function Home() {
  const client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection("post").find().toArray();

  return <p>안녕</p>;
}
