"use client"

import { useState } from "react"
import { useAccount, useChainId } from "wagmi"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, ExternalLink } from "lucide-react"

interface StakeModalProps {
  isOpen: boolean
  onClose: () => void
  property: any
}

export function StakeModal({ isOpen, onClose, property }: StakeModalProps) {
  const { isConnected } = useAccount()
  const chainId = useChainId()
  const [stakeAmount, setStakeAmount] = useState("")
  const [unstakeAmount, setUnstakeAmount] = useState("")
  const [isStaking, setIsStaking] = useState(false)
  const [isUnstaking, setIsUnstaking] = useState(false)

  const handleStake = async () => {
    if (!isConnected) {
      alert("Please connect your wallet first")
      return
    }

    setIsStaking(true)
    try {
      // Simulate staking transaction
      await new Promise((resolve) => setTimeout(resolve, 2000))
      alert(`Successfully staked ${stakeAmount} TRVL for ${property.tokenSymbol}`)
      setStakeAmount("")
    } catch (error) {
      alert("Staking failed. Please try again.")
    } finally {
      setIsStaking(false)
    }
  }

  const handleUnstake = async () => {
    if (!isConnected) {
      alert("Please connect your wallet first")
      return
    }

    setIsUnstaking(true)
    try {
      // Simulate unstaking transaction
      await new Promise((resolve) => setTimeout(resolve, 2000))
      alert(`Successfully unstaked ${unstakeAmount} ${property.tokenSymbol}`)
      setUnstakeAmount("")
    } catch (error) {
      alert("Unstaking failed. Please try again.")
    } finally {
      setIsUnstaking(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            Stake & Unstake
            <span className="text-sm font-normal text-[#828E97]">({property.tokenSymbol})</span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Property Info */}
          <div className="bg-[#F5F7F9] p-4 rounded-lg">
            <h3 className="font-medium text-[#0A1B27] mb-2">{property.name}</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-[#828E97]">Token Price:</span>
                <div className="font-medium">
                  1 {property.tokenSymbol} = {property.tokenPrice} TRVL
                </div>
              </div>
              <div>
                <span className="text-[#828E97]">Total Staked:</span>
                <div className="font-medium">{Number(property.stakedAmount).toLocaleString()} TRVL</div>
              </div>
            </div>
            <div className="mt-2">
              <a
                href={`https://etherscan.io/address/${property.contractAddress}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#122736] text-xs hover:underline inline-flex items-center gap-1"
              >
                View Contract
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {!isConnected && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-yellow-600" />
              <span className="text-sm text-yellow-800">Please connect your wallet to stake or unstake</span>
            </div>
          )}

          <Tabs defaultValue="stake" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="stake">Stake TRVL</TabsTrigger>
              <TabsTrigger value="unstake">Unstake {property.tokenSymbol}</TabsTrigger>
            </TabsList>

            <TabsContent value="stake" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="stake-amount">Amount to Stake (TRVL)</Label>
                <Input
                  id="stake-amount"
                  type="number"
                  placeholder="Enter TRVL amount"
                  value={stakeAmount}
                  onChange={(e) => setStakeAmount(e.target.value)}
                  disabled={!isConnected}
                />
                {stakeAmount && (
                  <div className="text-sm text-[#828E97]">
                    You will receive: {(Number(stakeAmount) / property.tokenPrice).toFixed(4)} {property.tokenSymbol}
                  </div>
                )}
              </div>
              <Button onClick={handleStake} disabled={!isConnected || !stakeAmount || isStaking} className="w-full">
                {isStaking ? "Staking..." : "Stake TRVL"}
              </Button>
            </TabsContent>

            <TabsContent value="unstake" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="unstake-amount">Amount to Unstake ({property.tokenSymbol})</Label>
                <Input
                  id="unstake-amount"
                  type="number"
                  placeholder={`Enter ${property.tokenSymbol} amount`}
                  value={unstakeAmount}
                  onChange={(e) => setUnstakeAmount(e.target.value)}
                  disabled={!isConnected}
                />
                {unstakeAmount && (
                  <div className="text-sm text-[#828E97]">
                    You will receive: {(Number(unstakeAmount) * property.tokenPrice).toFixed(2)} TRVL
                  </div>
                )}
              </div>
              <Button
                onClick={handleUnstake}
                disabled={!isConnected || !unstakeAmount || isUnstaking}
                className="w-full"
                variant="outline"
              >
                {isUnstaking ? "Unstaking..." : `Unstake ${property.tokenSymbol}`}
              </Button>
            </TabsContent>
          </Tabs>

          <div className="text-xs text-[#828E97] space-y-1">
            <div>• Staking TRVL tokens gives you property tokens that represent your share</div>
            <div>• Property tokens can be unstaked back to TRVL at any time</div>
            <div>• Token prices may fluctuate based on property performance</div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
