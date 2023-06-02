"use client";
import { Grid } from "@mui/material";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Grid
      container
      spacing={6}
      height="calc(100vh - 60px)"
      justifyContent="center"
    >
      {children}
    </Grid>
  );
}
