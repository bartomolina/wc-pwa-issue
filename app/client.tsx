"use client";

import { WagmiConfig } from "wagmi";
import { wagmiConfig } from "@/lib/wagmi-wc-client";

export function Client({ children }: { children: React.ReactNode }) {
  return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>;
}
