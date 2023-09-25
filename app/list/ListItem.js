"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import DetailLink from "./detailLink";
import { Coming_Soon } from "next/font/google";

export default async function ListItem({ result }) {
  return (
    <div>
      {result.map((item, index) => (
        <div className="list-item" key={index}>
          <Link prefetch={false} href={`/detail/${item._id}`}>
            <h1>{item.title}</h1>
          </Link>
          <DetailLink />
          <span
            onClick={() => {
              fetch("/api/post/delete", {
                method: "DELETE",
                body: item._id,
              })
                .then((res) => {
                  return res.json();
                })
                .then((res) => console.log(res));
            }}
          >
            🗑️
          </span>
          <Link href={`/edit/${item._id}`}>✏️</Link>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
}
