'use client'

import dynamic from 'next/dynamic'
import { Loader2 } from 'lucide-react'

// Dynamically import the map component to avoid SSR issues
const MapClient = dynamic(() => import('./map-client').then((mod) => mod.default), {
  ssr: false,
  loading: () => (
    <div className="relative w-full h-96 rounded-lg overflow-hidden border border-border">
      <div className="flex items-center justify-center h-full bg-muted/50">
        <div className="flex items-center space-x-2">
          <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
          <p className="text-sm font-medium text-muted-foreground">Зареждане на карта...</p>
        </div>
      </div>
    </div>
  ),
})

interface MapProps {
  center?: [number, number]
  zoom?: number
  height?: string
  width?: string
  className?: string
  scrollWheelZoom?: boolean
  markers?: Array<{
    position: [number, number]
    popup?: string
  }>
  onMapReady?: (map: unknown) => void
}

export default function Map(props: MapProps) {
  return <MapClient {...props} />
}

export type { MapProps }
