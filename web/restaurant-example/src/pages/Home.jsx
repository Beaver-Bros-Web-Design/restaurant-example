import { useEffect, useRef } from 'react';

function Home() {
  const mapRef = useRef(null); // DOM reference to the div container

  useEffect(() => {
    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

    // Load Google Maps script
    const scriptId = 'google-maps-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=maps,marker&v=beta`;
      script.async = true;
      document.head.appendChild(script);
      script.onload = initMap;
    } else {
      initMap();
    }

    async function initMap() {
      if (!window.google || !mapRef.current) return;

      const position = { lat: 12.887 , lng: 10.963};
      const { Map } = await window.google.maps.importLibrary('maps');
      const { AdvancedMarkerElement } = await window.google.maps.importLibrary('marker');

      const map = new Map(mapRef.current, {
        zoom: 4,
        center: position,
        mapId: 'DEMO_MAP_ID',
      });


      

      new AdvancedMarkerElement({
        map,
        position,
        title: 'Uluru',
      });
    }
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column', // Stack children vertically
        height: '100vh', // Full viewport height
        textAlign: 'center', // Centers the h1 text
        backgroundImage: 'url(/ChatGPT Image May 6, 2025, 01_51_34 PM.png)', // Reference to your local background image
        backgroundSize: 'cover', // Ensures the background covers the entire page
        backgroundPosition: 'center', // Centers the image
        backgroundRepeat: 'no-repeat', // Prevents repeating the image
      }}
    >
      <h1>Welcome to Chimmys!</h1>
      <div
        id="map"
        ref={mapRef}
        style={{
          height: '500px', // Fixed height for map
          width: '80%', // Map width at 80% of viewport width
          border: '1px solid #ccc', // Optional border for the map
        }}
      ></div>
    </div>
  );
}

export default Home;
