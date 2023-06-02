"use client";
import { Product } from "@/types/Product";
import { Grid, Box, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";

const ProductPage = ({ product }: { product: Product }) => {
  const router = useRouter();
  return (
    <Grid item xs={12}>
      <Box
        sx={{
          display: "flex",
          height: "100%",
          gap: 2,
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          component="img"
          src={product.image}
          width={{ xs: "100%", md: "50%" }}
          height={{ xs: "200px", md: "100%" }}
          maxHeight="calc(100vh - 120px)"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: { xs: "100%", md: "50%" },
            height: "100%",
          }}
        >
          <Typography
            variant="h2"
            fontWeight="bold"
            borderTop="1px solid"
            borderBottom="1px solid"
            width="fit-content"
          >
            {product.name}
          </Typography>
          <Typography variant="subtitle1" fontStyle="italic">
            {product.description}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            <Box component="span" fontWeight="bold" color="text.primary">
              Price Start at
            </Box>{" "}
            ${product.price}
          </Typography>
          <Button
            variant="contained"
            onClick={() => router.back()}
            sx={{
              marginTop: "auto",
              width: "fit-content",
              marginLeft: "auto",
            }}
          >
            Go Back to Products
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default ProductPage;
