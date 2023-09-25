import React from "react";
import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Edit(props) {
  const client = await connectDB;
  const db = client.db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  return (
    <div className="p-20">
      <h4>수정 페이지</h4>
      <form action="/api/post/edit" method="POST">
        <input name="title" defaultValue={result.title}></input>
        <input name="content" defaultValue={result.content}></input>
        <input
          style={{ display: "none" }}
          name="_id"
          defaultValue={result._id.toString()}
        ></input>
        <button type="submit">글 작성 버튼</button>
      </form>
    </div>
  );
}
