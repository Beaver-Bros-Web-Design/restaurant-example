import React from "react";
import { Box, Stack, Link as MuiLink } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import logo from "../assets/chimmys.png";

const navLinkStyle = {
  fontWeight: "bold",
  fontSize: "1rem",
  color: "#e2ded3",
  padding: "8px 16px",
  borderRadius: "5px",
  transition: "0.3s",
  textDecoration: "none",
  "&:hover": {
    backgroundColor: "#cc9f4e",
    color: "#e2ded3",
    transform: "scale(1.05)",
  },
};

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
  return (
    <Box
      sx={{
        fontFamily: "'Inter', sans-serif",
        backgroundColor: "#1a1a1a",
        color: "#e2ded3",
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
        <Box component={RouterLink} to="/" sx={{ display: "flex", alignItems: "center" }}>
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
            flex: 1,
            gap: 3,
          }}
        >
          <RouterLink to="/menu" style={{ textDecoration: "none" }}>
            <Box sx={navLinkStyle}>MENU</Box>
          </RouterLink>
          <RouterLink to="/drinks" style={{ textDecoration: "none" }}>
            <Box sx={navLinkStyle}>DRINKS</Box>
          </RouterLink>
          <RouterLink to="/catering" style={{ textDecoration: "none" }}>
            <Box sx={navLinkStyle}>CATERING</Box>
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
                                    <InstagramIcon sx={{
                            borderRadius: '50%', // Circular shape
                            padding: 1,
                            width: 40,
                            height: 'auto',
                            transition: '0.3s',
                            '&:hover': {
                            backgroundColor: '#ff4081', // Instagram color
                            transform: 'scale(1.1)' // Slight zoom on hover
                            }
                        }}/> 
          </MuiLink>
          <MuiLink
            href="https://x.com/Chimmys"
            target="_blank"
            rel="noopener noreferrer"
            sx={iconLinkStyle}
          >
                                   <XIcon sx={{
                           
                            borderRadius: '50%', // Circular shape
                            padding: 1,
                            width: 40,
                            height: 'auto',
                            transition: '0.3s',
                            '&:hover': {
                            backgroundColor: '#1DA1F2', 
                            transform: 'scale(1.1)'
                            }
                        }}/>
          </MuiLink>
          <MuiLink
            href="https://facebook.com/Chimmys"
            target="_blank"
            rel="noopener noreferrer"
            sx={iconLinkStyle}
          >
                                    <FacebookIcon sx={{
                            borderRadius: '50%',
                            padding: 1,
                            width: 40,
                            height: 'auto',
                            transition: '0.3s',
                            '&:hover': {
                            backgroundColor: '#1877F2', 
                            transform: 'scale(1.1)'
                            }
                        }}/>
          </MuiLink>
          <MuiLink
            href="https://pinterest.com/Chimmys"
            target="_blank"
            rel="noopener noreferrer"
            sx={iconLinkStyle}
          >
                                    <PinterestIcon sx={{
                            borderRadius: '50%',
                            padding: 1,
                            width: 40,
                            height: 'auto',
                            transition: '0.3s',
                            '&:hover': {
                            backgroundColor: '#E60023', // Pinterest brand color
                            transform: 'scale(1.1)'
                            }
                        }}/>
          </MuiLink>
        </Stack>
      </Box>
    </Box>
  );
}
