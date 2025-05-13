import React, { useState, useEffect } from "react";
import { Box, Typography, Container, Fade } from "@mui/material";

import { Masonry } from "@mui/lab";
import { Paper } from "@mui/material";

import { useTheme } from "@mui/material/styles";
import "@react-pdf-viewer/core/lib/styles/index.css";
import dinnerMenu from "../dinnerMenu.json";
import drinksMenu from "../drinksMenu.json";
import MenuSection from "../components/MenuSection";

function Menu() {
  const [activeStep, setActiveStep] = useState(0);

  const [menuType, setMenuType] = useState("dinner");
  const menus = {
    dinner: dinnerMenu,
    drinks: drinksMenu,
  };
  const currentdinnerMenu = menus[menuType];

  const theme = useTheme();
  const images = [
    { label: "Image 1", imgPath: "/images/menuSlideshow/afqb0ov3.png" },
    { label: "Image 2", imgPath: "/images/menuSlideshow/ywpelqb8.png" },
    {
      label: "Image 3",
      imgPath:
        "images/menuSlideshow/ChatGPT Image May 12, 2025, 03_19_29 PM.png",
    },
    { label: "Image 4", imgPath: "images/menuSlideshow/756705814955940.jpg" },
  ];
  const maxSteps = images.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prevActiveStep) =>
        prevActiveStep === maxSteps - 1 ? 0 : prevActiveStep + 1
      );
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [maxSteps]);

  return (
    <Box
      sx={{
        paddingY: 6,
        paddingX: { xs: 2, md: 4 },
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="xl">
        <Typography
          variant="h2"
          align="center"
          sx={{
            color: theme.palette.secondary.main,
            marginBottom: 6,
            fontWeight: 700,
            fontFamily: "'Poppins', sans-serif",
            textTransform: "uppercase",
            letterSpacing: "3px",
            textShadow: "2px 2px 8px rgba(0,0,0,0.5)",
          }}
        >
          Our Menu
        </Typography>

        <Box
          sx={{
            margin: "0 auto",
            marginBottom: 6,
            position: "relative",
            borderRadius: 3,
            overflow: "hidden",
            boxShadow: "0 12px 30px rgba(0,0,0,0.5)",
          }}
        >
          <Box // slideshow
            sx={{
              height: "500px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {images.map((step, index) => (
              <Fade key={step.label} in={activeStep === index} timeout={800}>
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    opacity: activeStep === index ? 1 : 0,
                  }}
                >
                  {activeStep === index && (
                    <Box
                      component="img"
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      src={step.imgPath}
                      alt={step.label}
                    />
                  )}
                </Box>
              </Fade>
            ))}
          </Box>
        </Box>

        {/* Buttons to toggle menu type */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            marginBottom: 4,
          }}
        >
          <button
            onClick={() => setMenuType("dinner")}
            style={{
              padding: "12px 28px",
              backgroundColor:
                menuType === "dinner"
                  ? theme.palette.secondary.main
                  : "#1c1c1c",
              color: menuType === "dinner" ? "#1c1c1c" : "#f9c56b",
              border: "2px solid #f9c56b",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
              textTransform: "uppercase",
              letterSpacing: "1px",
              transition: "all 0.3s ease",
              boxShadow:
                menuType === "dinner"
                  ? "0 0 10px rgba(249, 197, 107, 0.6)"
                  : "0 0 5px rgba(0, 0, 0, 0.3)",
            }}
          >
            Dinner Menu
          </button>
          <button
            onClick={() => setMenuType("drinks")}
            style={{
              padding: "12px 28px",
              backgroundColor:
                menuType === "drinks"
                  ? theme.palette.secondary.main
                  : "#1c1c1c",
              color: menuType === "drinks" ? "#1c1c1c" : "#f9c56b",
              border: "2px solid #f9c56b",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
              textTransform: "uppercase",
              letterSpacing: "1px",
              transition: "all 0.3s ease",
              boxShadow:
                menuType === "drinks"
                  ? "0 0 10px rgba(249, 197, 107, 0.6)"
                  : "0 0 5px rgba(0, 0, 0, 0.3)",
            }}
          >
            Drinks Menu
          </button>
        </Box>

        <Box sx={{ width: "100%", px: 2 }}>
          <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={3}>
            {currentdinnerMenu.map((section, sectionIndex) => (
              <Paper key={sectionIndex} elevation={3} sx={{ p: 2 }}>
                <MenuSection title={section.title} items={section.items} />
              </Paper>
            ))}
          </Masonry>
        </Box>
      </Container>
    </Box>
  );
}

export default Menu;
