import type React from "react"
import { Navbar } from "@/components/navbar"
import { WalletProvider } from "@/components/wallet-provider"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <WalletProvider>
      <div className="min-h-screen bg-[#F5F7F9]">
        <Navbar />
        <main className="py-8 px-4 sm:px-6 lg:px-8">{children}</main>
      </div>
    </WalletProvider>
  )
}
