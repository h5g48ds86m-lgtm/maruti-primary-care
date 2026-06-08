
import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'MARUTI Primary Care | Concierge & Direct Primary Care',
  description: 'Direct Primary Care & Concierge Medicine in Marlborough, MA.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b bg-white">
          <div className="mx-auto max-w-7xl px-5 py-4 flex items-center justify-between">
            <Link href="/" className="font-bold text-xl text-[#0B2A4A]">MARUTI PRIMARY CARE</Link>
            <nav className="hidden md:flex gap-4 text-sm">
              <Link href="/">Home</Link>
              <Link href="/membership">Membership</Link>
              <Link href="/patient-forms">Patient Forms</Link>
              <Link href="/contact">Contact</Link>
            </nav>
            <Link href="/signup" className="btn-gold text-sm">Become a Member</Link>
          </div>
        </header>
        {children}
        <footer className="bg-[#0B2A4A] text-white px-6 py-10 mt-16">
          <div className="max-w-7xl mx-auto">
            <p className="font-bold">MARUTI PRIMARY CARE</p>
            <p>246 Maple Street, Suite 2, Marlborough, MA 01752</p>
            <p>(508) 625-6721 • directMD@marutiprimarycare.com</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
