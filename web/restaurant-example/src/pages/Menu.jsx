import React, { useState, useEffect } from "react";
import { Box, Typography, Chip, Container, Fade } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import "@react-pdf-viewer/core/lib/styles/index.css";
import dinnerMenu from "../dinnerMenu.json";
import drinksMenu from "../drinksMenu.json";

function MenuSection({ title, items }) {
  const theme = useTheme();

  return (
    <Grid size={6}>
      <Box 
        sx={{
          padding: 2, 
          borderRadius: 2,
          backgroundColor: "rgba(26, 26, 26, 0.9)",
          border: `1px solid ${theme.palette.secondary.main}`,
          boxShadow: `0 6px 16px rgba(220, 172, 88, 0.15)`,
          height: "100%",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            marginBottom: 2,
            textAlign: "center",
            color: theme.palette.secondary.main,
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: "1.5px", 
            borderBottom: `2px solid ${theme.palette.secondary.main}`,
            paddingBottom: 1,
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          {title}
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {items.map((item, index) => (
            <Box
              key={index}
              sx={{
                padding: 2, 
                backgroundColor: "rgba(42, 42, 42, 0.7)",
                borderRadius: 2,
                border: `1px solid rgba(220, 172, 88, 0.3)`,
                display: "flex",
                flexDirection: "column",
                gap: 0.3, 
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: "#ffffff",
                  fontSize: "0.9rem", 
                  fontFamily: "'Poppins', sans-serif",
                  borderBottom: `1px dashed rgba(220, 172, 88, 0.4)`,
                  paddingBottom: 0.5, 
                }}
              >
                {item.name}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "#e2e2e2",
                  fontSize: "0.75rem", 
                  lineHeight: 1.4, 
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 300,
                }}
              >
                {item.description}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontWeight: 600,
                  color: theme.palette.secondary.main,
                  fontSize: "1rem",
                  marginTop: 0.3,
                }}
              >
                ${item.price}
              </Typography>

              {item.dietaryIcons?.length > 0 && (
                <Box
                  sx={{
                    display: "flex",
                    gap: 0.5,
                    flexWrap: "wrap",
                    marginTop: 0.5,
                  }}
                >
                  {item.dietaryIcons.map((icon, iconIndex) => (
                    <Chip
                      key={iconIndex}
                      label={icon}
                      size="small"
                      sx={{
                        backgroundColor: theme.palette.secondary.main,
                        color: "#121212",
                        fontWeight: 500,
                        fontSize: "0.7rem", 
                        borderRadius: "4px",
                        paddingX: 0.4, 
                      }}
                    />
                  ))}
                </Box>
              )}

              {item.addOns && (
                <Box sx={{ marginTop: 0.5 }}> 
                  <Typography
                    variant="body2"
                    sx={{
                      fontStyle: "italic",
                      color: "#bbbbbb",
                      marginBottom: 0.5, 
                    }}
                  >
                    Add-ons:
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 0.5, 
                      flexWrap: "wrap",
                    }}
                  >
                    {item.addOns.map((addOn, addOnIndex) => (
                      <Chip
                        key={addOnIndex}
                        label={addOn}
                        size="small"
                        variant="outlined"
                        sx={{
                          borderColor: theme.palette.secondary.main,
                          color: theme.palette.secondary.main,
                          fontSize: "0.7rem",
                          borderRadius: "4px",
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </Grid>
  );
}

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
        minHeight: "100vh",
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
              height: "400px",
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
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, marginBottom: 4 }}>
          <button
            onClick={() => setMenuType("dinner")}
            style={{
              padding: "10px 20px",
              backgroundColor: menuType === "dinner" ? theme.palette.secondary.main : "#ccc",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Dinner Menu
          </button>
          <button
            onClick={() => setMenuType("drinks")}
            style={{
              padding: "10px 20px",
              backgroundColor: menuType === "drinks" ? theme.palette.secondary.main : "#ccc",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Drinks Menu
          </button>
        </Box>

        <Grid container spacing={4}>
          {currentdinnerMenu.map((section, sectionIndex) => (
            <MenuSection
              key={sectionIndex}
              title={section.title}
              items={section.items}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Menu;
