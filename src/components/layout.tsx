import type React from "react"
import { Navbar } from "@/components/navbar"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-[#F5F7F9] text-[#0A1B27] min-h-screen">
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
        <footer className="py-6 border-t border-[#ECF0F3] bg-white">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <p className="text-[#828E97] text-sm">© {new Date().getFullYear()} Nite Protocol</p>
            <div className="flex items-center space-x-4">
              <a
                href="https://t.me/DtravelCommunity"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#828E97] hover:text-[#0A1B27]"
              >
                <img src="/images/telegram-icon.png" alt="Telegram" width={24} height={24} />
                <span className="sr-only">Telegram</span>
              </a>
              <a
                href="https://x.com/dtraveldao"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#828E97] hover:text-[#0A1B27]"
              >
                <img src="/images/x-icon.png" alt="X (Twitter)" width={24} height={24} />
                <span className="sr-only">X (Twitter)</span>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
