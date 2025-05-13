import React from "react";

import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function AboutChimmys() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: theme.palette.secondary.main,
        paddingTop: "0px",
        paddingBottom: "30px",
        paddingRight: "30px",
        paddingLeft: "30px",
        display: "flex", // Added flexbox
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
        height: "400px",
      }}
    >
      <Box
        sx={{
          width: "80%",
          color: "white",
        }}
      >
        <Typography
          sx={{
            fontSize: "50px",
            fontWeight: "bold",
            textAlign: "center",
            top: 0,
          }}
        >
          Visit Us
        </Typography>
        <Box sx={{ height: "10px" }}></Box>
        <Typography sx={{ textAlign: "center", fontSize: "20px" }}>
          Nestled in the heart of the city, Chimmy's is your destination for
          unforgettable dining. We blend bold spices, wood-fired techniques, and
          local ingredients to craft meals that ignite the senses. Whether
          you’re craving our signature flame-grilled skewers or just vibing with
          cocktails on the patio — Chimmy’s is where memories are made.
        </Typography>
      </Box>
    </Box>
  );
}

export default AboutChimmys;
