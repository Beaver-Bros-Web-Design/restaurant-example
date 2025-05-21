import React, { useState } from "react";
import {
  Box,
  Stack,
  Link as MuiLink,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/chimmys.png";
import { useTheme } from "@mui/material/styles";
import { useLocation } from "react-router-dom";

const navLinkStyle = (theme, isActive) => ({
  fontWeight: "bold",
  fontSize: "1rem",
  color: "white",
  padding: "8px 16px",
  borderRadius: isActive ? "5px 5px 0 0" : "5px",
  borderBottom: isActive
    ? `3px solid ${theme.palette.secondary.main}`
    : "3px solid transparent",
  transition: "0.3s",
  textDecoration: "none",
  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
    color: "white",
    transform: "scale(1.)",
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
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "HOME" },
    { to: "/menu", label: "MENU" },
    { to: "/catering", label: "CATERING" },
  ];

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
      }}
    >
      {/* Main navbar container */}
      <Box
        sx={{
          fontFamily: theme.typography.fontFamily,
          backgroundColor: "black",
          color: "white",
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
            sx={{
              display: "flex",
              alignItems: "center",
              flex: 1,
            }}
          >
            <img
              src={logo}
              alt="Chimmy's Logo"
              style={{ height: "50px", width: "auto" }}
            />
          </Box>

          {/* Center: Navigation Links with Lines on Both Sides (hide on mobile) */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
              flex: 2,
              gap: 3,
            }}
          >
            {/* Left Line */}
            <Box
              sx={{
                height: "1px",
                backgroundColor: "white",
                flex: 1,
              }}
            />

            {/* Navigation Links */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 3,
              }}
            >
              {navLinks.map((link) => (
                <RouterLink
                  to={link.to}
                  style={{ textDecoration: "none" }}
                  key={link.to}
                >
                  <Box sx={navLinkStyle(theme, location.pathname === link.to)}>
                    {link.label}
                  </Box>
                </RouterLink>
              ))}
            </Box>

            {/* Right Line */}
            <Box
              sx={{
                height: "1px",
                backgroundColor: "white",
                flex: 1,
              }}
            />
          </Box>

          {/* Right: Social Icons */}
          <Stack
            direction="row"
            spacing={2}
            sx={{ flex: 1, justifyContent: "flex-end" }}
          >
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
                  color: "white",
                  transition: "0.3s",
                  display: { xs: "none", md: "flex" },
                  "&:hover": {
                    color: "white",
                    transform: "scale(1.2)",
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
                  color: "white",
                  transition: "0.3s",
                  display: { xs: "none", md: "flex" },
                  "&:hover": {
                    color: "white",
                    transform: "scale(1.2)",
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
                  color: "white",
                  transition: "0.3s",
                  display: { xs: "none", md: "flex" },
                  "&:hover": {
                    color: "white",
                    transform: "scale(1.2)",
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
                  color: "white",
                  transition: "0.3s",

                  display: { xs: "none", md: "flex" },
                  "&:hover": {
                    color: "white",
                    transform: "scale(1.)",
                  },
                }}
              />
            </MuiLink>
            <Box sx={{ display: { xs: "block", md: "none" }, ml: "auto" }}>
              <IconButton
                color="inherit"
                edge="end"
                onClick={() => setDrawerOpen(true)}
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
              >
                <Box
                  sx={{ width: 220 }}
                  role="presentation"
                  onClick={() => setDrawerOpen(false)}
                >
                  <List>
                    {navLinks.map((link) => (
                      <ListItem
                        button
                        component={RouterLink}
                        to={link.to}
                        key={link.to}
                      >
                        <ListItemText primary={link.label} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </Box>
          </Stack>
        </Box>
      </Box>



      {/* Horizontal white line under the active nav link */}
      <Box
        sx={{
          height: "2px",
          backgroundColor: theme.palette.primary.main,
          width: "100%",
          position: "relative",
        }}
      />
    </Box>
  );
}
