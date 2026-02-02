'use client'

import dynamic from 'next/dynamic'

// Import Map component with SSR disabled to avoid window is not defined error
const Map = dynamic(() => import('@/components/map'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-[400px] bg-muted">
      <p className="text-muted-foreground">Зареждане на карта...</p>
    </div>
  ),
})

export default function MapWrapper() {
  return (
    <Map
      center={[43.843761, 25.948770]}
      zoom={16}
      markers={[
        {
          position: [43.843761, 25.948770],
          popup: 'Дом на пробив',
        },
      ]}
    />
  )
}
