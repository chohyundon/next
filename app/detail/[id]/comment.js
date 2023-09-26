"use client";
import { useEffect, useState } from "react";

export default function Comment(props) {
  let [comment, setComment] = useState("");

  useEffect(() => {
    fetch("/api/comment/list")
      .then((res) => res.json())
      .then((result) => {});
  }, [comment]);

  return (
    <div>
      <div>댓글 목록 보여줄 부분</div>
      <input
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <button
        onClick={() => {
          fetch("/api/comment/new", {
            method: "POST",
            body: JSON.stringify({ comment: comment, id: props.id }),
          });
        }}
      >
        댓글 전송
      </button>
    </div>
  );
}
