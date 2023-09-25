"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function DetailLink() {
  let router = useRouter();

  return (
    <div>
      <button
        onClick={() => {
          router.push("/");
        }}
      >
        페이지 이동
      </button>
    </div>
  );
}
