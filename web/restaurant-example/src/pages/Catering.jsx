import { Box, Typography, Stack } from "@mui/material";
import React from "react";

function CateringForm() {
  return <></>;
}

function Catering() {
  return (
    <div style={{ position: "relative", height: "auto" }}>
      {/* Background image */}
      <div
        style={{
          backgroundImage: "url(/images/catering-background.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          zIndex: 0,
        }}
      />

      {/* White overlay */}
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.45)", // Adjust opacity as needed
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "50px",
          }}
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "30px" }}>
            CATERING
          </Typography>

          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "20px",
              textAlign: "center",
              width: "70%",
            }}
          >
            Please fill out the form below and we'll do our best to accommodate
            your desired date and any requests you may have to make your
            party/celebration memorable.
          </Typography>

          <CateringForm sx={{ paddingTop: "30px", paddingBottom: "30px" }} />

          <Box sx={{ backgroundColor: "blue", height: "1000px" }}></Box>
        </Stack>
      </div>
    </div>
  );
}

export default Catering;
