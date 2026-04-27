import { headers } from 'next/headers'

const DEFAULT_BLOG_HOSTS = ['blog.localhost', 'www.blog.localhost']

function getConfiguredBlogHosts() {
  return (process.env.BLOG_HOSTNAMES?.split(',') ?? DEFAULT_BLOG_HOSTS)
    .map((host) => host.trim().toLowerCase())
    .filter(Boolean)
}

function stripPort(host: string) {
  return host.split(':')[0].toLowerCase()
}

function deriveSiteHostFromBlogHost(host: string) {
  return host.replace(/^www\./, '').replace(/^blog\./, '')
}

function withPort(host: string, port: string) {
  return port ? `${host}${port}` : host
}

export async function getHostRouting() {
  const headerStore = await headers()
  const hostHeader = headerStore.get('host') ?? ''
  const forwardedProto = headerStore.get('x-forwarded-proto')
  const protocol = forwardedProto ?? (hostHeader.includes('localhost') ? 'http' : 'https')
  const currentPort = hostHeader.includes(':') ? `:${hostHeader.split(':')[1]}` : ''
  const currentHost = stripPort(hostHeader)
  const blogHosts = getConfiguredBlogHosts()
  const isBlogHost = blogHosts.includes(currentHost)
  const fallbackBlogHost = blogHosts[0]
  const siteHost = deriveSiteHostFromBlogHost(currentHost || fallbackBlogHost)

  const blogUrl =
    process.env.NEXT_PUBLIC_BLOG_URL ??
    process.env.BLOG_URL ??
    (fallbackBlogHost ? `${protocol}://${withPort(fallbackBlogHost, currentPort)}` : null)

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.SITE_URL ??
    (siteHost ? `${protocol}://${withPort(siteHost, currentPort)}` : null)

  return {
    isBlogHost,
    blogUrl,
    siteUrl,
    articlesHref: isBlogHost ? '/' : (blogUrl ?? '/blog'),
    homeHref: isBlogHost ? (siteUrl ?? '/') : '/',
    blogPostHref: (slug: string) => (isBlogHost ? `/${slug}` : `/blog/${slug}`),
    blogIndexHref: isBlogHost ? '/' : '/blog',
  }
}
