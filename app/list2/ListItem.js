"use client";

import React from "react";
import Link from "next/link";
import DetailLink from "./detailLink";

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
            onClick={(e) => {
              fetch("/api/post/delete", {
                method: "DELETE",
                body: item._id,
              })
                .then((res) => {
                  return res.json();
                })
                .then(() => {
                  e.target.parentElement.style.opacity = 0;
                  setTimeout(() => {
                    e.target.parentElement.style.display = "none";
                  }, 1000);
                });
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
