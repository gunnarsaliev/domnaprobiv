'use client'

import { useEffect, useRef, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix for default markers in React Leaflet
let DefaultIcon: L.Icon | undefined

if (typeof window !== 'undefined') {
  DefaultIcon = L.icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  })

  L.Marker.prototype.options.icon = DefaultIcon
}

interface MapProps {
  center?: [number, number]
  zoom?: number
  height?: string
  width?: string
  className?: string
  markers?: Array<{
    position: [number, number]
    popup?: string
    icon?: L.Icon
  }>
  onMapReady?: (map: L.Map) => void
}

function MapController({ onMapReady }: { onMapReady?: (map: L.Map) => void }): null {
  const map = useMap()
  const hasCalledRef = useRef(false)

  useEffect(() => {
    if (onMapReady && !hasCalledRef.current) {
      onMapReady(map)
      hasCalledRef.current = true
    }
  }, [map, onMapReady])

  return null
}

export default function Map({
  center = [43.8531, 25.9651],
  zoom = 13,
  height = '400px',
  width = '100%',
  className = '',
  markers = [],
  onMapReady,
}: MapProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className={`relative ${className}`} style={{ height, width }}>
        <div className="flex items-center justify-center h-full bg-muted">
          <p className="text-muted-foreground">Зареждане на карта...</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative ${className}`} style={{ height, width }}>
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: '100%', width: '100%' }}
        className="z-0"
        key={`map-${center.join('-')}`}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {markers.map((marker, index) => (
          <Marker key={index} position={marker.position} icon={marker.icon || DefaultIcon}>
            {marker.popup && <Popup>{marker.popup}</Popup>}
          </Marker>
        ))}

        {onMapReady && <MapController onMapReady={onMapReady} />}
      </MapContainer>
    </div>
  )
}

export type { MapProps }
