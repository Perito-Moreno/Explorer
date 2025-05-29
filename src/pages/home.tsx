import { Link } from "react-router-dom"
import { ArrowRight, TrendingUp, Shield, Globe } from "lucide-react"

export function HomePage() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="text-center py-20">
        <h1 className="text-5xl font-bold text-[#0A1B27] mb-6">
          Stake in the Future of
          <span className="block text-[#122736]">Real Estate</span>
        </h1>
        <p className="text-xl text-[#253947] mb-8 max-w-3xl mx-auto">
          Discover tokenized properties worldwide and earn rewards by staking TRVL tokens. Join the decentralized
          revolution in property investment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/explore"
            className="inline-flex items-center px-8 py-3 bg-[#122736] text-white rounded-lg font-medium hover:bg-opacity-90 transition-colors"
          >
            Explore Properties
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <button className="inline-flex items-center px-8 py-3 border border-[#122736] text-[#122736] rounded-lg font-medium hover:bg-[#F5F7F9] transition-colors">
            Learn More
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#0A1B27] mb-4">Why Choose Nite Protocol?</h2>
          <p className="text-lg text-[#253947] max-w-2xl mx-auto">
            Experience the next generation of property investment with blockchain technology
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg border border-[#ECF0F3] text-center">
            <div className="w-16 h-16 bg-[#122736] rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-[#0A1B27] mb-4">High Yield Returns</h3>
            <p className="text-[#253947]">
              Earn competitive returns through property token staking and revenue sharing from bookings
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg border border-[#ECF0F3] text-center">
            <div className="w-16 h-16 bg-[#122736] rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-[#0A1B27] mb-4">Secure & Transparent</h3>
            <p className="text-[#253947]">
              Built on blockchain technology with smart contracts ensuring transparency and security for all
              transactions
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg border border-[#ECF0F3] text-center">
            <div className="w-16 h-16 bg-[#122736] rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-[#0A1B27] mb-4">Global Access</h3>
            <p className="text-[#253947]">
              Access premium properties worldwide with fractional ownership through tokenization
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-white rounded-lg border border-[#ECF0F3]">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#0A1B27] mb-4">Platform Statistics</h2>
          <p className="text-lg text-[#253947]">Join thousands of investors already earning with Nite Protocol</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-[#122736] mb-2">$2.5M+</div>
            <div className="text-[#253947]">Total Value Locked</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#122736] mb-2">150+</div>
            <div className="text-[#253947]">Properties Listed</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#122736] mb-2">5,000+</div>
            <div className="text-[#253947]">Active Stakers</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#122736] mb-2">12.5%</div>
            <div className="text-[#253947]">Average APY</div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 text-center">
        <h2 className="text-3xl font-bold text-[#0A1B27] mb-4">Ready to Start Earning?</h2>
        <p className="text-lg text-[#253947] mb-8 max-w-2xl mx-auto">
          Connect your wallet and start staking in premium properties today
        </p>
        <Link
          to="/explore"
          className="inline-flex items-center px-8 py-3 bg-[#122736] text-white rounded-lg font-medium hover:bg-opacity-90 transition-colors"
        >
          Get Started Now
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  )
}
