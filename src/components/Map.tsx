//src/components/Map.tsx
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface MapProps {
  className?: string;
}

const Map: React.FC<MapProps> = ({ className = '' }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  // Woodland Park, NJ coordinates
  const officeCoordinates: [number, number] = [-74.1943, 40.8901];

  useEffect(() => {
    if (!mapContainer.current) return;

    const mapboxToken = import.meta.env.VITE_MAPBOX_TOKEN;

    if (!mapboxToken) {
      console.error('Missing VITE_MAPBOX_TOKEN environment variable');
      return;
    }

    mapboxgl.accessToken = mapboxToken;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: officeCoordinates,
      zoom: 15,
      pitch: 45,
    });

    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    const marker = new mapboxgl.Marker({
      color: '#3B82F6',
      scale: 1.2,
    })
      .setLngLat(officeCoordinates)
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }).setHTML(`
          <div class="p-3">
            <h3 class="font-bold text-lg mb-2">Anucleo Insurance</h3>
            <p class="text-sm text-gray-600 mb-1">365 Rifle Camp Road Suite 209</p>
            <p class="text-sm text-gray-600 mb-2">Woodland Park, NJ 07424</p>
            <p class="text-xs text-gray-500">Mon-Fri 8AM-8PM, Sat 9AM-5PM</p>
          </div>
        `)
      )
      .addTo(map.current);

    marker.getPopup().addTo(map.current);

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className={`relative ${className}`}>
      <div ref={mapContainer} className="absolute inset-0 rounded-lg" />
    </div>
  );
};

export default Map;