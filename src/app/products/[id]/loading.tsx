"use client";
import { Skeleton, Stack } from "@mui/material";

export default function Loading() {
  return (
    <Stack spacing={1} mt={10} width="100%">
      <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
      <Skeleton variant="rectangular" height={60} />
      <Skeleton variant="rounded" height={60} />
    </Stack>
  );
}
