"use client"

import type React from "react"

import { useState } from "react"
import { X } from "lucide-react"

interface StakeModalProps {
  isOpen: boolean
  onClose: () => void
  property: {
    name: string
    tokenSymbol: string
    tokenPrice: number
  }
  userTrvlBalance?: string
  userTokenBalance?: string
}

export function StakeModal({
  isOpen,
  onClose,
  property,
  userTrvlBalance = "25000",
  userTokenBalance = "150",
}: StakeModalProps) {
  const [stakeAmount, setStakeAmount] = useState("")
  const [unstakeAmount, setUnstakeAmount] = useState("")

  if (!isOpen) return null

  const handleStake = () => {
    // In a real app, this would call a smart contract function
    alert(`Staking ${stakeAmount} TRVL for ${property.name}`)
    setStakeAmount("")
  }

  const handleUnstake = () => {
    // In a real app, this would call a smart contract function
    alert(`Unstaking ${unstakeAmount} ${property.tokenSymbol} from ${property.name}`)
    setUnstakeAmount("")
  }

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={handleBackdropClick}>
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b border-[#ECF0F3]">
          <h3 className="text-lg font-semibold text-[#0A1B27]">Stake TRVL for {property.name}</h3>
          <button onClick={onClose} className="text-[#828E97] hover:text-[#0A1B27]">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <div className="text-sm text-[#828E97]">Your TRVL Balance</div>
              <div className="font-semibold text-[#0A1B27]">{Number(userTrvlBalance).toLocaleString()} TRVL</div>
            </div>
            <div>
              <div className="text-sm text-[#828E97]">Your {property.tokenSymbol} Balance</div>
              <div className="font-semibold text-[#0A1B27]">
                {Number(userTokenBalance).toLocaleString()} {property.tokenSymbol}
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="font-medium text-[#0A1B27] mb-2">Stake TRVL</h4>
            <p className="text-sm text-[#253947] mb-4">
              Stake TRVL to receive {property.tokenSymbol} tokens.
              <br />
              Current rate: 1 {property.tokenSymbol} = {property.tokenPrice} TRVL
            </p>
            <div className="flex gap-2">
              <input
                type="number"
                value={stakeAmount}
                onChange={(e) => setStakeAmount(e.target.value)}
                placeholder="Amount of TRVL to stake"
                className="flex-1 px-3 py-2 border border-[#ECF0F3] rounded-md focus:outline-none focus:ring-1 focus:ring-[#122736]"
              />
              <button
                onClick={handleStake}
                disabled={!stakeAmount || Number(stakeAmount) <= 0}
                className="px-4 py-2 bg-[#122736] text-white rounded-md font-medium hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Stake
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-[#0A1B27] mb-2">Unstake {property.tokenSymbol}</h4>
            <p className="text-sm text-[#253947] mb-4">
              Redeem your {property.tokenSymbol} tokens for TRVL.
              <br />
              Current rate: 1 {property.tokenSymbol} = {property.tokenPrice} TRVL
            </p>
            <div className="flex gap-2">
              <input
                type="number"
                value={unstakeAmount}
                onChange={(e) => setUnstakeAmount(e.target.value)}
                placeholder={`Amount of ${property.tokenSymbol} to unstake`}
                className="flex-1 px-3 py-2 border border-[#ECF0F3] rounded-md focus:outline-none focus:ring-1 focus:ring-[#122736]"
              />
              <button
                onClick={handleUnstake}
                disabled={!unstakeAmount || Number(unstakeAmount) <= 0}
                className="px-4 py-2 border border-[#122736] text-[#122736] rounded-md font-medium hover:bg-[#F5F7F9] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Unstake
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
