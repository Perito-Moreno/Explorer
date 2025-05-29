import type React from "react"
import "@/app/globals.css"
import { Figtree } from "next/font/google"
import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import Link from "next/link"
import Image from "next/image"

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
})

export const metadata: Metadata = {
  title: "Nite Protocol",
  description: "Unstoppable and autonomous vacation rental infrastructure powered by TRVL",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} font-sans bg-[#F5F7F9] text-[#0A1B27] min-h-screen`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
          <footer className="py-6 border-t border-[#ECF0F3] bg-white">
            <div className="container mx-auto px-4 flex justify-between items-center">
              <p className="text-[#828E97] text-sm">© {new Date().getFullYear()} Nite Protocol</p>
              <div className="flex items-center space-x-4">
                <Link
                  href="https://t.me/DtravelCommunity"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#828E97] hover:text-[#0A1B27]"
                >
                  <Image src="/images/telegram-icon.png" alt="Telegram" width={24} height={24} />
                  <span className="sr-only">Telegram</span>
                </Link>
                <Link
                  href="https://x.com/dtraveldao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#828E97] hover:text-[#0A1B27]"
                >
                  <Image src="/images/x-icon.png" alt="X (Twitter)" width={24} height={24} />
                  <span className="sr-only">X (Twitter)</span>
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
