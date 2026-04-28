'use client'

export default function ContactDemoSection() {
  return (
    <section id="contact" className="border-t border-gray-100 bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-primary">Contact</p>
          <h2 className="mb-5 text-4xl font-bold tracking-tight text-dark">Book a Consultation or Send an Inquiry</h2>
          <p className="text-lg leading-relaxed text-gray-500">
            This is a demo contact form for now. It is designed to show the final layout and user flow before backend submission is connected.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="rounded-[2rem] bg-dark p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.18)]">
            <div className="mb-10">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary/80">Demo Contact Info</p>
              <h3 className="mt-4 text-3xl font-bold">Let&apos;s Start the Conversation</h3>
              <p className="mt-4 max-w-sm leading-7 text-white/70">
                For demonstration, these details are placeholders. Once the real contact flow is ready, this section can connect to clinic addresses, appointment lines, and email routing.
              </p>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary/80">Email</p>
                <p className="mt-2 text-lg font-semibold">contact@drlamsal.com</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary/80">Phone</p>
                <p className="mt-2 text-lg font-semibold">+65 5555 0188</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary/80">Clinic Hours</p>
                <p className="mt-2 text-lg font-semibold">Mon - Fri, 9:00 AM - 5:30 PM</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-gray-100 bg-gray-50 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] md:p-8">
            <form className="grid gap-6" onSubmit={(event) => event.preventDefault()}>
              <div className="grid gap-6 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-dark">
                  Full Name
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-dark outline-none transition focus:border-primary"
                  />
                </label>

                <label className="grid gap-2 text-sm font-semibold text-dark">
                  Email Address
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-dark outline-none transition focus:border-primary"
                  />
                </label>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-dark">
                  Phone Number
                  <input
                    type="tel"
                    placeholder="+1 234 567 890"
                    className="rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-dark outline-none transition focus:border-primary"
                  />
                </label>

                <label className="grid gap-2 text-sm font-semibold text-dark">
                  Appointment Type
                  <select className="rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-dark outline-none transition focus:border-primary">
                    <option>General Consultation</option>
                    <option>Follow-up Visit</option>
                    <option>Neurology Evaluation</option>
                    <option>Second Opinion</option>
                  </select>
                </label>
              </div>

              <label className="grid gap-2 text-sm font-semibold text-dark">
                Preferred Date
                <input
                  type="date"
                  className="rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-dark outline-none transition focus:border-primary"
                />
              </label>

              <label className="grid gap-2 text-sm font-semibold text-dark">
                Message
                <textarea
                  rows={6}
                  placeholder="Tell us briefly about your inquiry or the support you are looking for."
                  className="resize-none rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-dark outline-none transition focus:border-primary"
                />
              </label>

              <div className="flex flex-col gap-4 border-t border-gray-200 pt-6 md:flex-row md:items-center md:justify-between">
                <p className="max-w-md text-sm leading-6 text-gray-500">
                  Demo mode: this form does not send data yet. It is only for previewing the final contact experience.
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-dark transition-transform hover:scale-[1.02]"
                >
                  Send Demo Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
