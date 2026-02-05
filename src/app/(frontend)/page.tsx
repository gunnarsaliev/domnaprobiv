import { Cta15 } from '@/components/cta15'
import { Hero231 } from '@/components/hero231'
import { LocationsSection } from '@/components/locations-section'
import { Feature239 } from '@/components/feature239'
import { Feature221 } from '@/components/feature221'
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
        <Cta15 />
        {/* <Cta18 /> */}
      </div>
    </main>
  )
}
