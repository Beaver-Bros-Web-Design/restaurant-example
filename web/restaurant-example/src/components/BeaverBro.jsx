import { Typography } from "@mui/material";

const BeaverBroTypography = () => {
  return (
    <Typography
      variant="h4"
      sx={{
        fontWeight: "bold",
        fontFamily: "Poppins, sans-serif", // Clean and modern typography
        color: "gray", // Dark, professional color
        letterSpacing: "2px", // Adds a refined touch
        textAlign: "center",
        fontSize:"8px",
        textTransform: "uppercase" // Stylish uppercase effect

      }}
    >
      @Beaver Bro Web Designs
    </Typography>
  );
};

export default BeaverBroTypography;