'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Star, Quote } from 'lucide-react'
import { motion } from 'framer-motion'

const PROFESSIONS = [
  'Public Health & Medical Doctor',
  'Health Activist',
  'Social Worker',
  'Farmer',
  'Tinpuste Activist',
]

export default function Hero() {
  const [displayedProfession, setDisplayedProfession] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [professionIndex, setProfessionIndex] = useState(0)
  const [isWaitingAtEnd, setIsWaitingAtEnd] = useState(false)

  useEffect(() => {
    const currentProfession = PROFESSIONS[professionIndex]
    const typingDelay = isDeleting ? 40 : 85
    const pauseDelay = 1100

    const timeout = window.setTimeout(() => {
      if (isWaitingAtEnd) {
        setIsWaitingAtEnd(false)
        setIsDeleting(true)
        return
      }

      if (!isDeleting) {
        const nextValue = currentProfession.slice(0, displayedProfession.length + 1)
        setDisplayedProfession(nextValue)

        if (nextValue === currentProfession) {
          setIsWaitingAtEnd(true)
        }
        return
      }

      const nextValue = currentProfession.slice(0, Math.max(displayedProfession.length - 1, 0))
      setDisplayedProfession(nextValue)

      if (nextValue.length === 0) {
        setIsDeleting(false)
        setProfessionIndex((currentIndex) => (currentIndex + 1) % PROFESSIONS.length)
      }
    }, isWaitingAtEnd ? pauseDelay : typingDelay)

    return () => window.clearTimeout(timeout)
  }, [displayedProfession, isDeleting, isWaitingAtEnd, professionIndex])

  return (
    <section className="relative pt-48 pb-24 overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute top-40 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute top-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Top Text Content */}
        <div className="text-center mb-16 relative">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold text-dark leading-[1.1] tracking-tight mt-12"
          >
            I'm <span className="text-primary">Madhab Prasad Lamsal,</span> <br />
            <span className="inline-block min-h-[2.4em] md:min-h-[2.2em]">
              {displayedProfession}
              <span className="animate-pulse text-primary">|</span>
            </span>
          </motion.h1>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-12">
          {/* Left Side: Quote */}
          <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="text-primary mb-4">
              <Quote size={40} fill="currentColor" />
            </div>
            <p className="text-gray-700 text-lg leading-relaxed max-w-xs font-medium">
              Providing comprehensive health care with 50+ years of clinical expertise and dedicated client service.
            </p>
            {/* Hand-drawn curves decoration */}
            <div className="mt-8 hidden lg:block">
              <svg className="w-20 h-20 text-primary opacity-40 translate-x-4" viewBox="0 0 100 100">
                 <path d="M10,20 C30,10 60,30 90,20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                 <path d="M15,40 C35,30 65,50 95,40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                 <path d="M10,60 C30,50 60,70 90,60" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* Center: Image */}
          <div className="order-1 lg:order-2 relative flex justify-center">
            {/* Cyan Backdrop Arc */}
            <div className="absolute bottom-0 w-80 h-80 md:w-[600px] md:h-[600px] bg-primary rounded-full translate-y-1/3"></div>
            
            <div className="relative w-72 h-96 md:w-[500px] md:h-[650px] z-10 transition-transform hover:scale-[1.02] duration-500">
               <Image
                 src="/madhab_v2.png"
                 alt="Madhab Prasad Lamsal"
                 fill
                 className="object-contain object-bottom drop-shadow-2xl"
                 priority
               />
            </div>
          </div>

          {/* Right Side: Stats */}
          <div className="order-3 lg:order-3 flex flex-col items-center lg:items-end text-center lg:text-right">
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} fill="#FFC107" color="#FFC107" />
              ))}
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-dark mb-1">50+ Years</h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Experience</p>
          </div>
        </div>
      </div>
    </section>
  )
}
