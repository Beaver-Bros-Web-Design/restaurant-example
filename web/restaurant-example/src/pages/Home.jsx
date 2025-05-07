import { useEffect, useRef } from 'react';

function Home() {
  const mapRef = useRef(null); // DOM reference to the div container

  useEffect(() => {
    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

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
        flexDirection: 'column', 
        height: '100vh', 
        textAlign: 'center', 
        backgroundImage: 'url(/ChatGPT Image May 6, 2025, 01_51_34 PM.png)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat', 
      }}
    >
      <h1>Welcome to Chimmys!</h1>
      <div
        id="map"
        ref={mapRef}
        style={{
          height: '500px', 
          width: '80%', 
          border: '1px solid #ccc', 
        }}
      ></div>
    </div>
  );
}

export default Home;
