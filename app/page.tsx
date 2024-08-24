import Image from 'next/image'

// Mock data for activities
const activities = Array(18).fill(null).map((_, i) => ({
  id: i + 1,
  src: `/placeholder.svg?height=200&width=300`,
  alt: `Kid-friendly activity ${i + 1}`,
  title: `Activity ${i + 1}`,
}))

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800 md:text-5xl lg:text-6xl">
          Kid Friendly Escondido
        </h1>
      </header>
      <main>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity) => (
            <div key={activity.id} className="flex flex-col items-center">
              <Image
                src={activity.src}
                alt={activity.alt}
                width={300}
                height={200}
                className="rounded-lg object-cover shadow-md"
              />
              <h2 className="mt-2 text-lg font-semibold text-gray-700">{activity.title}</h2>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
