import Image from 'next/image'
import Link from 'next/link'

// Mock data - in a real application, this would come from an API or database
const activities = Array(18).fill(null).map((_, i) => ({
  id: i + 1,
  src: `/placeholder.svg?height=200&width=300`,
  alt: `Kid-friendly activity ${i + 1}`,
  title: `Activity ${i + 1}`,
  address: `${1234 + i} Main St, Escondido, CA 92025`,
  description: `This is a fun kid-friendly activity in Escondido. Kids of all ages will enjoy this exciting adventure!`
}))

export default function LandingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-primary md:text-5xl lg:text-6xl">Kid Friendly Escondido</h1>
      </header>
      <main>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity) => (
            <Link href={`/activity/${activity.id}`} key={activity.id} className="group">
              <div className="flex flex-col items-center transition-transform duration-200 ease-in-out group-hover:scale-105">
                <Image
                  src={activity.src}
                  alt={activity.alt}
                  width={300}
                  height={200}
                  className="rounded-lg object-cover shadow-md"
                />
                <h2 className="mt-2 text-lg font-semibold text-primary group-hover:underline">{activity.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
