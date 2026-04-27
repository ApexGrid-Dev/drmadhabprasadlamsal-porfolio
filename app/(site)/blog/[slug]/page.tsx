import { PortableText } from '@portabletext/react'
import { getBlogBySlug, portableTextComponents } from '@/lib/sanity'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getHostRouting } from '@/lib/host-routing'

type BlogPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: BlogPageProps) {
  const { slug } = await params

  try {
    const { meta } = await getBlogBySlug(slug)
    return {
      title: `${meta.title} | Dr. Madhab Prasad Lamsal`,
      description: meta.description,
    }
  } catch {
    return {
      title: 'Blog Post Not Found',
    }
  }
}

export default async function BlogPost({ params }: BlogPageProps) {
  const { slug } = await params
  const { blogIndexHref } = await getHostRouting()
  let post

  try {
    post = await getBlogBySlug(slug)
  } catch {
    notFound()
  }

  const { meta, body } = post
  const dateObj = new Date(meta.date)
  const formattedDate = dateObj.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })

  return (
    <article className="min-h-screen pt-32 pb-20 bg-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href={blogIndexHref} className="inline-flex items-center text-gray-500 hover:text-primary transition-colors mb-10 text-sm font-medium">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Back to Articles
        </Link>

        <header className="mb-12">
          <div className="flex items-center space-x-2 text-primary font-bold text-sm mb-4">
            <span>Neurology</span>
            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
            <span className="text-gray-500 font-medium">{formattedDate}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-dark mb-6 leading-tight">
            {meta.title}
          </h1>

          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-primary overflow-hidden flex items-center justify-center">
              <span className="text-[10px]">MD</span>
            </div>
            <div className="ml-3">
              <p className="font-bold text-dark text-sm">{meta.author}</p>
              <p className="text-xs text-gray-500">Neurologist</p>
            </div>
          </div>
        </header>

        {meta.coverImage && (
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-12 shadow-md">
            <Image
              src={meta.coverImage}
              alt={meta.title}
              fill
              sizes="(min-width: 1024px) 768px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="prose prose-lg prose-yellow max-w-none text-gray-700">
          <PortableText value={body} components={portableTextComponents} />
        </div>
      </div>
    </article>
  )
}
