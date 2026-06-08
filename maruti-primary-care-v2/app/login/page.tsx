
import Link from 'next/link'
export default function Login(){
  return <main className="max-w-md mx-auto px-6 py-16">
    <h1 className="text-4xl font-bold">Patient Login</h1>
    <p className="mt-4 text-gray-600">Demo login page. Production should connect to Clerk or another secure authentication provider.</p>
    <form className="mt-8 grid gap-4">
      <input placeholder="Email Address" type="email"/><input placeholder="Password" type="password"/>
      <Link href="/portal" className="btn-primary text-center">Sign In</Link>
      <Link href="/signup" className="text-[#0B2A4A] underline">New patient? Become a Member</Link>
    </form>
  </main>
}
