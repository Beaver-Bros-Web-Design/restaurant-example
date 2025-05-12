import { createTheme } from "@mui/material/styles";
import "@fontsource/poppins";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#e2ded3", // white/cream
      light: "#ffffff",
      dark: "#c9c5bc"
    },
    secondary: {
      main: "#dcac58", // gold
      light: "#ecc989",
      dark: "#b88d3e"
    },
    background: {
      main: "#1a1a1a", // dark grey
      default: "#0a0a0a", // almost black
      paper: "#222222"
    },
    text: {
      primary: "#e2ded3",
      secondary: "#aaa9a7"
    }
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
      letterSpacing: "0.04em"
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 700,
      letterSpacing: "0.03em"
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 600,
      letterSpacing: "0.02em"
    },
    h4: {
      fontSize: "1.75rem",
      fontWeight: 600,
    },
    h5: {
      fontSize: "1.5rem",
      fontWeight: 500,
    },
    h6: {
      fontSize: "1.25rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 300,
    },
    button: {
      textTransform: "none",
      fontWeight: 500,
    }
  },
  shape: {
    borderRadius: 8
  },
  shadows: [
    "none",
    "0px 2px 8px rgba(0, 0, 0, 0.15)",
    "0px 4px 12px rgba(0, 0, 0, 0.2)",
    "0px 6px 16px rgba(0, 0, 0, 0.25)",
    "0px 8px 24px rgba(0, 0, 0, 0.3)",
    ...Array(20).fill("none")
  ],
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#0a0a0a",
          scrollbarWidth: "thin",
          scrollbarColor: "#dcac58 #1a1a1a",
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            background: "#1a1a1a",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#dcac58",
            borderRadius: "4px",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#1a1a1a",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "4px",
          textTransform: "none",
          fontWeight: 500,
          boxShadow: "none",
          "&:hover": {
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
          },
        },
        contained: {
          backgroundColor: "#dcac58",
          color: "#0a0a0a",
          "&:hover": {
            backgroundColor: "#ecc989",
          },
        },
        outlined: {
          borderColor: "#dcac58",
          color: "#dcac58",
          "&:hover": {
            borderColor: "#ecc989",
            color: "#ecc989",
          },
        },
      },
    },
  },
});

export default theme;