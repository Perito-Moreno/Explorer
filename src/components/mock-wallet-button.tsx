"use client"

import { useState } from "react"

export function MockWalletButton() {
  const [isConnected, setIsConnected] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const mockAddress = "0x71C7656EC7ab88b098defB751B7401B5f6d8976F"

  // Format address for display
  const formatAddress = (addr: string) => {
    return `${addr.substring(0, 6)}...${addr.substring(addr.length - 4)}`
  }

  if (isConnected) {
    return (
      <div className="relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-[#ECF0F3] rounded-md text-sm font-medium text-[#0A1B27] hover:bg-[#F5F7F9] transition-colors"
        >
          <span className="h-2 w-2 rounded-full bg-green-500"></span>
          {formatAddress(mockAddress)}
        </button>

        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-[#ECF0F3] rounded-md shadow-sm z-10">
            <div className="p-2">
              <button
                onClick={() => {
                  setIsConnected(false)
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
      onClick={() => setIsConnected(true)}
      className="px-4 py-2 bg-[#122736] text-white rounded-md text-sm font-medium hover:bg-opacity-90 transition-colors"
    >
      Connect Wallet
    </button>
  )
}
