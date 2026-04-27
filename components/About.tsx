import Link from 'next/link'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-6 mb-8">
              <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden relative border-4 border-white shadow-md">
                {/* Avatar Image Placeholder */}
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                  <span className="text-xs text-gray-500">Avatar</span>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-dark">Hello, I&apos;m Dr. Lamsal.</h2>
                <p className="text-primary font-medium text-lg mt-1">Neurologist Specialist</p>
              </div>
            </div>
            
            <p className="text-gray-600 leading-relaxed mb-8">
              With over 27 years of clinical experience, I have dedicated my career to understanding and treating complex neurological disorders. My approach combines the latest medical advancements with a deep commitment to compassionate patient care. Every patient&apos;s journey is unique, and I strive to provide personalized treatment plans that improve quality of life.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="#contact" className="px-6 py-3 bg-primary text-dark font-semibold rounded-sm hover:bg-yellow-400 transition-colors text-center inline-flex items-center justify-center space-x-2">
                <span>Send Message</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </Link>
              <a href="/cv.pdf" className="px-6 py-3 bg-white border border-gray-200 text-dark font-medium rounded-sm hover:bg-gray-50 transition-colors text-center inline-flex items-center justify-center space-x-2">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                <span>Download CV</span>
              </a>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Featured By</h3>
            <div className="grid grid-cols-2 gap-8 items-center opacity-70">
              <div className="h-12 bg-gray-200 rounded flex items-center justify-center"><span className="text-xs font-bold text-gray-400">Hospital A</span></div>
              <div className="h-12 bg-gray-200 rounded flex items-center justify-center"><span className="text-xs font-bold text-gray-400">Medical Center</span></div>
              <div className="h-12 bg-gray-200 rounded flex items-center justify-center"><span className="text-xs font-bold text-gray-400">Clinic B</span></div>
              <div className="h-12 bg-gray-200 rounded flex items-center justify-center"><span className="text-xs font-bold text-gray-400">Institute</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
