import Link from 'next/link'
import Navigation from '../components/Navigation'

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="bg-white py-4 shadow-sm">
        <div className="container mx-auto px-4 flex justify-end">
          <Navigation />
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Kid Friendly Escondido</h1>
        <div className="prose max-w-none">
<p>Welcome to Kid-Friendly Escondido, a simple site that shows some of my favorite spots around Escondido, California for families.</p>
<p>Feedback or have a suggestion for what to add? Tweet me or open a PR.  :smile: </p>
        </div>
      </main>
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
