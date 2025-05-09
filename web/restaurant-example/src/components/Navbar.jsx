import React from "react";
import { Box, Stack, Link as MuiLink } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import logo from "../assets/chimmys.png";
import { useTheme } from "@mui/material/styles";

const navLinkStyle = (theme) => ({
  fontWeight: "bold",
  fontSize: "1rem",
  color: theme.palette.primary.main,
  padding: "8px 16px",
  borderRadius: "5px",

  transition: "0.3s",
  textDecoration: "none",
  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.contrastText,
    transform: "scale(1.05)",
  },
});



const iconLinkStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  borderRadius: "50%",
  transition: "0.3s ease",
  "&:hover": {
    transform: "scale(1.1)",
  },
};

export default function Navbar() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        fontFamily: theme.typography.fontFamily,
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        px: 4,
        py: 2,
        width: "100%",
        boxShadow: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {/* Left: Logo */}
        <Box
          component={RouterLink}
          to="/"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <img
            src={logo}
            alt="Chimmy's Logo"
            style={{ height: "50px", width: "auto" }}
          />
        </Box>

        {/* Center: Navigation Links */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flex: 2,
            gap: 3,
          }}
        >
          <RouterLink to="/menu" style={{ textDecoration: "none" }}>
            <Box sx={navLinkStyle(theme)}>MENU</Box>
          </RouterLink>
          <RouterLink to="/drinks" style={{ textDecoration: "none" }}>
            <Box sx={navLinkStyle(theme)}>DRINKS</Box>
          </RouterLink>
          <RouterLink to="/catering" style={{ textDecoration: "none" }}>
            <Box sx={navLinkStyle(theme)}>CATERING</Box>
          </RouterLink>
        </Box>

        {/* Right: Social Icons */}
        <Stack direction="row" spacing={2}>
          <MuiLink
            href="https://instagram.com/Chimmys"
            target="_blank"
            rel="noopener noreferrer"
            sx={iconLinkStyle}
          >
            <InstagramIcon
              sx={{
                borderRadius: "50%",
                padding: 1,
                width: 40,
                height: "auto",
                transition: "0.3s",
                "&:hover": {
                  backgroundColor: "#ff4081",
                  transform: "scale(1.1)",
                },
              }}
            />
          </MuiLink>
          <MuiLink
            href="https://x.com/Chimmys"
            target="_blank"
            rel="noopener noreferrer"
            sx={iconLinkStyle}
          >
            <XIcon
              sx={{
                borderRadius: "50%",
                padding: 1,
                width: 40,
                height: "auto",
                transition: "0.3s",
                "&:hover": {
                  backgroundColor: "#1DA1F2",
                  transform: "scale(1.1)",
                },
              }}
            />
          </MuiLink>
          <MuiLink
            href="https://facebook.com/Chimmys"
            target="_blank"
            rel="noopener noreferrer"
            sx={iconLinkStyle}
          >
            <FacebookIcon
              sx={{
                borderRadius: "50%",
                padding: 1,
                width: 40,
                height: "auto",
                transition: "0.3s",
                "&:hover": {
                  backgroundColor: "#1877F2",
                  transform: "scale(1.1)",
                },
              }}
            />
          </MuiLink>
          <MuiLink
            href="https://pinterest.com/Chimmys"
            target="_blank"
            rel="noopener noreferrer"
            sx={iconLinkStyle}
          >
            <PinterestIcon
              sx={{
                borderRadius: "50%",
                padding: 1,
                width: 40,
                height: "auto",
                transition: "0.3s",
                "&:hover": {
                  backgroundColor: "#E60023",
                  transform: "scale(1.1)",
                },
              }}
            />
          </MuiLink>
        </Stack>
      </Box>
    </Box>
  );
}
