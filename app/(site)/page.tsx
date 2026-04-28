import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import SuccessStories from '@/components/SuccessStories'
import BlogCard from '@/components/BlogCard'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import ContactDemoSection from '@/components/ContactDemoSection'
import { getPublishedBlogs } from '@/lib/sanity'
import { getHostRouting } from '@/lib/host-routing'
import Link from 'next/link'

export default async function Home() {
  const blogs = await getPublishedBlogs()
  const latestBlogs = blogs.slice(0, 4)
  const { articlesHref, blogPostHref } = await getHostRouting()

  return (
    <main className="min-h-screen">
      <ScrollToTopButton />
      <Hero />
      <span className="w-full block bg-gray-50 pt-20 pb-20">
        <About />
      </span>
      <Experience />
      <SuccessStories />

      <section id="latest-blog" className="bg-surface py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <p className="text-primary text-xs font-bold uppercase tracking-[0.35em] mb-3">Latest Blog</p>
              <h2 className="text-4xl font-bold tracking-tight text-dark mb-4">Fresh Insights & Articles</h2>
              <p className="text-gray-500 text-lg max-w-2xl">
                Read the latest neurology insights, patient guides, and clinical perspectives from Dr. Madhab Prasad Lamsal.
              </p>
            </div>
            <Link
              href={articlesHref}
              className="inline-flex items-center self-start rounded-full bg-dark px-6 py-3 text-sm font-bold text-white transition-transform hover:scale-[1.02]"
            >
              View All Articles
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </Link>
          </div>

          {latestBlogs.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-gray-200 bg-gray-50 py-20 text-center">
              <h3 className="text-xl font-medium text-gray-500">No published articles yet. Check back soon.</h3>
            </div>
          ) : (
            <>
              <div className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 sm:-mx-6 sm:px-6 lg:hidden">
                {latestBlogs.map((post) => (
                  <div key={post.id} className="w-[85%] min-w-[85%] snap-start sm:w-[60%] sm:min-w-[60%]">
                    <BlogCard post={post} href={blogPostHref(post.slug)} />
                  </div>
                ))}
              </div>

              <div className="hidden gap-8 md:grid-cols-2 lg:grid lg:grid-cols-4">
                {latestBlogs.map((post) => (
                  <BlogCard key={post.id} post={post} href={blogPostHref(post.slug)} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
      
      <ContactDemoSection />
    </main>
  )
}
