import { Cta15 } from '@/components/cta15'
import { Cta18 } from '@/components/cta18'
import { Feature221 } from '@/components/feature221'
import { Feature239 } from '@/components/feature239'
import { Hero231 } from '@/components/hero231'
import { LocationsSection } from '@/components/locations-section'
import MapWrapper from '@/components/map-wrapper'
import { Feature140 } from '@/components/feature140'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero231 />
      <Feature239 />
      <Feature221 />
      <Feature140 />
      <div id="map" className="max-w-6xl mx-auto px-4">
        <LocationsSection />
        <h3 className="text-2xl font-bold mb-4 py-4">Намери ни на картата</h3>
        <Cta15 />
        {/* <Cta18 /> */}
      </div>
      <MapWrapper />
    </main>
  )
}
