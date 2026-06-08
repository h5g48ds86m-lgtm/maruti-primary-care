
export default function Page(){
  return <main className="max-w-6xl mx-auto px-6 py-16">
    <h1 className="text-4xl font-bold">Book Introductory Consultation</h1>
    <p className="mt-5 text-gray-600 text-lg max-w-3xl">Request a brief introductory consultation to learn whether MARUTI Primary Care is a good fit for your healthcare needs.</p>

    <form className="mt-8 grid gap-4 max-w-2xl">
      <input placeholder="Full Name" /><input placeholder="Email Address" /><input placeholder="Phone Number" />
      <textarea placeholder="What would you like to discuss?" rows={5}></textarea>
      <button className="btn-primary w-fit">Request Consultation</button>
    </form>

  </main>
}
