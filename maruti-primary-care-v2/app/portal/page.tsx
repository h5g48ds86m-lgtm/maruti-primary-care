
import Link from 'next/link'
export default function Portal(){
  const tasks = ['Complete Registration','Complete Medical History','Sign Membership Agreement','Set Up Membership Payment','Schedule Initial Visit']
  return <main className="max-w-7xl mx-auto px-6 py-16">
    <h1 className="text-4xl font-bold">Patient Portal</h1>
    <p className="mt-4 text-gray-600">Future patient portal dashboard mockup. Production version should be protected behind authentication.</p>
    <div className="grid lg:grid-cols-3 gap-6 mt-10">
      <section className="card"><h2 className="text-2xl font-bold">Membership Status</h2><p className="mt-4 text-[#C79B52] font-bold">Enrollment In Progress</p><p className="text-gray-600 mt-2">Next step: complete payment setup.</p></section>
      <section className="card"><h2 className="text-2xl font-bold">Upcoming Appointment</h2><p className="mt-4">No appointment scheduled.</p><Link href="/intro-consultation" className="btn-primary inline-block mt-5">Request Appointment</Link></section>
      <section className="card"><h2 className="text-2xl font-bold">Billing</h2><p className="mt-4">Stripe billing connection pending.</p><button className="btn-outline mt-5">Update Payment</button></section>
    </div>
    <section className="card mt-8"><h2 className="text-2xl font-bold">Outstanding Tasks</h2><div className="grid md:grid-cols-2 gap-3 mt-5">{tasks.map(t=><div key={t}>☐ {t}</div>)}</div></section>
    <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      <div className="card"><h3 className="text-xl font-bold">Secure Messaging</h3><p className="text-gray-600 mt-2">Future physician messaging area.</p></div>
      <div className="card"><h3 className="text-xl font-bold">Documents</h3><p className="text-gray-600 mt-2">Agreements, visit summaries, educational materials.</p></div>
      <div className="card"><h3 className="text-xl font-bold">Weight Loss Tracking</h3><p className="text-gray-600 mt-2">Future progress tracker.</p></div>
      <div className="card"><h3 className="text-xl font-bold">Lab Results</h3><p className="text-gray-600 mt-2">Future lab report upload/download area.</p></div>
      <div className="card"><h3 className="text-xl font-bold">Appointments</h3><p className="text-gray-600 mt-2">Request, reschedule, telehealth links.</p></div>
      <div className="card"><h3 className="text-xl font-bold">Receipts</h3><p className="text-gray-600 mt-2">Stripe receipts and payment history.</p></div>
    </section>
  </main>
}
