import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import SuccessStories from '@/components/SuccessStories'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <span className="w-full block bg-gray-50 pt-20 pb-20">
        <About />
      </span>
      <Experience />
      <SuccessStories />
      
      <section id="contact" className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Let&apos;s Connect</h2>
          <p className="text-gray-500 mb-10 max-w-lg mx-auto">
            Have questions or want to schedule a consultation? <br />
            I&apos;m here to help you on your journey to better neurological health.
          </p>
          <a href="mailto:contact@drlamsal.com" className="bg-dark text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform inline-block">
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  )
}
