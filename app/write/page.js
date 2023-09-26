import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function page() {
  let a = await getServerSession(authOptions);
  if (a === null) {
    return <div>로그인 하세요</div>;
  } else {
    return (
      <div className="p-20">
        <h4>글 작성</h4>
        <form action="/api/post/new" method="POST">
          <input name="title" placeholder="글제목" type="text"></input>
          <input name="content" placeholder="글내용" type="text"></input>
          <button type="submit">글 작성 버튼</button>
        </form>
      </div>
    );
  }
}
