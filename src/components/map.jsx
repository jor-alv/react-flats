import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import React, { useRef, useEffect } from 'react';

// Storing keys in an .env file just to raise the cost for attackers
mapboxgl.accessToken = process.env.REACT_APP_API_KEY;

const Map = (props) => {
  const mapContainerRef = useRef(null);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/j-o-r-g-e/cl3w1o325001b14ph6xs4sy5e',
      center: [props.selectedFlat.lng, props.selectedFlat.lat],
      zoom: 11,
    });

    // Create marker for the selected flat and add it to the map
    const marker = document.createElement("div");
    marker.className = "marker";
    new mapboxgl.Marker(marker)
    .setLngLat(props.selectedFlat)
    .addTo(map);

    // Fit map to the marker
    const bounds = new mapboxgl.LngLatBounds();
    bounds.extend([ props.selectedFlat.lng, props.selectedFlat.lat ]);
    map.fitBounds(bounds, { padding: 500, maxZoom: 13, duration: 1000 });

    // Add map navigation controls (the +/- zoom buttons)
     map.addControl(new mapboxgl.NavigationControl(), "top-right");

     // Clean up when component unmounts
     return () => map.remove();
  }, [props.selectedFlat]);

  return <div ref={mapContainerRef} className="map-container" />;
}

export default Map;
