'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Stethoscope } from 'lucide-react'

const TRACKED_SECTIONS = [
  { id: 'about', navId: 'about' },
  { id: 'experience', navId: 'experience' },
  { id: 'education', navId: 'education' },
  { id: 'testimonials', navId: 'testimonials' },
  { id: 'latest-blog', navId: 'blog' },
  { id: 'contact', navId: 'contact' },
] as const

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
  const isTinpustePath = pathname?.startsWith('/tinpuste')
  const [activeSection, setActiveSection] = useState(isBlogPath ? 'blog' : 'home')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [navCompactness, setNavCompactness] = useState(0)

  const getHref = (id: string) => {
    if (id === 'home') return routing.homeHref
    if (id === 'blog') return routing.articlesHref
    if (id === 'tinpuste') return '/tinpuste'
    
    // On blog path, we need to point back to homepage hashes
    if (isBlogPath) {
      return `/#${id}`
    }
    
    return `#${id}`
  }

  useEffect(() => {
    if (isTinpustePath) {
      setActiveSection('tinpuste')
      return
    }

    if (routing.isBlogHost) {
      setActiveSection('blog')
      return
    }

    let ticking = false

    const updateActiveSection = () => {
      const scrollY = window.scrollY
      const nextCompactness = Math.min(scrollY / 220, 1)

      setIsScrolled(scrollY > 50)
      setNavCompactness((current) => (Math.abs(current - nextCompactness) < 0.01 ? current : nextCompactness))

      const sectionStarts: Array<{ navId: (typeof TRACKED_SECTIONS)[number]['navId']; top: number }> = []

      TRACKED_SECTIONS.forEach((section) => {
        const element = document.getElementById(section.id)
        if (!element) return

        sectionStarts.push({
          navId: section.navId,
          top: element.getBoundingClientRect().top + scrollY,
        })
      })

      // Sort sections by their vertical position to ensure strict ordering
      sectionStarts.sort((a, b) => a.top - b.top)

      // Increased activation offset to ~45% of viewport height so the nav highlights earlier
      // (when the section heading is closer to the middle of the screen).
      const activationOffset = window.innerHeight * 0.45
      const marker = scrollY + activationOffset
      let nextActiveSection = 'home'

      for (const section of sectionStarts) {
        if (marker >= section.top) {
          nextActiveSection = section.navId
        } else {
          break
        }
      }

      // 💡 Crucial FIX: If the user has scrolled to the absolute bottom of the page,
      // it's possible the last section is too short to reach the `marker` limit.
      // We must explicitly highlight the last tracked section if we are at the bottom.
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      if (scrollY >= maxScroll - 20) {
        if (sectionStarts.length > 0) {
          nextActiveSection = sectionStarts[sectionStarts.length - 1].navId
        }
      }

      setActiveSection((current) => (current === nextActiveSection ? current : nextActiveSection))
      ticking = false
    }

    const handleScroll = () => {
      if (ticking) return

      ticking = true
      window.requestAnimationFrame(updateActiveSection)
    }

    updateActiveSection()

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    window.addEventListener('hashchange', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
      window.removeEventListener('hashchange', handleScroll)
    }
  }, [routing.isBlogHost, isTinpustePath])

  useEffect(() => {
    if (!isMobileMenuOpen) return

    const closeMenu = () => setIsMobileMenuOpen(false)
    const originalOverflow = document.body.style.overflow

    document.body.style.overflow = 'hidden'
    window.addEventListener('resize', closeMenu)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('resize', closeMenu)
    }
  }, [isMobileMenuOpen])

  const navLinks = [
    { name: 'Home', href: getHref('home'), id: 'home' },
    { name: 'About', href: getHref('about'), id: 'about' },
    { name: 'Work', href: getHref('experience'), id: 'experience' },
    { name: 'Education', href: getHref('education'), id: 'education' },
  ]

  const rightLinks = [
    { name: 'Testimonial', href: getHref('testimonials'), id: 'testimonials' },
    { name: 'Blog', href: getHref('blog'), id: 'blog' },
    { name: 'Tinpuste', href: getHref('tinpuste'), id: 'tinpuste' },
    { name: 'Contact', href: getHref('contact'), id: 'contact' },
  ]
  const mobileLinks = [...navLinks, ...rightLinks]

  const isActive = (id: string) => activeSection === id

  const NavLink = ({ link }: { link: { name: string, href: string, id: string } }) => (
    <Link 
      href={link.href} 
      className={`relative px-4 py-2.5 rounded-full font-bold text-xs xl:px-5 xl:text-sm transition-colors duration-300 ${
        isActive(link.id) ? 'text-white' : 'text-white/60 hover:text-white'
      }`}
      onClick={() => setActiveSection(link.id)}
    >
      <span className="relative z-10">{link.name}</span>
      {isActive(link.id) && (
        <motion.div
          layoutId="activePill"
          className="absolute inset-0 bg-primary rounded-full shadow-lg shadow-primary/30"
          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
        />
      )}
    </Link>
  )

  const handleMobileLinkClick = (id: string) => {
    setActiveSection(id)
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <div className="fixed top-8 z-50 flex w-full justify-center px-4">
        <motion.nav
          animate={{
            y: isScrolled ? -10 : 0,
            scale: 1.02 - navCompactness * 0.08,
          }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="relative flex w-full max-w-[95%] items-center gap-2 rounded-[2rem] border border-white/20 bg-black/30 px-4 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-3xl transition-all duration-500 hover:border-white/40 md:gap-4 md:px-6 lg:max-w-[1380px]"
        >
          <Link
            href={routing.homeHref}
            onClick={() => {
              setActiveSection('home')
              setIsMobileMenuOpen(false)
            }}
            className="flex items-center mr-3 lg:mr-4"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5 shadow-xl transition-all duration-300 group-hover:rotate-12">
              <Stethoscope className="h-5 w-5 text-white" />
            </div>
          </Link>

          <div className="hidden min-w-0 flex-1 items-center justify-start gap-1 lg:flex">
            {navLinks.map((link) => (
              <NavLink key={link.id} link={link} />
            ))}
          </div>

          <Link
            href={routing.homeHref}
            className="group relative min-w-0 shrink px-2 py-2 text-white transition-all duration-300 hover:text-primary sm:px-4 lg:mx-auto lg:shrink-0 lg:px-5"
            style={{
              paddingTop: `${0.5 + (1 - navCompactness) * 0.15}rem`,
              paddingBottom: `${0.5 + (1 - navCompactness) * 0.15}rem`,
            }}
            onClick={() => {
              setActiveSection('home')
              setIsMobileMenuOpen(false)
            }}
          >
            <span className="relative z-10 flex items-center gap-3">
              <span className="min-w-0 font-display text-base leading-tight tracking-tight sm:text-lg lg:text-[1.35rem]">
                <span className="font-medium italic">DR.</span>{' '}
                <span className="font-black uppercase">Madhab Prasad Lamsal</span>
              </span>
            </span>
          </Link>

          <div className="hidden min-w-0 flex-1 items-center gap-1 lg:flex justify-end">
            {rightLinks.map((link) => (
              <NavLink key={link.id} link={link} />
            ))}
          </div>

          <Link
            href={routing.homeHref}
            onClick={() => {
              setActiveSection('home')
              setIsMobileMenuOpen(false)
            }}
            className="flex items-center ml-3 lg:ml-4"
          >
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-white/5 shadow-xl transition-all duration-300 hover:rotate-12">
              <img src="/V2.svg" alt="Logo" className="h-full w-full object-contain" />
            </div>
          </Link>

          <button
            type="button"
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="ml-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/10 lg:hidden"
          >
            <div className="relative h-5 w-6">
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="absolute left-0 top-0 h-0.5 w-6 rounded-full bg-current"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
                className="absolute left-0 top-2 h-0.5 w-6 rounded-full bg-current"
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="absolute left-0 top-4 h-0.5 w-6 rounded-full bg-current"
              />
            </div>
          </button>
        </motion.nav>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <motion.div
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="flex min-h-screen flex-col bg-[#08101d]/96 px-6 pt-32 pb-8 backdrop-blur-3xl"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(245,197,24,0.16),_transparent_38%),linear-gradient(180deg,rgba(7,15,28,0.98),rgba(5,10,20,0.98))]" />
              <div className="relative z-10 flex flex-1 flex-col justify-between">
                <div className="grid gap-3">
                  {mobileLinks.map((link, index) => (
                    <motion.div
                      key={link.id}
                      initial={{ opacity: 0, x: -24 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -24 }}
                      transition={{ duration: 0.24, delay: index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => handleMobileLinkClick(link.id)}
                        className="flex items-center justify-between rounded-[1.75rem] border border-white/10 bg-white/[0.04] px-5 py-4 text-base font-semibold text-white transition-colors hover:bg-white/[0.08]"
                      >
                        <span>{link.name}</span>
                        <span className="text-xs uppercase tracking-[0.3em] opacity-60">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.28, delay: 0.2 }}
                  className="relative mt-12 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 text-white"
                >
                  <p className="text-xs uppercase tracking-[0.35em] text-primary/80">Neurology Care</p>
                  <p className="mt-3 max-w-xs text-sm leading-6 text-white/70">
                    27+ years of neurological care, patient-centered treatment, and clinical expertise.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
