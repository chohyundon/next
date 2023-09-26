"use client";

import { signOut } from "next-auth/react";

export default function LogOut() {
  return (
    <div>
      <button
        onClick={() => {
          signOut();
        }}
      >
        로그아웃
      </button>
    </div>
  );
}
