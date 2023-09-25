import React from "react";

export default function page() {
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
