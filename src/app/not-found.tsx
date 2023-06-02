"use client";
import { Box, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <Box>
      <Typography variant="h2">Not Found</Typography>
      <Box>Could not find the requested resource</Box>
      <Button variant="contained" onClick={() => router.back()}>
        Go Back
      </Button>
    </Box>
  );
}
