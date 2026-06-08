
import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'MARUTI Primary Care | Concierge & Direct Primary Care in Marlborough, MA',
  description: 'MARUTI Primary Care provides Direct Primary Care, Concierge Medicine, Medicare concierge care, and physician-guided weight loss in MetroWest Massachusetts.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const nav = [
    ['Home','/'], ['About','/about'], ['Services','/services'], ['Membership','/membership'],
    ['Weight Loss','/weight-loss'], ['Medicare','/medicare'], ['Contact','/contact']
  ]
  return (
    <html lang="en">
      <body>
        <header className="border-b bg-white sticky top-0 z-50">
          <div className="mx-auto max-w-7xl px-5 py-3">
            <div className="flex items-center justify-between gap-4">
              <Link href="/" className="font-bold text-xl text-[#0B2A4A]">MARUTI PRIMARY CARE</Link>
              <nav className="hidden lg:flex gap-4 text-sm">
                {nav.map(([label,href]) => <Link key={href} href={href}>{label}</Link>)}
              </nav>
              <div className="hidden md:flex gap-2">
                <Link href="/signup" className="btn-gold text-sm">Become a Member</Link>
                <Link href="/login" className="btn-outline text-sm">Patient Login</Link>
                <Link href="/intro-consultation" className="btn-primary text-sm">Book Consultation</Link>
              </div>
            </div>
          </div>
        </header>
        {children}
        <footer className="bg-[#0B2A4A] text-white px-6 py-10 mt-16">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            <div><p className="font-bold text-lg">MARUTI PRIMARY CARE</p><p className="text-blue-100 mt-2">Personalized Primary Care, Redefined</p></div>
            <div><p>246 Maple Street, Suite 2</p><p>Marlborough, MA 01752</p></div>
            <div><p>(508) 625-6721</p><p>directMD@marutiprimarycare.com</p><p>www.marutiprimarycare.com</p></div>
          </div>
        </footer>
      </body>
    </html>
  )
}
