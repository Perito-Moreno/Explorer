import { createConfig, http } from "wagmi"
import { mainnet, base, classic } from "wagmi/chains"
import { injected, walletConnect, coinbaseWallet } from "wagmi/connectors"

// WalletConnect project ID - TODO: get this from WalletConnect Cloud
const projectId = "YOUR_PROJECT_ID"

export const config = createConfig({
  chains: [mainnet, base, classic],
  connectors: [
    injected(),
    walletConnect({
      projectId,
      metadata: {
        name: "Nite Protocol",
        description: "Unstoppable and autonomous vacation rental infrastructure powered by TRVL",
        url: "https://niteprotocol.com",
        icons: ["https://niteprotocol.com/icon.png"],
      },
    }),
    coinbaseWallet({
      appName: "Nite Protocol",
      appLogoUrl: "https://niteprotocol.com/icon.png",
    }),
  ],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
    [classic.id]: http(),
  },
})
