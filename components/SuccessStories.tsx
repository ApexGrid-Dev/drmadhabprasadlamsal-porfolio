'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    quote:
      "When I first started experiencing severe migraines, I was lost. Dr. Lamsal's accurate diagnosis and tailored treatment plan gave me my life back. His patience and dedication are truly unmatched.",
    name: 'Sarah Jenkins',
    role: 'Migraine Patient',
  },
  {
    quote:
      'After my stroke, recovery felt overwhelming. Dr. Lamsal explained every step clearly and built a treatment plan that restored both my confidence and mobility.',
    name: 'Michael Tan',
    role: 'Stroke Recovery Patient',
  },
  {
    quote:
      'I had been struggling with unexplained dizziness for years. Dr. Lamsal identified the root cause quickly and treated me with remarkable precision and kindness.',
    name: 'Priya Sharma',
    role: 'Vertigo Patient',
  },
  {
    quote:
      'Our family was deeply worried about my father’s memory decline. Dr. Lamsal approached the situation with compassion, clarity, and a level of expertise that reassured all of us.',
    name: 'Daniel Wong',
    role: 'Family Caregiver',
  },
  {
    quote:
      'From the first consultation, I felt heard. The care I received for my epilepsy was structured, thoughtful, and incredibly effective over the long term.',
    name: 'Emily Carter',
    role: 'Epilepsy Patient',
  },
  {
    quote:
      'Dr. Lamsal combines clinical excellence with genuine empathy. My treatment for chronic nerve pain has improved my daily life more than I thought possible.',
    name: 'Robert Hughes',
    role: 'Neuropathy Patient',
  },
]

export default function SuccessStories() {
  const [visibleCards, setVisibleCards] = useState(1)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const updateVisibleCards = () => {
      setVisibleCards(window.innerWidth >= 1024 ? 3 : 1)
    }

    updateVisibleCards()
    window.addEventListener('resize', updateVisibleCards)

    return () => {
      window.removeEventListener('resize', updateVisibleCards)
    }
  }, [])

  useEffect(() => {
    const maxIndex = Math.max(0, testimonials.length - visibleCards)
    setCurrentIndex((prev) => Math.min(prev, maxIndex))
  }, [visibleCards])

  const maxIndex = Math.max(0, testimonials.length - visibleCards)
  const pageCount = Math.ceil(testimonials.length / visibleCards)
  const currentPage = Math.floor(currentIndex / visibleCards)
  const canGoPrev = currentIndex > 0
  const canGoNext = currentIndex < maxIndex

  const goPrev = () => {
    if (!canGoPrev) return
    setCurrentIndex((prev) => Math.max(0, prev - visibleCards))
  }

  const goNext = () => {
    if (!canGoNext) return
    setCurrentIndex((prev) => Math.min(maxIndex, prev + visibleCards))
  }

  const goToPage = (page: number) => {
    const nextIndex = Math.min(maxIndex, page * visibleCards)
    setCurrentIndex(nextIndex)
  }

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: { offset: { x: number }; velocity: { x: number } }) => {
    if (visibleCards !== 1) return

    const swipeDistance = info.offset.x
    const swipeVelocity = info.velocity.x

    if (swipeDistance < -70 || swipeVelocity < -500) {
      goNext()
      return
    }

    if (swipeDistance > 70 || swipeVelocity > 500) {
      goPrev()
    }
  }

  return (
    <section id="testimonials" className="relative select-none overflow-hidden bg-dark py-24 text-white">
      <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,_rgba(245,197,24,0.18),_transparent_55%)]"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mb-14 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
        >
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-primary">Patient Voices</p>
            <h2 className="mb-6 text-4xl font-bold">
              863+ Patients
              <br />
              <span className="text-primary">Success Stories</span>
            </h2>
            <p className="max-w-lg leading-relaxed text-gray-400">
              Hearing from my patients is the most rewarding part of my career. Here are a few stories of
              recovery, resilience, and renewed hope.
            </p>
          </div>

          <div className="flex items-center gap-3 lg:justify-end">
            <button
              type="button"
              onClick={goPrev}
              disabled={!canGoPrev}
              aria-label="Show previous testimonials"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-700 text-gray-500 transition-colors enabled:hover:border-white/40 enabled:hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <button
              type="button"
              onClick={goNext}
              disabled={!canGoNext}
              aria-label="Show next testimonials"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-primary text-primary transition-colors enabled:hover:bg-primary enabled:hover:text-dark disabled:cursor-not-allowed disabled:opacity-40"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </motion.div>

        <div className="overflow-hidden">
          <motion.div
            animate={{ x: `-${currentIndex * (100 / visibleCards)}%` }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            drag={visibleCards === 1 ? 'x' : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={visibleCards === 1 ? 0.16 : 0}
            onDragEnd={handleDragEnd}
            className={`flex ${visibleCards === 1 ? 'cursor-grab active:cursor-grabbing' : ''}`}
          >
            {testimonials.map((testimonial, index) => (
              <motion.article
                key={testimonial.name}
                initial={{ opacity: 0, y: 70, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group h-full w-full shrink-0 px-3 lg:w-1/3"
              >
                <div className="relative flex min-h-[320px] h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-white text-dark shadow-[0_18px_50px_rgba(0,0,0,0.18)] transition duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_24px_70px_rgba(0,0,0,0.24)]">
                  <div className="absolute inset-x-0 top-0 h-1 bg-white/20">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true, amount: 0.22 }}
                      transition={{ duration: 0.75, delay: index * 0.08 + 0.1 }}
                      className="h-full bg-primary"
                    />
                  </div>
                  <div className="absolute left-6 top-4 text-primary opacity-20">
                    <svg className="h-16 w-16" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zM26 8c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z"></path>
                    </svg>
                  </div>
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/10 blur-2xl transition duration-500 group-hover:bg-primary/20"></div>

                  <div className="relative z-10 flex h-full flex-col p-8">
                    <p className="mb-8 mt-6 flex-1 text-base font-medium leading-relaxed text-gray-700 italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="mt-auto flex items-center">
                      <div className="mr-4 h-12 w-12 rounded-full border-2 border-primary bg-gray-200"></div>
                      <div>
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: pageCount }).map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to testimonial group ${index + 1}`}
              onClick={() => goToPage(index)}
              className={`h-2.5 rounded-full transition-all ${
                currentPage === index ? 'w-8 bg-primary' : 'w-2.5 bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
