import { http, createConfig } from "wagmi"
import { base, mainnet, classic } from "wagmi/chains"
import { coinbaseWallet, injected, walletConnect } from "wagmi/connectors"

// WalletConnect project ID - you should replace this with your own
const projectId = "YOUR_WALLETCONNECT_PROJECT_ID"

export const config = createConfig({
  chains: [mainnet, base, classic],
  connectors: [
    injected(),
    coinbaseWallet({
      appName: "Nite Protocol",
      appLogoUrl: "/images/logo.png",
    }),
    walletConnect({
      projectId,
      metadata: {
        name: "Nite Protocol",
        description: "Decentralized property staking platform",
        url: "https://niteprotocol.com",
        icons: ["/images/logo.png"],
      },
    }),
  ],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
    [classic.id]: http(),
  },
})

declare module "wagmi" {
  interface Register {
    config: typeof config
  }
}
