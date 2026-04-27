import StudioApp from '@/components/StudioApp'

export const dynamic = 'force-dynamic'

export default function StudioPage() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || !process.env.NEXT_PUBLIC_SANITY_DATASET) {
    return (
      <main className="min-h-screen bg-surface px-6 py-16 text-dark">
        <div className="mx-auto max-w-2xl rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h1 className="mb-4 text-3xl font-bold">Sanity Studio Needs Configuration</h1>
          <p className="mb-4 text-gray-600">
            Add <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code> and <code>NEXT_PUBLIC_SANITY_DATASET</code> to <code>.env.local</code> before opening the Studio.
          </p>
          <p className="text-sm text-gray-500">
            The public blog will keep using the built-in sample posts until those values are configured.
          </p>
        </div>
      </main>
    )
  }
  return <StudioApp />
}
