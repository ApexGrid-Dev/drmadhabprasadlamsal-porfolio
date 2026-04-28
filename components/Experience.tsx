'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'Senior Consultant Neurologist',
    hospital: 'Singapore General Hospital',
    period: 'Jan 2016 to Present',
    description:
      'Leading complex neurological diagnosis and treatments, specializing in stroke management and neurodegenerative diseases. Directing the stroke unit and clinical research.',
  },
  {
    role: 'Attending Neurologist',
    hospital: 'University of Tokyo Hospital',
    period: 'Jan 2010 to Dec 2015',
    description:
      'Provided expert care for inpatients and outpatients with a wide spectrum of neurological disorders. Mentored residents and led academic teaching sessions.',
  },
  {
    role: 'Neurology Resident',
    hospital: 'Johns Hopkins Hospital',
    period: 'Mar 2005 to Dec 2009',
    description:
      'Completed intensive neurology residency program, gaining comprehensive experience in neurocritical care, epilepsy, and neuromuscular diseases.',
  },
]

const education = [
  {
    tag: 'Foundational Training',
    degree: 'Bachelor of Medicine & Surgery (MBBS)',
    school: 'Oxford University, UK',
    detail: 'Graduated with honors, focusing on human anatomy and neurosciences.',
  },
  {
    tag: 'Advanced Specialization',
    degree: 'Doctor of Medicine (Neurology)',
    school: 'Harvard Medical School, USA',
    detail: 'Specialized training in complex neurological diagnostics and advanced patient care.',
  },
]

export default function Experience() {
  return (
    <section className="w-full bg-white">
      <div className="relative mx-auto max-w-7xl overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <div className="absolute inset-x-0 top-24 h-72 bg-[radial-gradient(circle,_rgba(245,197,24,0.12),_transparent_60%)]"></div>

      <div
        id="experience"
        className="relative z-10 mb-16 text-center"
      >
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-primary">Career Journey</p>
        <h2 className="mb-4 text-4xl font-bold tracking-tight text-dark">My Working History</h2>
        <p className="mx-auto max-w-2xl text-gray-500">
          A track record of excellence in premier medical institutions across the globe, dedicated to advancing neurological care.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-primary/10 via-primary/60 to-transparent md:block"></div>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.role}
              initial={{ opacity: 0, y: 80, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group relative md:pl-16"
            >
              <div className="absolute left-0 top-8 hidden md:block">
                <motion.div
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.12 + 0.08 }}
                  className="relative flex h-10 w-10 items-center justify-center rounded-full border border-primary/25 bg-white shadow-[0_12px_30px_rgba(245,197,24,0.18)]"
                >
                  <div className="h-3 w-3 rounded-full bg-primary"></div>
                  <div className="absolute inset-0 rounded-full border border-primary/25 group-hover:scale-125 group-hover:opacity-0 transition duration-500"></div>
                </motion.div>
              </div>

              <div className="relative overflow-hidden rounded-[2rem] border border-gray-100 bg-white p-7 shadow-[0_18px_60px_rgba(15,23,42,0.08)] transition duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_24px_80px_rgba(15,23,42,0.14)] md:p-8">
                <div className="absolute inset-x-0 top-0 h-1 bg-gray-100">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.7, delay: index * 0.12 + 0.1 }}
                    className="h-full bg-primary"
                  />
                </div>
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition duration-500 group-hover:bg-primary/20"></div>

                <div className="relative flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div className="max-w-2xl">
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-primary">{exp.period}</p>
                    <h3 className="mb-1 text-2xl font-bold text-dark">{exp.role}</h3>
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">{exp.hospital}</p>
                    <p className="text-sm leading-7 text-gray-600 md:text-base">{exp.description}</p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="mt-20 border-t border-gray-100 pt-20">
        <div className="grid gap-10 md:gap-16">
          <motion.div
            id="education"
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <h3 className="mb-8 flex items-center text-2xl font-bold text-dark">
              <span className="mr-4 inline-block h-px w-8 bg-primary"></span>
              Education
            </h3>
            <div className="space-y-6">
              {education.map((item, index) => (
                <motion.div
                  key={item.degree}
                  initial={{ opacity: 0, y: 42, rotateX: 10, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative"
                >
                  <div className="absolute -left-3 top-8 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-primary/40 to-transparent md:block"></div>
                  <div className="relative overflow-hidden rounded-[1.75rem] border border-primary/10 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.07)] transition duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_26px_80px_rgba(15,23,42,0.12)] md:pl-8">
                    <div className="absolute inset-x-0 top-0 h-1 bg-gray-100">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true, amount: 0.35 }}
                        transition={{ duration: 0.75, delay: index * 0.1 + 0.12 }}
                        className="h-full bg-primary"
                      />
                    </div>
                    <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/10 blur-2xl transition duration-500 group-hover:bg-primary/20"></div>
                    <div className="absolute left-0 top-8 hidden -translate-x-1/2 md:block">
                      <div className="relative flex h-6 w-6 items-center justify-center rounded-full border-4 border-white bg-primary shadow-[0_12px_24px_rgba(245,197,24,0.3)]">
                        <div className="absolute inset-0 rounded-full border border-primary/30 group-hover:scale-150 group-hover:opacity-0 transition duration-500"></div>
                      </div>
                    </div>

                    <div className="relative z-10">
                      <div className="mb-4 flex flex-wrap items-center gap-3">
                        <span className="rounded-full bg-primary/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
                          {item.tag}
                        </span>
                        <span className="rounded-full border border-gray-200 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.24em] text-gray-500">
                          Certified
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-dark">{item.degree}</h4>
                      <p className="mb-3 mt-2 text-sm font-semibold uppercase tracking-[0.22em] text-primary">{item.school}</p>
                      <p className="max-w-lg text-sm leading-7 text-gray-500">{item.detail}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        </div>
      </div>
    </section>
  )
}
