import Image from 'next/image'
import Link from 'next/link'
import { createClient } from 'next-sanity'

type PortableTextSpan = {
  _key: string
  _type: 'span'
  marks: string[]
  text: string
}

type PortableTextBlock = {
  _key: string
  _type: 'block'
  children: PortableTextSpan[]
  markDefs: Array<{
    _key: string
    _type: string
    href?: string
  }>
  style?: string
}

type PortableTextImage = {
  _key: string
  _type: 'image'
  alt?: string
  url?: string
  dimensions?: {
    width?: number
    height?: number
  }
}

export interface BlogPostInfo {
  id: string
  title: string
  slug: string
  author: string
  date: string
  coverImage: string
  description: string
}

export interface BlogPost extends BlogPostInfo {
  body: Array<PortableTextBlock | PortableTextImage>
}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

const client =
  projectId && dataset
    ? createClient({
        projectId,
        dataset,
        apiVersion: '2026-02-01',
        useCdn: true,
      })
    : null

const FALLBACK_POSTS: BlogPost[] = [
  {
    id: 'sanity-fallback-1',
    title: 'Understanding Migraine Triggers and Management',
    slug: 'understanding-migraine-triggers',
    author: 'Dr. Madhab Prasad Lamsal',
    date: '2023-11-15',
    coverImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'A comprehensive guide to identifying and managing common migraine triggers for better quality of life.',
    body: [
      {
        _key: 'intro-heading',
        _type: 'block',
        style: 'h1',
        markDefs: [],
        children: [{ _key: 'intro-heading-span', _type: 'span', marks: [], text: 'Understanding Migraine Triggers' }],
      },
      {
        _key: 'intro-paragraph',
        _type: 'block',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _key: 'intro-paragraph-span',
            _type: 'span',
            marks: [],
            text: 'Migraines are more than just bad headaches. They are a complex neurological condition that often responds well when patients identify patterns, triggers, and early warning signs.',
          },
        ],
      },
      {
        _key: 'triggers-heading',
        _type: 'block',
        style: 'h2',
        markDefs: [],
        children: [{ _key: 'triggers-heading-span', _type: 'span', marks: [], text: 'Common Triggers' }],
      },
      {
        _key: 'trigger-list',
        _type: 'block',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _key: 'trigger-list-span',
            _type: 'span',
            marks: [],
            text: 'Stress, sleep disruption, skipped meals, dehydration, and hormone changes are among the most common patterns patients report before an episode.',
          },
        ],
      },
    ],
  },
  {
    id: 'sanity-fallback-2',
    title: 'Latest Advancements in Stroke Rehabilitation',
    slug: 'latest-advancements-stroke-rehab',
    author: 'Dr. Madhab Prasad Lamsal',
    date: '2023-10-02',
    coverImage: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Exploring the new methodologies and technologies helping stroke patients recover faster.',
    body: [
      {
        _key: 'rehab-heading',
        _type: 'block',
        style: 'h1',
        markDefs: [],
        children: [{ _key: 'rehab-heading-span', _type: 'span', marks: [], text: 'Stroke Rehabilitation Innovations' }],
      },
      {
        _key: 'rehab-paragraph',
        _type: 'block',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _key: 'rehab-paragraph-span',
            _type: 'span',
            marks: [],
            text: 'The first 90 days after a stroke are critical for recovery. Modern rehabilitation combines physical therapy, speech therapy, neuroplasticity-based exercises, and technology-assisted care plans.',
          },
        ],
      },
    ],
  },
]

const postsQuery = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  "id": _id,
  title,
  "slug": slug.current,
  author,
  "date": coalesce(string(publishedAt), string(_createdAt)),
  "coverImage": coverImage.asset->url,
  description
}`

const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0]{
  "id": _id,
  title,
  "slug": slug.current,
  author,
  "date": coalesce(string(publishedAt), string(_createdAt)),
  "coverImage": coverImage.asset->url,
  description,
  body[]{
    ...,
    _type == "image" => {
      ...,
      "url": asset->url,
      "dimensions": asset->metadata.dimensions
    }
  }
}`

export const portableTextComponents = {
  block: {
    h1: ({ children }: { children?: React.ReactNode }) => <h1>{children}</h1>,
    h2: ({ children }: { children?: React.ReactNode }) => <h2>{children}</h2>,
    h3: ({ children }: { children?: React.ReactNode }) => <h3>{children}</h3>,
  },
  marks: {
    link: ({ children, value }: { children?: React.ReactNode; value?: { href?: string } }) => {
      const href = value?.href ?? '#'
      const isExternal = href.startsWith('http')

      if (isExternal) {
        return (
          <a href={href} target="_blank" rel="noreferrer">
            {children}
          </a>
        )
      }

      return <Link href={href}>{children}</Link>
    },
  },
  types: {
    image: ({ value }: { value?: PortableTextImage }) => {
      if (!value?.url) {
        return null
      }

      const width = value.dimensions?.width ?? 1200
      const height = value.dimensions?.height ?? 675

      return (
        <figure className="my-10 overflow-hidden rounded-2xl border border-gray-100 bg-gray-50">
          <Image
            src={value.url}
            alt={value.alt ?? 'Blog image'}
            width={width}
            height={height}
            className="h-auto w-full"
            sizes="(min-width: 1024px) 768px, 100vw"
          />
        </figure>
      )
    },
  },
}

function fallbackList(): BlogPostInfo[] {
  return FALLBACK_POSTS.map(({ body: _body, ...post }) => post)
}

export async function getPublishedBlogs(): Promise<BlogPostInfo[]> {
  if (!client) {
    return fallbackList()
  }

  try {
    return await client.fetch<BlogPostInfo[]>(postsQuery)
  } catch (error) {
    console.error('Error fetching Sanity blogs:', error)
    return fallbackList()
  }
}

export async function getBlogBySlug(slug: string): Promise<{ meta: BlogPostInfo; body: BlogPost['body'] }> {
  if (!client) {
    const fallback = FALLBACK_POSTS.find((post) => post.slug === slug)
    if (!fallback) {
      throw new Error('Blog not found')
    }

    const { body, ...meta } = fallback
    return { meta, body }
  }

  try {
    const post = await client.fetch<BlogPost | null>(postBySlugQuery, { slug })

    if (!post) {
      throw new Error('Blog not found')
    }

    const { body, ...meta } = post
    return { meta, body }
  } catch (error) {
    console.error('Error fetching single Sanity blog:', error)
    const fallback = FALLBACK_POSTS.find((post) => post.slug === slug)
    if (!fallback) {
      throw error
    }

    const { body, ...meta } = fallback
    return { meta, body }
  }
}
