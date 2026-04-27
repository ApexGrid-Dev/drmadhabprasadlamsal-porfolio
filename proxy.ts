import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const DEFAULT_BLOG_HOSTS = ['blog.localhost', 'www.blog.localhost']
const BLOG_HOSTS = new Set(
  (process.env.BLOG_HOSTNAMES?.split(',') ?? DEFAULT_BLOG_HOSTS)
    .map((host) => host.trim().toLowerCase())
    .filter(Boolean)
)

export function proxy(request: NextRequest) {
  const host = request.headers.get('host')?.split(':')[0]

  if (!host || !BLOG_HOSTS.has(host)) {
    return NextResponse.next()
  }

  const { pathname } = request.nextUrl

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  const rewritePath =
    pathname === '/'
      ? '/blog'
      : pathname.startsWith('/blog')
        ? pathname
        : `/blog${pathname}`
  const url = request.nextUrl.clone()
  url.pathname = rewritePath

  return NextResponse.rewrite(url)
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
