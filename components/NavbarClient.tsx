'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Stethoscope } from 'lucide-react'

interface NavbarClientProps {
  routing: {
    homeHref: string
    articlesHref: string
    isBlogHost: boolean
  }
}

export default function NavbarClient({ routing }: NavbarClientProps) {
  const pathname = usePathname()
  const isBlogPath = pathname?.startsWith('/blog')
  const [activeSection, setActiveSection] = useState(isBlogPath ? 'blog' : 'home')
  const [isScrolled, setIsScrolled] = useState(false)

  const getHref = (id: string) => {
    if (id === 'home') return '/'
    if (id === 'blog') return '/blog'
    
    // On blog path, we need to point back to homepage hashes
    if (isBlogPath) {
      return `/#${id}`
    }
    
    return `#${id}`
  }

  useEffect(() => {
    // If we transition to/from blog path, update active section
    if (isBlogPath) {
      setActiveSection('blog')
    } else if (window.scrollY < 100) {
      setActiveSection('home')
    }
  }, [pathname, isBlogPath])

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    
    const sections = ['about', 'experience', 'testimonials', 'contact']
    sections.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    // Special case for home (top of page)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      if (window.scrollY < 100 && !routing.isBlogHost) {
        setActiveSection('home')
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navLinks = [
    { name: 'Home', href: getHref('home'), id: 'home' },
    { name: 'About', href: getHref('about'), id: 'about' },
    { name: 'Education', href: getHref('experience'), id: 'experience' },
  ]

  const rightLinks = [
    { name: 'Testimonial', href: getHref('testimonials'), id: 'testimonials' },
    { name: 'Blog', href: getHref('blog'), id: 'blog' },
    { name: 'Contact', href: getHref('contact'), id: 'contact' },
  ]

  const isActive = (id: string) => activeSection === id

  const NavLink = ({ link }: { link: { name: string, href: string, id: string } }) => (
    <Link 
      href={link.href} 
      className={`relative px-6 py-2.5 rounded-full font-bold text-sm transition-colors duration-300 ${
        isActive(link.id) ? 'text-white' : 'text-white/60 hover:text-white'
      }`}
      onClick={() => setActiveSection(link.id)}
    >
      <span className="relative z-10">{link.name}</span>
      {isActive(link.id) && (
        <motion.div
          layoutId="activePill"
          className="absolute inset-0 bg-primary rounded-full shadow-lg shadow-primary/30"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </Link>
  )

  return (
    <div className="fixed w-full top-8 z-50 flex justify-center px-4">
      <motion.nav 
        animate={{ 
          y: isScrolled ? -10 : 0,
          scale: isScrolled ? 0.98 : 1
        }}
        className="bg-black/30 backdrop-blur-3xl rounded-full px-6 py-3 flex items-center gap-2 md:gap-4 border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 hover:border-white/40 max-w-[95%] lg:max-w-7xl"
      >
        {/* Left Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink key={link.id} link={link} />
          ))}
        </div>

        {/* Logo / Home Name */}
        <Link 
          href={routing.homeHref} 
          className="relative px-8 py-2.5 rounded-full transition-all duration-300 group shrink-0 text-white hover:text-primary"
          onClick={() => setActiveSection('home')}
        >
          <span className="relative z-10 flex items-center gap-4">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center transition-transform shadow-xl group-hover:rotate-12 group-active:scale-95 shadow-primary/20">
               <Stethoscope className="w-6 h-6 text-white" />
            </div>
            <span className="font-display text-2xl tracking-tight leading-tight">
              <span className="italic font-medium">DR.</span> <span className="font-black uppercase">Madhab Prasad Lamsal</span>
            </span>
          </span>
        </Link>

        {/* Right Links */}
        <div className="hidden md:flex items-center gap-1">
          {rightLinks.map((link) => (
            <NavLink key={link.id} link={link} />
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white ml-2 p-2 rounded-full hover:bg-white/10 transition-colors">
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </div>
      </motion.nav>
    </div>
  )
}
