"use client";
import {
  createTheme,
  CssBaseline,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material";
import { ReactNode } from "react";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#116D6E",
        dark: "#0C4042",
        light: "#1B9A9B",
        contrastText: "#FFFFFF",
      },
      secondary: {
        main: "#321E1E",
        dark: "#1D1212",
        light: "#543B3B",
        contrastText: "#FFFFFF",
      },
      error: {
        main: "#CD1818",
        dark: "#A81414",
        light: "#E51C1C",
        contrastText: "#FFFFFF",
      },
      warning: {
        main: "#4E3636",
        dark: "#352626",
        light: "#6F5252",
        contrastText: "#FFFFFF",
      },
      background: {
        default: "#FFFFFF",
        paper: "#F5F5F5",
      },
      text: {
        primary: "#333333",
        secondary: "#757575",
        disabled: "#A9A9A9",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            width: 180,
          },
        },
      },
    },
  });

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
};

export default ThemeProvider;
