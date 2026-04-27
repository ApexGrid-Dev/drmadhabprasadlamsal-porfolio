import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-primary/20 -z-10 clip-path-hero"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mb-12 lg:mb-0">
            <div className="inline-flex items-center space-x-2 text-dark font-medium mb-6">
              <span className="w-8 h-px bg-dark"></span>
              <span className="uppercase tracking-wider text-sm">Dr. Madhab Prasad Lamsal</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-dark mb-6 leading-tight">
              27+ Years of <br />
              <span className="text-gray-800">Neurology Excellence.</span>
            </h1>
            
            <p className="text-lg text-gray-700 mb-8 max-w-lg leading-relaxed">
              Dedicated to providing comprehensive neurological care with compassion and expertise. Specializing in advanced treatments and patient-centered approaches.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="#about" className="px-8 py-4 bg-primary text-dark font-semibold rounded-sm hover:-translate-y-1 transition-transform shadow-md text-center">
                Learn About Me
              </Link>
              <Link href="#testimonials" className="px-8 py-4 bg-white border border-gray-200 text-dark font-medium rounded-sm hover:border-gray-300 hover:shadow-sm transition-all text-center">
                Patient Success Stories
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative w-full aspect-[4/5] bg-primary/10 rounded-2xl overflow-hidden pb-0 px-4 pt-4">
               <Image
                 src="/doctor.png"
                 alt="Dr. Madhab Prasad Lamsal"
                 fill
                 className="object-contain object-bottom"
                 priority
               />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex items-center space-x-4">
              <div className="bg-primary/20 p-3 rounded-full">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Board Certified</p>
                <p className="font-bold text-dark">Senior Neurologist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .clip-path-hero {
          clip-path: polygon(0 0, 100% 0, 100% 85%, 0% 100%);
        }
      `}</style>
    </section>
  )
}
