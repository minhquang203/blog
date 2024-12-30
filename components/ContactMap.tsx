'use client'

import { useEffect, useRef } from 'react'
import { Loader } from '@googlemaps/js-api-loader'

export function ContactMap() {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
        version: 'weekly',
      })

      const { Map } = await loader.importLibrary('maps')

      const position = { lat: 40.7128, lng: -74.0060 } // New York City coordinates

      new Map(mapRef.current as HTMLElement, {
        center: position,
        zoom: 12,
      })
    }

    initMap()
  }, [])

  return <div ref={mapRef} className="w-full h-64 rounded-lg overflow-hidden" />
}

