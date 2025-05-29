"use client"

import { useState } from "react"
import { useAccount, useConnect, useDisconnect, useSwitchChain, useChainId } from "wagmi"
import { mainnet, base, classic } from "wagmi/chains"
import { ChevronDown, Copy, ExternalLink, Wallet, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const supportedChains = [mainnet, base, classic]

const getChainColor = (chainId: number) => {
  switch (chainId) {
    case mainnet.id:
      return "bg-blue-500"
    case base.id:
      return "bg-blue-600"
    case classic.id:
      return "bg-green-600"
    default:
      return "bg-gray-500"
  }
}

const getExplorerUrl = (chainId: number, address: string) => {
  switch (chainId) {
    case mainnet.id:
      return `https://etherscan.io/address/${address}`
    case base.id:
      return `https://basescan.org/address/${address}`
    case classic.id:
      return `https://blockscout.com/etc/mainnet/address/${address}`
    default:
      return `https://etherscan.io/address/${address}`
  }
}

export function WalletConnectButton() {
  const { address, isConnected } = useAccount()
  const { connect, connectors } = useConnect()
  const { disconnect } = useDisconnect()
  const { switchChain } = useSwitchChain()
  const chainId = useChainId()
  const [copied, setCopied] = useState(false)

  const formatAddress = (addr: string) => {
    return `${addr.substring(0, 6)}...${addr.substring(addr.length - 4)}`
  }

  const copyAddress = async () => {
    if (address) {
      await navigator.clipboard.writeText(address)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const currentChain = supportedChains.find((chain) => chain.id === chainId)

  if (isConnected && address) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2">
            <span className={`h-2 w-2 rounded-full ${getChainColor(chainId)}`}></span>
            <span className="font-mono text-sm">{formatAddress(address)}</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-64">
          <DropdownMenuLabel className="flex items-center gap-2">
            <Wallet className="h-4 w-4" />
            Wallet Connected
          </DropdownMenuLabel>
          <DropdownMenuSeparator />

          {/* Current Chain */}
          <div className="px-2 py-1">
            <div className="text-xs text-gray-500 mb-1">Current Network</div>
            <div className="flex items-center gap-2">
              <span className={`h-2 w-2 rounded-full ${getChainColor(chainId)}`}></span>
              <span className="text-sm font-medium">{currentChain?.name || "Unknown"}</span>
            </div>
          </div>

          <DropdownMenuSeparator />

          {/* Address Actions */}
          <DropdownMenuItem onClick={copyAddress} className="flex items-center gap-2">
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            {copied ? "Copied!" : "Copy Address"}
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <a
              href={getExplorerUrl(chainId, address)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <ExternalLink className="h-4 w-4" />
              View on Explorer
            </a>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          {/* Chain Switching */}
          <DropdownMenuLabel>Switch Network</DropdownMenuLabel>
          {supportedChains.map((chain) => (
            <DropdownMenuItem
              key={chain.id}
              onClick={() => switchChain({ chainId: chain.id })}
              className="flex items-center gap-2"
              disabled={chain.id === chainId}
            >
              <span className={`h-2 w-2 rounded-full ${getChainColor(chain.id)}`}></span>
              <span>{chain.name}</span>
              {chain.id === chainId && <span className="ml-auto text-xs text-green-600">Connected</span>}
            </DropdownMenuItem>
          ))}

          <DropdownMenuSeparator />

          <DropdownMenuItem onClick={() => disconnect()} className="text-red-600">
            Disconnect
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-[#122736] text-white hover:bg-[#122736]/90">
          <Wallet className="h-4 w-4 mr-2" />
          Connect Wallet
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>Choose Wallet</DropdownMenuLabel>
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
