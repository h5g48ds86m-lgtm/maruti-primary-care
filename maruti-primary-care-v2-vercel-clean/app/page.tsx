
import Link from 'next/link'

export default function Home() {
  const benefits = [
    'Unlimited In-Person Office Visits',
    'Unlimited Phone Consultations',
    'Convenient Direct Text Communication with Your Physician',
    'Convenient Direct Email Access to Your Physician',
    'Same-Day or Next-Day Appointments When Available',
    'Extended, Unhurried Visits',
    'Telehealth Visits',
    'Preventive Care & Wellness Planning'
  ]
  return (
    <main>
      <section className="bg-[#0B2A4A] text-white px-6 py-28 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">Personalized Primary Care, Redefined</h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-blue-100">Direct Primary Care & Concierge Medicine serving Marlborough and MetroWest Massachusetts.</p>
        <p className="mt-4 text-xl font-semibold text-[#C79B52]">Membership Plans Starting at $85/Month</p>
        <p className="mt-2">One-time new member registration fee: $250</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/signup" className="btn-gold">Become a Member</Link>
          <Link href="/login" className="bg-white text-[#0B2A4A] px-5 py-3 rounded-full font-bold">Patient Login</Link>
          <Link href="/contact" className="border border-white px-5 py-3 rounded-full font-bold">Book Consultation</Link>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold">Unlimited Access. Personalized Care.</h2>
        <div className="grid md:grid-cols-2 gap-4 mt-8">
          {benefits.map(b => <div className="card" key={b}>✓ {b}</div>)}
        </div>
      </section>
    </main>
  )
}
