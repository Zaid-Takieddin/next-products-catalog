"use client";
import { Skeleton, Stack, Grid } from "@mui/material";

export default function Loading() {
  return [1, 2, 3, 4].map((_) => (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Stack spacing={1} mt={10}>
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        <Skeleton variant="rectangular" height={60} />
        <Skeleton variant="rounded" height={60} />
      </Stack>
    </Grid>
  ));
}
