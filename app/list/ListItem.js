"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import DetailLink from "./detailLink";

export default async function ListItem({ result }) {
  useEffect(() => {});

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
              fetch("/api/test").then(() => {
                console.log(123);
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
