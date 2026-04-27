import Link from 'next/link'
import Image from 'next/image'
import { BlogPostInfo } from '@/lib/sanity'

export default function BlogCard({ post, href }: { post: BlogPostInfo; href: string }) {
  const dateObj = new Date(post.date);
  const formattedDate = dateObj.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric'})

  return (
    <Link href={href} className="group flex flex-col bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all">
      <div className="relative w-full h-56 bg-gray-100 overflow-hidden">
        {post.coverImage ? (
          <Image 
            src={post.coverImage} 
            alt={post.title} 
            fill 
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
             <span className="text-gray-400">No Image</span>
          </div>
        )}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full shadow-sm text-dark">
          Neurology
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
          <span>{formattedDate}</span>
          <span className="w-1 h-1 rounded-full bg-gray-300"></span>
          <span>{post.author}</span>
        </div>
        <h3 className="text-xl font-bold text-dark group-hover:text-primary transition-colors mb-3 leading-snug">
          {post.title}
        </h3>
        <p className="text-gray-600 line-clamp-3 mb-6 text-sm flex-grow">
          {post.description}
        </p>
        <div className="mt-auto flex items-center text-primary font-bold text-sm uppercase tracking-wider group-hover:translate-x-1 transition-transform">
          Read Article
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </div>
      </div>
    </Link>
  )
}
