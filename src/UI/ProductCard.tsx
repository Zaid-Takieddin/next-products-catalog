"use client";
import * as React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
  Stack,
} from "@mui/material";
import { Product } from "@/types/Product";
import { useRouter } from "next/navigation";

export default function ProductCard({
  id,
  name,
  price,
  image,
  description,
}: Product) {
  const router = useRouter();
  return (
    <Card
      id={id}
      sx={{
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
        "&:hover": {
          transform: "scale(1.05)",
          transition: "0.3s",
        },
        transition: "0.3s",
      }}
      onClick={() => router.push(`/products/${id}`)}
    >
      <CardActionArea
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          component="img"
          image={image ?? "https://placehold.co/600x400"}
          alt={name}
        />
        <CardContent sx={{}}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              gutterBottom
              fontSize="16pt"
              letterSpacing="-0.5px"
              fontWeight="bold"
              color="text.primary"
            >
              {name}
            </Typography>
            <Typography fontSize="10pt" color="text.secondary" fontWeight="600">
              ${price}
            </Typography>
          </Stack>
          <Typography variant="caption" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
