import React, { useEffect, useRef } from 'react';
import { Box, Typography, useTheme } from '@mui/material';

const Hours = () => {
  const mapRef = useRef(null); // DOM reference to the div container
  const theme = useTheme();

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

      const position = { lat: -20.283, lng: 57.55 };
      const { Map } = await window.google.maps.importLibrary('maps');
      const { AdvancedMarkerElement } = await window.google.maps.importLibrary('marker');

      const map = new Map(mapRef.current, {
        zoom: 4,
        center: position,
        mapId: 'DEMO_MAP_ID',
        mapTypeId: 'satellite', // Set default to satellite view
      });

      new AdvancedMarkerElement({
        map,
        position,
        title: 'Uluru',
      });
    }
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: theme.palette.background.default,
        color: theme.palette.primary.main,
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      <Box
        sx={{
          marginBottom: '20px',
          padding: '20px',
          backgroundColor: theme.palette.background.main,
          borderRadius: '8px',
          boxShadow: `0 4px 8px ${theme.palette.secondary.main}`,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: theme.palette.secondary.main,
            fontWeight: 'bold',
            fontFamily: theme.typography.fontFamily,
            textTransform: 'uppercase',
            marginBottom: '10px',
          }}
        >
          Hours
        </Typography>
        <Typography
          sx={{
            color: theme.palette.secondary.main,
            fontWeight: 'bold',
            marginBottom: '10px', // Add spacing
          }}
        >
          2220 Bevis, Houston, TX 77008
        </Typography>
        <Typography
          sx={{
            color: theme.palette.secondary.main,
            marginBottom: '10px', // Add spacing
          }}
        >
          713.360.0222
        </Typography>
        <Typography
          sx={{
            color: theme.palette.secondary.main,
            marginBottom: '10px', // Add spacing
          }}
        >
          chimmys@gmail.com
        </Typography>

        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
          <li>Monday - Friday: 9:00 AM - 9:00 PM</li>
          <li>Saturday: 10:00 AM - 10:00 PM</li>
          <li>Sunday: 10:00 AM - 8:00 PM</li>
        </ul>
      </Box>

      <Box
        id="map"
        ref={mapRef}
        sx={{
          height: '500px',
          width: '80%',
          border: `1px solid ${theme.palette.secondary.main}`,
          borderRadius: '8px',
          boxShadow: `0 4px 8px ${theme.palette.secondary.main}`,
          marginTop: '20px',
        }}
      ></Box>
    </Box>
  );
};

export default Hours;