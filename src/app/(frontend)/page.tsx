import Hero from '@/components/layout/hero'
import { LocationsSection } from '@/components/locations-section'
import MapWrapper from '@/components/map-wrapper'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <LocationsSection />
      <div id="map" className="max-w-6xl mx-auto px-4">
        <h3 className="text-2xl font-bold mb-4 py-4">Намери ни на картата</h3>
      </div>
      <MapWrapper />
    </main>
  )
}
