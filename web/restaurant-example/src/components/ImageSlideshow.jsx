import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";

const images = [
  "/images/home-slideshow1.png",
  "/images/home-slideshow2.png",
  "/images/home-slideshow3.png",
];

const ImageSlideshow = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        height: "85vh",
        overflow: "hidden",
      }}
    >
      {images.map((src, i) => (
        <Box
          key={i}
          component="img"
          src={src}
          alt={`Slide ${i}`}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: i === index ? 1 : 0,
            transition: "opacity 2s ease-in-out",
          }}
        />
      ))}

      {/* Centered Overlayed Text */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          zIndex: 1,
          backgroundColor: "rgba(0, 0, 0, 0.3)",
        }}
      >
        <Box sx={{ px: 2 }}>
          <h1 style={{ fontSize: "3rem", margin: 0, fontWeight: "bold" }}>
            WELCOME TO CHIMMY'S
          </h1>
          <p style={{ fontSize: "1.5rem" }}>
            elegant eats and beautiful ambience
          </p>
        </Box>
      </Box>
    </Box>
  );
};

export default ImageSlideshow;
