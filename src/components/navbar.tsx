import { Link, useLocation } from "react-router-dom"
import { WalletConnectButton } from "@/components/wallet-connect-button"

export function Navbar() {
  const location = useLocation()

  return (
    <nav className="bg-white border-b border-[#ECF0F3] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/images/logo.png" alt="Nite Protocol" className="h-8 w-auto" />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                location.pathname === "/"
                  ? "text-[#122736] border-b-2 border-[#122736] pb-1"
                  : "text-[#253947] hover:text-[#122736]"
              }`}
            >
              Home
            </Link>
            <Link
              to="/explore"
              className={`text-sm font-medium transition-colors ${
                location.pathname === "/explore"
                  ? "text-[#122736] border-b-2 border-[#122736] pb-1"
                  : "text-[#253947] hover:text-[#122736]"
              }`}
            >
              Explore
            </Link>
          </div>

          {/* Social Links and Wallet */}
          <div className="flex items-center space-x-4">
            <a
              href="https://x.com/niteprotocol"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#253947] hover:text-[#122736] transition-colors"
            >
              <img src="/images/x-icon.png" alt="X" className="h-5 w-5" />
            </a>
            <a
              href="https://t.me/niteprotocol"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#253947] hover:text-[#122736] transition-colors"
            >
              <img src="/images/telegram-icon.png" alt="Telegram" className="h-5 w-5" />
            </a>
            <WalletConnectButton />
          </div>
        </div>
      </div>
    </nav>
  )
}
