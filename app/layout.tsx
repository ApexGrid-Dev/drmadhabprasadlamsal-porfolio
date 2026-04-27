import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dr. Madhab Prasad Lamsal | Neurologist',
  description: 'Portfolio of Dr. Madhab Prasad Lamsal, specialized neurologist.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-surface text-dark">{children}</body>
    </html>
  )
}
