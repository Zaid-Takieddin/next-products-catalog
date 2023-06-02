"use client";
import { Box } from "@mui/material";

async function getProduct(id: number) {
  try {
    const res = await fetch(`https://dummyapi.online/api/products/${id}`);
    return res.json();
  } catch (error: any) {
    throw new Error(error);
  }
}

export default async function Product({
  params: { id },
}: {
  params: { id: number };
}) {
  const product = await getProduct(id);

  return <Box>page</Box>;
}
