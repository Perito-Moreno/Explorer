"use client"

import { useState } from "react"
import { useAccount, useDisconnect } from "wagmi"

export function CustomConnectButton() {
  const { address, isConnected } = useAccount()
  const { disconnect } = useDisconnect()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  // Format address for display
  const formatAddress = (addr: string | undefined) => {
    if (!addr) return ""
    return `${addr.substring(0, 6)}...${addr.substring(addr.length - 4)}`
  }

  // Simple connect function that uses browser wallet
  const handleConnect = () => {
    // We'll just show an alert since we can't use the connector directly
    alert("Please connect your wallet using the browser extension")
  }

  if (isConnected && address) {
    return (
      <div className="relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-[#ECF0F3] rounded-md text-sm font-medium text-[#0A1B27] hover:bg-[#F5F7F9] transition-colors"
        >
          <span className="h-2 w-2 rounded-full bg-green-500"></span>
          {formatAddress(address)}
        </button>

        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-[#ECF0F3] rounded-md shadow-sm z-10">
            <div className="p-2">
              <button
                onClick={() => {
                  disconnect()
                  setIsDropdownOpen(false)
                }}
                className="w-full text-left px-3 py-2 text-sm text-[#0A1B27] hover:bg-[#F5F7F9] rounded-md"
              >
                Disconnect
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <button
      onClick={handleConnect}
      className="px-4 py-2 bg-[#122736] text-white rounded-md text-sm font-medium hover:bg-opacity-90 transition-colors"
    >
      Connect Wallet
    </button>
  )
}
