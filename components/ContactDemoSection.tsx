'use client'

import { useState, type FormEvent } from 'react'

export default function ContactDemoSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    setIsSubmitting(true)
    setStatus(null)

    try {
      const response = await fetch('https://formsubmit.co/ajax/drmadhabprasad@gmail.com', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      })

      const result = (await response.json()) as { success?: string; message?: string }

      if (!response.ok) {
        throw new Error(result.message || 'Unable to send your request right now.')
      }

      form.reset()
      setStatus({
        type: 'success',
        message: 'Your request has been sent successfully.',
      })
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Something went wrong while sending your request.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="border-t border-gray-100 bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-primary">Contact</p>
          <h2 className="mb-5 text-4xl font-bold tracking-tight text-dark">Book a Consultation or Send an Inquiry</h2>
          <p className="text-lg leading-relaxed text-gray-500">
            Use this form to send an inquiry or request a consultation directly from the website.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="rounded-[2rem] bg-dark p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.18)]">
            <div className="mb-10">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary/80">Contact Info</p>
              <h3 className="mt-4 text-3xl font-bold">Let&apos;s Start the Conversation</h3>
              <p className="mt-4 max-w-sm leading-7 text-white/70">
                Send your details here and the request will be forwarded by email for follow-up.
              </p>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary/80">Email</p>
                <p className="mt-2 text-lg font-semibold">drmadhabprasad@gmail.com</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary/80">Phone</p>
                <a
                  href="tel:+9779851234229"
                  className="mt-2 inline-block text-lg font-semibold transition hover:text-primary"
                >
                  +977-9851234229
                </a>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary/80">WhatsApp</p>
                <a
                  href="https://wa.me/9779851234229"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block text-lg font-semibold transition hover:text-primary"
                >
                  +977-9851234229
                </a>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary/80">Clinic Hours</p>
                <p className="mt-2 text-lg font-semibold">Mon - Fri, 9:00 AM - 5:30 PM</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-gray-100 bg-gray-50 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] md:p-8">
            <form className="grid gap-6" onSubmit={handleSubmit}>
              <input type="hidden" name="_subject" value="New Portfolio Contact Request" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="grid gap-6 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-dark">
                  Full Name
                  <input
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    required
                    className="rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-dark outline-none transition focus:border-primary"
                  />
                </label>

                <label className="grid gap-2 text-sm font-semibold text-dark">
                  Email Address
                  <input
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-dark outline-none transition focus:border-primary"
                  />
                </label>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-dark">
                  Phone Number
                  <input
                    name="phone"
                    type="tel"
                    placeholder="+1 234 567 890"
                    required
                    className="rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-dark outline-none transition focus:border-primary"
                  />
                </label>

                <label className="grid gap-2 text-sm font-semibold text-dark">
                  Appointment Type
                  <select
                    name="appointmentType"
                    required
                    defaultValue=""
                    className="rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-dark outline-none transition focus:border-primary"
                  >
                    <option value="" disabled>
                      Select appointment type
                    </option>
                    <option>Public Health Consultant</option>
                    <option>Others</option>
                  </select>
                </label>
              </div>

              <label className="grid gap-2 text-sm font-semibold text-dark">
                Preferred Date
                <input
                  name="preferredDate"
                  type="date"
                  className="rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-dark outline-none transition focus:border-primary"
                />
              </label>

              <label className="grid gap-2 text-sm font-semibold text-dark">
                Message
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Tell us briefly about your inquiry or the support you are looking for."
                  className="resize-none rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-dark outline-none transition focus:border-primary"
                />
              </label>

              <div className="flex flex-col gap-4 border-t border-gray-200 pt-6 md:flex-row md:items-center md:justify-between">
                <div className="max-w-md text-sm leading-6">
                  <p className="text-gray-500">
                    This form now sends live contact requests to drmadhabprasad@gmail.com.
                  </p>
                  {status ? (
                    <p className={status.type === 'success' ? 'text-green-600' : 'text-red-600'}>{status.message}</p>
                  ) : null}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-dark transition-transform hover:scale-[1.02]"
                >
                  {isSubmitting ? 'Sending...' : 'Send Request'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
