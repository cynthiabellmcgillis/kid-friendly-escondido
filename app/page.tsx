import Image from 'next/image'
import Link from 'next/link'
import placeholderImage from './images/coming-soon-placeholder.png'

const activities = Array(18).fill(null).map((_, i) => ({
  id: i + 1,
  alt: `Kid-friendly activity ${i + 1}`,
  title: `Activity ${i + 1}`,
}))

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 flex-grow">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-800 md:text-5xl lg:text-6xl">
            Kid Friendly Escondido
          </h1>
        </header>
        <main>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {activities.map((activity) => (
              <div key={activity.id} className="flex flex-col items-center">
                <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                  <Image
                    src={placeholderImage}
                    alt={activity.alt}
                    width={600}
                    height={400}
                    className="rounded-lg object-cover w-full h-48"
                  />
                </div>
                <h2 className="mt-4 text-lg font-semibold text-gray-700">{activity.title}</h2>
              </div>
            ))}
          </div>
        </main>
      </div>
      <footer className="bg-gray-100 py-4 mt-8">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          Made with <span className="text-red-500">❤️</span> in Escondido, CA by{' '}
          <Link href="https://twitter.com/cynthiamcgillis" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
            @cynthiamcgillis
          </Link>{' '}
          with{' '}
          <Link href="https://v0.dev" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
            v0
          </Link>{' '}
          &{' '}
          <Link href="https://vercel.com" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
            Vercel
          </Link>
        </div>
      </footer>
    </div>
  )
}
