import Image from 'next/image'
import Link from 'next/link'
import Navigation from './components/Navigation'
import placeholderImage from './images/coming-soon-placeholder.png'
import safariParkImage from './images/park-rondavel-gradientT21_0101_004.png'
import escoChildrensMuseumImage from './images/escondido-childrens-museum-f0086af1-12cf-487b-87e7-5f65aa52affa-0.jpg'
import littleLanePlayroomImage from './images/little-lane-playroom.jpg'

interface Activity {
  id: number;
  name: string;
  link?: string;
  description?: string;
  imageUrl?: string;
}

const activities: Activity[] = [
  {
    id: 1,
    name: "San Diego Zoo Safari Park",
    link: "https://sdzsafaripark.org/",
    description: "A must-see, must-do if you visit Esco. A membership pays for itself after 2 visits & the SP is home to the only 2 platypuses outside of Australia.",
    imageUrl: safariParkImage.src
  },
  {
    id: 2,
    name: "Children's Discovery Museum ",
    link: "https://sdcdm.org/",
    description: "Great for 8 & under, there is an indoor and outdoor area. The museum is a mix of free-play and structured programming. The outdoor water table in the summer is a big hit.",
    imageUrl: escoChildrensMuseumImage.src
  },
  {
    id: 3,
    name: "Little Lane Playroom ",
    link: "https://www.littlelaneplayroom.com/schedule",
    description: "Aesthetic, soft-play area located in North County Mall. Reservations are required for 1 hour play slots.",
    imageUrl: littleLanePlayroomImage.src
  },
  // Add more activities here if you have them
]

// Fill the rest of the 12 slots with empty activities
while (activities.length < 12) {
  activities.push({
    id: activities.length + 1,
    name: `Activity ${activities.length + 1}`,
  })
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="bg-white py-4 shadow-sm">
        <div className="container mx-auto px-4 flex justify-end">
          <Navigation />
        </div>
      </header>
      <div className="container mx-auto px-4 py-8 flex-grow">
        <main>
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-12 md:text-5xl lg:text-6xl">
            Kid-Friendly Escondido
          </h1>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {activities.map((activity) => (
              <div key={activity.id} className="flex flex-col items-center">
                <div className="bg-gray-100 p-4 rounded-lg shadow-md w-full">
                  <Image
                    src={activity.imageUrl || placeholderImage}
                    alt={activity.name}
                    width={600}
                    height={400}
                    className="rounded-lg object-cover w-full h-48"
                  />
                </div>
                <h2 className="mt-4 text-lg font-semibold text-gray-700">
                  {activity.link ? (
                    <Link href={activity.link} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                      {activity.name}
                    </Link>
                  ) : (
                    activity.name
                  )}
                </h2>
                {activity.description && (
                  <p className="mt-2 text-sm text-gray-600 text-center">{activity.description}</p>
                )}
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
