import { getPublishedBlogs } from '@/lib/sanity'
import BlogCard from '@/components/BlogCard'
import Link from 'next/link'
import { getHostRouting } from '@/lib/host-routing'

export const metadata = {
  title: 'Blog | Dr. Madhab Prasad Lamsal',
  description: 'Articles and insights on neurology and patient care.',
}

export default async function Blog() {
  const blogs = await getPublishedBlogs()
  const { homeHref, blogPostHref } = await getHostRouting()

  return (
    <main className="min-h-screen pt-32 pb-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Link href={homeHref} className="inline-flex items-center text-gray-500 hover:text-primary transition-colors mb-6 text-sm font-medium">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Back to Home
          </Link>
          <h1 className="text-5xl font-bold tracking-tight text-dark mb-4">Latest Articles</h1>
          <p className="text-gray-500 text-lg max-w-2xl">
            Read my latest thoughts, clinical insights, and patient guides on neurology, healthy lifestyle, and more.
          </p>
        </div>

        {blogs.length === 0 ? (
          <div className="text-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
            <h3 className="text-xl font-medium text-gray-500">No published articles yet. Check back soon.</h3>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((post) => (
              <BlogCard key={post.id} post={post} href={blogPostHref(post.slug)} />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
