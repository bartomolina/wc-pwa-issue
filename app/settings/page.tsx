"use client";

import { useRouter } from "next/navigation";

export default function Settings() {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        router.push("/");
      }}
    >
      Log out
    </button>
  );
}
