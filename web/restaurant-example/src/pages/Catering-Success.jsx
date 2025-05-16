import React from "react";
import { Box, Typography, Stack } from "@mui/material";

function CateringSuccess() {
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
          <Typography
            sx={{ fontWeight: "bold", fontSize: "30px", color: "black" }}
          >
            CATERING
          </Typography>

          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "20px",
              textAlign: "center",
              width: "70%",
              paddingBottom: "30px",
              color: "black",
            }}
          >
            Thank you for your request! We will get back to you as soon as
            possbile.
            <br />
            <br />
            Best,
            <br /> Your Chimmy's staff
          </Typography>

          <Box sx={{ height: "500px" }} />
        </Stack>
      </div>
    </div>
  );
}

export default CateringSuccess;
