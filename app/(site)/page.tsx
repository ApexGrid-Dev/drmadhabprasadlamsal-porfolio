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
    </main>
  )
}
