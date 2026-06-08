
'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Enrollment(){
  const [submitted,setSubmitted]=useState(false)
  if(submitted) return <main className="max-w-3xl mx-auto px-6 py-20"><div className="card bg-green-50"><h1 className="text-3xl font-bold">Enrollment Submitted</h1><p className="mt-4">Production version should save this securely, send office notifications, store e-signatures, and begin Stripe payment setup.</p><Link className="btn-primary inline-block mt-6" href="/portal">Go to Patient Portal</Link></div></main>
  return <main className="max-w-5xl mx-auto px-6 py-16">
    <h1 className="text-4xl font-bold">Member Enrollment</h1><p className="mt-4 text-gray-600">Complete registration, medical history, membership selection, consent, electronic signature, and payment setup.</p>
    <form onSubmit={(e)=>{e.preventDefault();setSubmitted(true)}} className="mt-10 space-y-8">
      <section className="card"><h2 className="text-2xl font-bold">1. Membership Selection</h2><select className="mt-4" required><option value="">Select plan</option><option>DPC 18–39: $85/month + $250 registration</option><option>DPC 40–49: $100/month + $250 registration</option><option>DPC 50–59: $125/month + $250 registration</option><option>DPC 60–64: $150/month + $250 registration</option><option>Concierge 65–69: $2,500/year + $250 registration</option><option>Concierge 70–79: $3,500/year + $250 registration</option><option>Concierge 80+: $4,000/year + $250 registration</option></select></section>
      <section className="card"><h2 className="text-2xl font-bold">2. Patient Registration</h2><div className="grid md:grid-cols-2 gap-4 mt-4"><input placeholder="Full Name" required/><input placeholder="Date of Birth" required/><input placeholder="Phone" required/><input placeholder="Email" required/><input className="md:col-span-2" placeholder="Address"/></div></section>
      <section className="card"><h2 className="text-2xl font-bold">3. Medical History</h2><textarea className="mt-4" rows={4} placeholder="Medical conditions"/><textarea className="mt-4" rows={4} placeholder="Medications and allergies"/></section>
      <section className="card"><h2 className="text-2xl font-bold">4. Consent</h2><label className="block mt-4"><input type="checkbox" required/> I consent to non-emergency phone communication.</label><label className="block mt-3"><input type="checkbox"/> I consent to text communication.</label><label className="block mt-3"><input type="checkbox"/> I consent to email communication.</label><label className="block mt-3"><input type="checkbox" required/> I understand I should call 911 for emergencies.</label></section>
      <section className="card"><h2 className="text-2xl font-bold">5. Electronic Signature</h2><input className="mt-4" placeholder="Type full legal name as e-signature" required/></section>
      <section className="card"><h2 className="text-2xl font-bold">6. Stripe Payment Setup</h2><p className="mt-2 text-gray-600">Production version should redirect to Stripe Checkout or Stripe Billing. Do not collect credit card numbers directly on this site.</p><label className="block mt-4"><input type="checkbox" required/> I understand payment setup will be completed through a secure payment processor.</label></section>
      <button className="btn-gold">Submit Enrollment</button>
    </form>
  </main>
}
