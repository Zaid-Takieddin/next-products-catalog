"use client";
import { Box, Container, Stack, Typography } from "@mui/material";

const Navbar = () => (
  <Box
    sx={{
      backgroundColor: "background.paper",
      height: "60px",
      marginBottom: 5,
      position: "sticky",
      top: 0,
      zIndex: 10,
      boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
    }}
  >
    <Container sx={{ height: "100%" }}>
      <Stack direction="row" alignItems="center" height="100%">
        <Typography
          variant="h4"
          fontStyle="italic"
          fontWeight="800"
          letterSpacing="-2px"
        >
          Products Catalog
        </Typography>
      </Stack>
    </Container>
  </Box>
);
export default Navbar;
