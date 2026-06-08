
import Link from 'next/link'
export default function Membership() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold">Membership Plans</h1>
      <p className="mt-4 text-gray-600">Simple, transparent membership options for Direct Primary Care and Concierge Primary Care.</p>
      <div className="rounded-2xl bg-[#0B2A4A] text-white p-6 mt-8"><h2 className="text-2xl font-bold">One-Time New Member Registration Fee: $250</h2><p className="mt-2 text-blue-100">Includes onboarding, medical history review, records review, and personalized care plan setup.</p></div>
      <div className="grid md:grid-cols-2 gap-8 mt-10">
        <section className="card"><h2 className="text-2xl font-bold">Direct Primary Care Ages 18–64</h2><p className="mt-2 text-gray-600">Insurance is not billed for primary care consultation services.</p><ul className="mt-6 space-y-3"><li>18–39 Years: <b>$85/month</b></li><li>40–49 Years: <b>$100/month</b></li><li>50–59 Years: <b>$125/month</b></li><li>60–64 Years: <b>$150/month</b></li></ul></section>
        <section className="card"><h2 className="text-2xl font-bold">Concierge Primary Care Ages 65+</h2><p className="mt-2 text-gray-600">Medicare is billed for covered services only. Membership covers non-covered concierge benefits.</p><ul className="mt-6 space-y-3"><li>65–69 Years: <b>$2,500/year</b></li><li>70–79 Years: <b>$3,500/year</b></li><li>80+ Years: <b>$4,000/year</b></li></ul></section>
      </div>
      <section className="rounded-2xl bg-gray-50 p-6 mt-8"><h2 className="text-2xl font-bold">Membership Flexibility</h2><p className="mt-3">No long-term contract required. Memberships may be cancelled with 30-day mutual written notice. Prepaid fees are prorated for the unused portion, less outstanding balances.</p></section>
      <Link href="/signup" className="btn-gold inline-block mt-8">Become a Member</Link>
    </main>
  )
}
