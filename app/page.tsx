"use client";

import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, isMounted] = useState(false);
  const { open } = useWeb3Modal();
  const router = useRouter();

  useEffect(() => isMounted(true));
  if (!mounted) return;

  return (
    <>
      <button onClick={() => open()}>WalletConnect</button>
      <button onClick={() => router.push("/settings")}>Settings</button>
    </>
  );
}
