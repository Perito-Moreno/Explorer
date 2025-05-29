"use client"

import { useState } from "react"
import { useAccount, useConnect, useDisconnect, useChainId, useSwitchChain } from "wagmi"
import { base, mainnet, classic } from "wagmi/chains"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, Wallet, Copy, ExternalLink } from "lucide-react"

const chainNames = {
  [mainnet.id]: "Ethereum",
  [base.id]: "Base",
  [classic.id]: "Ethereum Classic",
}

const chainColors = {
  [mainnet.id]: "bg-blue-500",
  [base.id]: "bg-blue-600",
  [classic.id]: "bg-green-500",
}

export function WalletConnectButton() {
  const { address, isConnected } = useAccount()
  const { connect, connectors, isPending } = useConnect()
  const { disconnect } = useDisconnect()
  const chainId = useChainId()
  const { switchChain } = useSwitchChain()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const formatAddress = (addr: string) => {
    return `${addr.substring(0, 6)}...${addr.substring(addr.length - 4)}`
  }

  const copyAddress = () => {
    if (address) {
      navigator.clipboard.writeText(address)
    }
  }

  const openEtherscan = () => {
    if (address) {
      let explorerUrl = ""
      switch (chainId) {
        case mainnet.id:
          explorerUrl = `https://etherscan.io/address/${address}`
          break
        case base.id:
          explorerUrl = `https://basescan.org/address/${address}`
          break
        case classic.id:
          explorerUrl = `https://blockscout.com/etc/mainnet/address/${address}`
          break
        default:
          explorerUrl = `https://etherscan.io/address/${address}`
      }
      window.open(explorerUrl, "_blank")
    }
  }

  if (isConnected && address) {
    return (
      <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="flex items-center gap-2 px-4 py-2 bg-white border border-[#ECF0F3] rounded-md text-sm font-medium text-[#0A1B27] hover:bg-[#F5F7F9] transition-colors"
          >
            <div className={`h-2 w-2 rounded-full ${chainColors[chainId] || "bg-gray-500"}`}></div>
            <span>{formatAddress(address)}</span>
            <span className="text-xs text-[#828E97]">({chainNames[chainId] || "Unknown"})</span>
            <ChevronDown className="h-3 w-3" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-64">
          <div className="px-3 py-2">
            <div className="text-sm font-medium text-[#0A1B27]">Connected Wallet</div>
            <div className="text-xs text-[#828E97] mt-1">{address}</div>
          </div>
          <DropdownMenuSeparator />

          {/* Chain Switching */}
          <div className="px-3 py-2">
            <div className="text-xs font-medium text-[#828E97] mb-2">Switch Network</div>
            {[mainnet, base, classic].map((chain) => (
              <button
                key={chain.id}
                onClick={() => switchChain({ chainId: chain.id })}
                className={`w-full flex items-center gap-2 px-2 py-1 text-sm rounded hover:bg-[#F5F7F9] ${
                  chainId === chain.id ? "bg-[#F5F7F9] font-medium" : ""
                }`}
              >
                <div className={`h-2 w-2 rounded-full ${chainColors[chain.id]}`}></div>
                {chainNames[chain.id]}
              </button>
            ))}
          </div>

          <DropdownMenuSeparator />

          <DropdownMenuItem onClick={copyAddress} className="flex items-center gap-2">
            <Copy className="h-4 w-4" />
            Copy Address
          </DropdownMenuItem>

          <DropdownMenuItem onClick={openEtherscan} className="flex items-center gap-2">
            <ExternalLink className="h-4 w-4" />
            View on Explorer
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem
            onClick={() => disconnect()}
            className="flex items-center gap-2 text-red-600 hover:text-red-700"
          >
            <Wallet className="h-4 w-4" />
            Disconnect
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          disabled={isPending}
          className="px-4 py-2 bg-[#122736] text-white rounded-md text-sm font-medium hover:bg-opacity-90 transition-colors"
        >
          <Wallet className="h-4 w-4 mr-2" />
          {isPending ? "Connecting..." : "Connect Wallet"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <div className="px-3 py-2">
          <div className="text-sm font-medium text-[#0A1B27]">Connect Wallet</div>
          <div className="text-xs text-[#828E97] mt-1">Choose your preferred wallet</div>
        </div>
        <DropdownMenuSeparator />
        {connectors.map((connector) => (
          <DropdownMenuItem
            key={connector.uid}
            onClick={() => connect({ connector })}
            className="flex items-center gap-2"
          >
            <Wallet className="h-4 w-4" />
            {connector.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
