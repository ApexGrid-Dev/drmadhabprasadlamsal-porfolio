export default function SuccessStories() {
  return (
    <section id="testimonials" className="bg-dark text-white py-24 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">863+ Patients<br /><span className="text-primary">Success Stories</span></h2>
            <p className="text-gray-400 mb-10 max-w-lg leading-relaxed">
              Hearing from my patients is the most rewarding part of my career. 
              Here are a few stories of recovery, resilience, and renewed hope.
            </p>
            
            <div className="flex space-x-3">
              <button className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-800 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
              </button>
              <button className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-800 text-primary border-primary transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white text-dark p-8 rounded-2xl shadow-xl relative z-10">
              <div className="text-primary opacity-20 absolute top-4 left-6">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 32 32"><path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zM26 8c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z"></path></svg>
              </div>
              <div className="relative z-20">
                <p className="text-lg text-gray-700 font-medium leading-relaxed italic mb-8 mt-4">
                  "When I first started experiencing severe migraines, I was lost. Dr. Lamsal's accurate diagnosis and tailored treatment plan gave me my life back. His patience and dedication are truly unmatched."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 border-2 border-primary"></div>
                  <div>
                    <h4 className="font-bold">Sarah Jenkins</h4>
                    <p className="text-sm text-gray-500">Migraine Patient</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background decorative card */}
            <div className="absolute top-4 -right-4 w-full h-full bg-white/10 rounded-2xl border border-white/5 -z-10 backdrop-blur-sm"></div>
            <div className="absolute top-8 -right-8 w-full h-full bg-white/5 rounded-2xl border border-white/5 -z-20 backdrop-blur-sm hidden sm:block"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
