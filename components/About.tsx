import Link from 'next/link'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8 flex flex-col items-center text-center md:flex-row md:items-center md:space-x-6 md:text-left">
              <div className="relative mb-6 h-28 w-28 overflow-hidden rounded-full border-4 border-white bg-gray-200 shadow-md md:mb-0">
                <div className="flex h-full w-full items-center justify-center bg-gray-300">
                  <span className="text-xs text-gray-500">Avatar</span>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-dark">Hello, I&apos;m Dr. Lamsal.</h2>
                <p className="text-primary font-medium text-lg mt-1">Public Health Consultant</p>
              </div>
            </div>
            
            <p className="text-gray-600 leading-relaxed mb-8">
              With over 50 years of clinical experience, I have dedicated my career to understanding and treating complex health conditions. My approach combines the latest medical advancements with a deep commitment to compassionate client care. Every client&apos;s journey is unique, and I strive to provide personalized treatment plans that improve quality of life.
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
          
          <div className="rounded-xl border border-gray-100 bg-gray-50 p-8">
            <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-gray-400">Awards & Recognition</h3>
            <div className="space-y-4">
              <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Board Certification</p>
                <h4 className="mt-2 text-lg font-bold text-dark">Certified Specialist in Neurology</h4>
                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Recognized for advanced neurological expertise, diagnostic precision, and sustained clinical excellence.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Clinical Recognition</p>
                <h4 className="mt-2 text-lg font-bold text-dark">Excellence in Patient-Centered Care</h4>
                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Honored for combining evidence-based treatment with compassionate, personalized neurological care.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Academic Contribution</p>
                <h4 className="mt-2 text-lg font-bold text-dark">Research & Teaching Distinction</h4>
                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Acknowledged for mentoring clinicians and contributing to ongoing progress in neurology research and education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
