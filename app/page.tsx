import Link from "next/link"
import { ArrowRight, Building, Calendar, Shield, Key, CheckCircle, Infinity } from "lucide-react"

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <section className="py-12 md:py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#0A1B27]">
          Unstoppable and Autonomous <br />
          Vacation Rental Infrastructure
        </h1>
        <p className="text-xl text-[#253947] mb-8">
          Property Management Smart Contracts <br />
          powered by TRVL
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/explore"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#122736] text-white rounded-md font-medium hover:bg-opacity-90 transition-colors"
          >
            Explore Properties of the Nite Protocol
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="py-12 border-t border-[#ECF0F3]">
        <h2 className="text-2xl font-bold mb-8 text-[#0A1B27]">How it works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg border border-[#ECF0F3]">
            <Building className="h-8 w-8 mb-4 text-[#122736]" />
            <h3 className="text-lg font-semibold mb-2 text-[#0A1B27]">Create Property Contract</h3>
            <p className="text-[#253947]">
              Deploy to the blockchain a Property Management Smart Contract with custom parameters tailored to your
              property.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-[#ECF0F3]">
            <Calendar className="h-8 w-8 mb-4 text-[#122736]" />
            <h3 className="text-lg font-semibold mb-2 text-[#0A1B27]">Manage Property</h3>
            <p className="text-[#253947]">
              Set rates, manage availability, and configure payment options directly in your own property management
              smart contract.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-[#ECF0F3]">
            <CheckCircle className="h-8 w-8 mb-4 text-[#122736]" />
            <h3 className="text-lg font-semibold mb-2 text-[#0A1B27]">Get Bookings</h3>
            <p className="text-[#253947]">
              Link your booking sites to your property contracts to record and manage your bookings on the blockchain
              and receive payments in TRVL.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 border-t border-[#ECF0F3]">
        <h2 className="text-2xl font-bold mb-8 text-[#0A1B27]">Why the Nite Protocol?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg border border-[#ECF0F3]">
            <Infinity className="h-8 w-8 mb-4 text-[#122736]" />
            <h3 className="text-lg font-semibold mb-2 text-[#0A1B27]">Unstoppable</h3>
            <p className="text-[#253947]">
              Your property's contract operates autonomously on the blockchain, free from centralized control or
              downtime.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-[#ECF0F3]">
            <Key className="h-8 w-8 mb-4 text-[#122736]" />
            <h3 className="text-lg font-semibold mb-2 text-[#0A1B27]">Permissionless</h3>
            <p className="text-[#253947]">
              No approvals or accounts needed - anyone can deploy and manage property contracts without gatekeepers.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-[#ECF0F3]">
            <Shield className="h-8 w-8 mb-4 text-[#122736]" />
            <h3 className="text-lg font-semibold mb-2 text-[#0A1B27]">Trustworthy</h3>
            <p className="text-[#253947]">
              Transparent recording of booking terms and bookings on the blockchain increases trust between hosts and
              travelers.
            </p>
          </div>
        </div>
        <br />
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg border border-[#ECF0F3]">
            <Infinity className="h-8 w-8 mb-4 text-[#122736]" />
            <h3 className="text-lg font-semibold mb-2 text-[#0A1B27]">Single Source of Truth</h3>
            <p className="text-[#253947]">
              Your property management smart contract acts as a single source of truth about whether your property is
              booked, available or unavailable. No more double bookings or the need to manually update availability in
              multiple places.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-[#ECF0F3]">
            <Key className="h-8 w-8 mb-4 text-[#122736]" />
            <h3 className="text-lg font-semibold mb-2 text-[#0A1B27]">No Subscription Fees</h3>
            <p className="text-[#253947]">
              Only pay for what you use, when you use it. Blockchain transaction fees are paid per transaction and are
              typically less than $0.01. The Nite Protocol's effective booking fees can be as low as 0%.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-[#ECF0F3]">
            <Shield className="h-8 w-8 mb-4 text-[#122736]" />
            <h3 className="text-lg font-semibold mb-2 text-[#0A1B27]">Free Distribution</h3>
            <p className="text-[#253947]">
              Since your property's contract is public on the blockchain, anyone (e.g. OTAs, PMSs, DBS hosting services,
              search engines) can distribute listings of your property and drive bookings.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 border-t border-[#ECF0F3]">
        <h2 className="text-2xl font-bold mb-8 text-[#0A1B27]">Tokenomics and Protocol Fees</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg border border-[#ECF0F3]">
            <Shield className="h-8 w-8 mb-4 text-[#122736]" />
            <h3 className="text-lg font-semibold mb-2 text-[#0A1B27]">Staking</h3>
            <p className="text-[#253947]">
              Anyone can stake TRVL on a property, to mint the property's tokens. Tokens are backed by the balance of
              staked TRVL and can be redeemed for TRVL at any moment. A high balance of staked TRVL signals trust by
              TRVL holders.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-[#ECF0F3]">
            <Infinity className="h-8 w-8 mb-4 text-[#122736]" />
            <h3 className="text-lg font-semibold mb-2 text-[#0A1B27]">Fee: 100 TRVL/Night + 5%</h3>
            <p className="text-[#253947]">
              100% of the paid fees are accumulated in the property contract's balance, thereby increasing the price of
              the property's tokens. Therefore, 100% of the fees are earned by those who stake TRVL in the property and
              thus hold property tokens.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-[#ECF0F3]">
            <Key className="h-8 w-8 mb-4 text-[#122736]" />
            <h3 className="text-lg font-semibold mb-2 text-[#0A1B27]">Effective Fee as Low as 0%</h3>
            <p className="text-[#253947]">
              The more you stake on your own property, in comparison to the total staked in it, the more you earn back.
              If 100% of the TRVL staked in it is yours, you alone will be earning 100% of the fees, and thus the
              effective fee will be 0%.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
