
'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Signup(){
  const [created,setCreated]=useState(false)
  if(created) return <main className="max-w-3xl mx-auto px-6 py-20"><div className="card bg-green-50"><h1 className="text-3xl font-bold">Account Created</h1><p className="mt-4">Demo workflow: after email verification, the patient continues to membership selection, online forms, e-signature, and Stripe payment setup.</p><Link href="/enrollment" className="btn-primary inline-block mt-6">Continue Enrollment</Link></div></main>
  return <main className="max-w-3xl mx-auto px-6 py-16">
    <h1 className="text-4xl font-bold">Create Your MARUTI Primary Care Account</h1>
    <p className="mt-4 text-gray-600">New patients create an account before accessing intake forms.</p>
    <form onSubmit={(e)=>{e.preventDefault();setCreated(true)}} className="mt-8 grid gap-4">
      <div className="grid md:grid-cols-2 gap-4"><input placeholder="First Name" required/><input placeholder="Last Name" required/></div>
      <input placeholder="Date of Birth" required/><input placeholder="Email Address" type="email" required/><input placeholder="Mobile Number" required/>
      <div className="grid md:grid-cols-2 gap-4"><input placeholder="Password" type="password" required/><input placeholder="Confirm Password" type="password" required/></div>
      <label><input type="checkbox" required/> I agree to the Privacy Policy and consent to electronic communication.</label>
      <button className="btn-gold w-fit">Create My Account</button>
    </form>
  </main>
}
