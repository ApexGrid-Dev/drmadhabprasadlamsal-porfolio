import Link from 'next/link'
import { getHostRouting } from '@/lib/host-routing'

export default async function Navbar() {
  const { homeHref, articlesHref } = await getHostRouting()

  return (
    <nav className="fixed w-full z-50 bg-surface/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href={homeHref} className="font-bold text-xl tracking-tight bg-dark text-white px-4 py-2">
              DR. MADHAB
            </Link>
          </div>
          <div className="hidden md:flex space-x-8 items-center font-medium text-sm">
            <Link href={homeHref} className="text-dark hover:text-primary transition-colors py-2 px-3 rounded-md hover:bg-gray-50">
              Home
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-dark transition-colors">
              About
            </Link>
            <Link href="#experience" className="text-gray-600 hover:text-dark transition-colors">
              Education & CV
            </Link>
            <Link href={articlesHref} className="text-gray-600 hover:text-dark transition-colors">
              Articles
            </Link>
            <Link href="#contact" className="bg-primary text-dark px-6 py-2 rounded-sm font-semibold hover:bg-yellow-400 transition-colors shadow-sm">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
