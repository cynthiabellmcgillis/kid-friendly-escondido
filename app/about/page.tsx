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
          <p>Welcome to Kid Friendly Escondido, your go-to resource for family-friendly activities in Escondido, California!</p>
          <p>Our mission is to help families discover the best kid-friendly attractions, events, and hidden gems in our beautiful city. Whether you're a local looking for new adventures or a visitor planning your trip, we've got you covered.</p>
          <p>We believe that Escondido has so much to offer for children of all ages, and we're passionate about sharing these experiences with you. From parks and museums to special events and local favorites, we curate a diverse list of activities that cater to various interests and age groups.</p>
          <p>Kid Friendly Escondido is maintained by local parents who love exploring the city with their families. We regularly update our listings and welcome suggestions from our community. If you know of a great kid-friendly spot or event that we haven't covered, please let us know!</p>
          <p>Thank you for visiting Kid Friendly Escondido. We hope our site helps you create wonderful memories with your family in our amazing city!</p>
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
