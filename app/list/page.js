import React from "react";
import { connectDB } from "@/util/database";
import ListItem from "./ListItem";

export default async function List() {
  const client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <>
      <ListItem result={result} />
    </>
  );
}