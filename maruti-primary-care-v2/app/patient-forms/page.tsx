
import Link from 'next/link'
export default function PatientForms(){
  return <main className="max-w-5xl mx-auto px-6 py-16">
    <h1 className="text-4xl font-bold">Patient Forms</h1>
    <div className="card mt-8 bg-amber-50">
      <h2 className="text-2xl font-bold">Sign Up Required</h2>
      <p className="mt-3">For privacy and security, new patients must create an account before accessing online intake forms.</p>
      <div className="mt-6 flex gap-4"><Link href="/signup" className="btn-gold">Create Account</Link><Link href="/login" className="btn-outline">Patient Login</Link></div>
    </div>
  </main>
}
