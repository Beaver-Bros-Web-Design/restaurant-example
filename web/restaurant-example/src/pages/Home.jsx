import { useEffect, useRef } from "react";
import ImageSlideshow from "../components/ImageSlideshow";
import AboutChimmys from "../components/AboutChimmys";
import { Stack, Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function Home() {
  const mapRef = useRef(null); // DOM reference to the div container
  const theme = useTheme();
  useEffect(() => {
    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

    const scriptId = "google-maps-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
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

      const position = { lat: 12.887, lng: 10.963 };
      const { Map } = await window.google.maps.importLibrary("maps");
      const { AdvancedMarkerElement } = await window.google.maps.importLibrary(
        "marker"
      );

      const map = new Map(mapRef.current, {
        zoom: 4,
        center: position,
        mapId: "DEMO_MAP_ID",
      });

      new AdvancedMarkerElement({
        map,
        position,
        title: "Uluru",
      });
    }
  }, []);

  function Hours() {
    return (
      <Box
        sx={{
          backgroundColor: theme.palette.background.main,
          width: "50%",
          height: "400px",
          textAlign: "center",
          display: "flex", // ✅ add this
          flexDirection: "column", // ✅ stack content vertically
          justifyContent: "center", // ✅ center vertically
          alignItems: "center", // optional: center horizontally
          padding: 2,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: theme.palette.secondary.main,
            fontWeight: "bold",
            fontFamily: theme.typography.fontFamily,
            textTransform: "uppercase",
            marginBottom: "10px",
          }}
        >
          Hours, Location, & Contact
        </Typography>
        <Typography
          sx={{
            color: theme.palette.secondary.main,
            fontWeight: "bold",
            marginBottom: "10px", // Add spacing
          }}
        >
          2220 Bevis, Houston, TX 77008
        </Typography>
        <Typography
          sx={{
            color: theme.palette.secondary.main,
            marginBottom: "10px", // Add spacing
          }}
        >
          713.360.0222
        </Typography>
        <Typography
          sx={{
            color: theme.palette.secondary.main,
            marginBottom: "10px", // Add spacing
          }}
        >
          chimmys@gmail.com
        </Typography>

        <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
          <li>Monday - Friday: 9:00 AM - 9:00 PM</li>
          <li>Saturday: 10:00 AM - 10:00 PM</li>
          <li>Sunday: 10:00 AM - 8:00 PM</li>
        </ul>
      </Box>
    );
  }

  function GoogleMap() {
    return (
      <div
        id="map"
        ref={mapRef}
        style={{
          border: "1px solid #ccc",
          width: "50%", // or "100%" as needed
          height: "400px", // must give height!
        }}
      ></div>
    );
  }

  return (
    <Box sx={{ backgroundColor: "black" }}>
      <Stack>
        <ImageSlideshow
          images={[
            "/images/home-slideshow1.png",
            "/images/home-slideshow2.png",
            "/images/home-slideshow3.png",
          ]}
          text={{
            title: "WELCOME TO CHIMMY'S",
            subtitle: "elegant eats and beautiful ambience",
          }}
        />
        <Box sx={{ height: "10px" }} />
        <Box sx={{ paddingLeft: "10px", paddingRight: "10px" }}>
          <AboutChimmys />
        </Box>
        <Box sx={{ height: "10px" }} />
        <Stack
          direction={"row"}
          sx={{
            height: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
        >
          <Hours />
          <GoogleMap />
        </Stack>
      </Stack>
    </Box>
  );
}

export default Home;
