import React, { useState, } from "react";
import { Box, } from "@mui/material";

import { Masonry } from "@mui/lab";
import { Paper } from "@mui/material";

import { useTheme } from "@mui/material/styles";
import "@react-pdf-viewer/core/lib/styles/index.css";
import dinnerMenu from "../dinnerMenu.json";
import drinksMenu from "../drinksMenu.json";
import MenuSection from "../components/MenuSection";
import ImageSlideshow from "../components/ImageSlideshow";

function Menu() {


  const [menuType, setMenuType] = useState("dinner");
  const menus = {
    dinner: dinnerMenu,
    drinks: drinksMenu,
  };
  const currentdinnerMenu = menus[menuType];

  const theme = useTheme();




  return (
    <Box
      sx={{
        minHeight: '100vh', // Ensure full height of the viewport
        width: '100%', // Ensure full width of the viewport
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Box
        sx={{
          width: '100%', // Ensure full width of the screen
        }}
      >
                <ImageSlideshow
          
          images={[
            "images/menuSlideshow/qlpr6886.png",
            "images/menuSlideshow/ChatGPT Image May 12, 2025, 03_19_29 PM.png",
            "images/menuSlideshow/756705814955940.jpg",
            
            
            
          ]}
          text={{
            title: "OUR MENU",
            subtitle: " ",
          }}
        />

        {/* Buttons to toggle menu type */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
          
            margin: 4,
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
      </Box>
    </Box>
  );
}

export default Menu;
