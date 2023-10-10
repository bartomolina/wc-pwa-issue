import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";
import { polygonMumbai } from "wagmi/chains";

const chains = [polygonMumbai, polygonMumbai];
export const projectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID || "";

const metadata = {
  name: "test",
  description: "test",
  url: "https://text.xyz",
  icons: [`https://text.xyz/icon-512x512.png`],
};
export const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

createWeb3Modal({
  wagmiConfig,
  projectId,
  chains,
  themeMode: "light",
  defaultChain: polygonMumbai,
});
