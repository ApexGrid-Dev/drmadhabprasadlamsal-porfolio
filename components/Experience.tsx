export default function Experience() {
  const experiences = [
    {
      role: "Senior Consultant Neurologist",
      hospital: "Singapore General Hospital",
      period: "Jan 2016 to Present",
      description: "Leading complex neurological diagnosis and treatments, specializing in stroke management and neurodegenerative diseases. Directing the stroke unit and clinical research."
    },
    {
      role: "Attending Neurologist",
      hospital: "University of Tokyo Hospital",
      period: "Jan 2010 to Dec 2015",
      description: "Provided expert care for inpatients and outpatients with a wide spectrum of neurological disorders. Mentored residents and led academic teaching sessions."
    },
    {
      role: "Neurology Resident",
      hospital: "Johns Hopkins Hospital",
      period: "Mar 2005 to Dec 2009",
      description: "Completed intensive neurology residency program, gaining comprehensive experience in neurocritical care, epilepsy, and neuromuscular diseases."
    }
  ]

  return (
    <section id="experience" className="py-20 lg:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold tracking-tight text-dark mb-4">My Working History</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          A track record of excellence in premier medical institutions across the globe, dedicated to advancing neurological care.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="h-1 w-full bg-gray-100 absolute top-0 left-0">
               <div className="h-full bg-primary w-0 group-hover:w-full transition-all duration-500"></div>
            </div>
            
            <p className="text-primary font-bold text-xs uppercase tracking-wider mb-2 mt-4">{exp.period}</p>
            <h3 className="text-xl font-bold text-dark mb-1">{exp.role}</h3>
            <p className="text-gray-700 font-medium text-sm mb-4">{exp.hospital}</p>
            
            <p className="text-gray-500 text-sm leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
      
      <div className="mt-20 border-t border-gray-100 pt-20">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <span className="w-8 h-px bg-primary mr-4 inline-block"></span> 
              Education
            </h3>
            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-gray-100">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-white"></div>
                <h4 className="font-bold text-lg text-dark">Bachelor of Medicine & Surgery (MBBS)</h4>
                <p className="text-primary text-sm font-medium mb-2">Oxford University, UK</p>
                <p className="text-gray-500 text-sm">Graduated with honors, focusing on human anatomy and neurosciences.</p>
              </div>
              <div className="relative pl-8 border-l-2 border-gray-100">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-white"></div>
                <h4 className="font-bold text-lg text-dark">Doctor of Medicine (Neurology)</h4>
                <p className="text-primary text-sm font-medium mb-2">Harvard Medical School, USA</p>
                <p className="text-gray-500 text-sm">Specialized training in complex neurological diagnostics and advanced patient care.</p>
              </div>
            </div>
          </div>
          
          <div>
             <h3 className="text-2xl font-bold mb-8 flex items-center">
              <span className="w-8 h-px bg-primary mr-4 inline-block"></span> 
              Awards & Recognition
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-50 rounded-lg flex items-center justify-center flex-shrink-0 text-yellow-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold text-dark">Lasker Award</h4>
                  <p className="text-sm text-gray-500">For outstanding clinical research in neurodegenerative delay techniques.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-50 rounded-lg flex items-center justify-center flex-shrink-0 text-yellow-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold text-dark">Maxwell Excellence Fellowship</h4>
                  <p className="text-sm text-gray-500">Recognized for continuous contribution to international healthcare.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
