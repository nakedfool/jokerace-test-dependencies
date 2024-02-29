import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import {
  argentWallet,
  bitgetWallet,
  imTokenWallet,
  metaMaskWallet,
  okxWallet,
  omniWallet,
  phantomWallet,
  rabbyWallet,
  rainbowWallet,
  tahoWallet,
  trustWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { createConfig, http } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";

const appName = "jokerace-test-dependencies";
const projectId = "4004e402c0a09172e9b7222df6a916be";

const connectors = connectorsForWallets(
  [
    {
      groupName: "Wallets",
      wallets: [
        metaMaskWallet,
        rainbowWallet,
        walletConnectWallet,
        okxWallet,
        tahoWallet,
        argentWallet,
        trustWallet,
        imTokenWallet,
        omniWallet,
        bitgetWallet,
        rabbyWallet,
        phantomWallet,
      ],
    },
  ],
  {
    projectId: projectId,
    appName: appName,
  }
);

export const config = createConfig({
  connectors: connectors,
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});
