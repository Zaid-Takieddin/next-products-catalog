"use client";
import { useEffect } from "react";
import { Typography, Box, Button } from "@mui/material";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Box>
      <Typography variant="h3" mt={10}>
        {error.name}: {error.message}
      </Typography>
      <Button variant="contained" onClick={() => reset()}>
        Try again
      </Button>
    </Box>
  );
}
