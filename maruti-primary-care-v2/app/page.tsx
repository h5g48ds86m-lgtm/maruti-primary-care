
import Link from 'next/link'

export default function Home() {
  const benefits = [
    'Unlimited In-Person Office Visits','Unlimited Phone Consultations','Convenient Direct Text Communication with Your Physician','Convenient Direct Email Access to Your Physician','Same-Day or Next-Day Appointments When Available','Extended, Unhurried Visits','Telehealth Visits','Preventive Care & Wellness Planning'
  ]
  return (
    <main>
      <section className="hero-bg text-white px-6 py-28 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">Personalized Primary Care, Redefined</h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-blue-100">Direct Primary Care & Concierge Medicine serving Marlborough and MetroWest Massachusetts.</p>
        <p className="mt-4 text-xl font-semibold text-[#C79B52]">Membership Plans Starting at $85/Month</p>
        <p className="mt-2">One-time new member registration fee: $250</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/signup" className="btn-gold">Become a Member</Link>
          <Link href="/login" className="bg-white text-[#0B2A4A] px-5 py-3 rounded-full font-bold">Patient Login</Link>
          <Link href="/intro-consultation" className="border border-white px-5 py-3 rounded-full font-bold">Book Introductory Consultation</Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold">Healthcare Designed Around You</h2>
          <p className="mt-5 text-gray-600">Our concierge-style model provides meaningful physician relationships, extended appointment times, preventive care, and convenient access when you need it most.</p>
          <ul className="mt-6 space-y-3 text-gray-700">
            <li>✓ Direct physician access</li><li>✓ Extended, unhurried visits</li><li>✓ Preventive and wellness-focused care</li><li>✓ Medicare welcomed for eligible patients</li>
          </ul>
        </div>
        <img src="/images/doctor-consult.svg" alt="Physician consultation illustration" className="rounded-3xl shadow-lg" />
      </section>

      <section className="bg-gray-50 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold">Watch: A Better Primary Care Experience</h2>
          <p className="mt-4 text-gray-600">Add your 60–90 second practice introduction video here after recording.</p>
          <div className="mt-8 aspect-video rounded-3xl bg-[#0B2A4A] text-white flex items-center justify-center text-center p-8">
            <div><div className="mx-auto mb-5 h-20 w-20 rounded-full border-2 border-white flex items-center justify-center text-3xl">▶</div><p className="text-2xl font-bold">Practice Introduction Video</p></div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold">Unlimited Access. Personalized Care.</h2>
        <div className="grid md:grid-cols-2 gap-4 mt-8">{benefits.map(b => <div className="card" key={b}>✓ {b}</div>)}</div>
        <p className="mt-6 text-gray-600">Direct phone, text, and email access are available during normal business hours and subject to physician availability.</p>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <img src="/images/weight-loss.svg" alt="Medical weight loss illustration" className="rounded-3xl shadow-lg" />
        <div><h2 className="text-3xl font-bold">Medical Weight Loss Program</h2><p className="mt-5 text-gray-600">Physician-guided weight loss focused on metabolic health, nutrition counseling, lifestyle modification, and ongoing support.</p><Link href="/weight-loss" className="btn-primary inline-block mt-6">Learn More</Link></div>
      </section>
    </main>
  )
}
