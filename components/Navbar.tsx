import { getHostRouting } from '@/lib/host-routing'
import NavbarClient from './NavbarClient'

export default async function Navbar() {
  const { homeHref, articlesHref, isBlogHost } = await getHostRouting()

  return <NavbarClient routing={{ homeHref, articlesHref, isBlogHost }} />
}
