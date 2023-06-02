"use client";
import { Grid, Pagination, Stack } from "@mui/material";
import { Paginator } from "@/types/Paginator";
import { Product } from "@/types/Product";
import ProductCard from "@/UI/ProductCard";
import React, { useEffect, useState } from "react";

const Paginator = ({ pageSize, data, sort, sortBy }: Paginator) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [dataSnap, setDataSnap] = useState<Product[]>([]);
  const [sortedData, setSortedData] = useState<Product[]>([]);

  const pages = Math.ceil(data.length / pageSize);
  console.log(sort.length);

  useEffect(() => {
    let storedData;
    if (!sort) {
      storedData = data.sort((a: any, b: any) => Number(a.id) - Number(b.id));
    } else if (sort === "desc") {
      storedData = data.sort(
        (a: any, b: any) => Number(b[sortBy]) - Number(a[sortBy])
      );
    } else {
      storedData = data.sort(
        (a: any, b: any) => Number(a[sortBy]) - Number(b[sortBy])
      );
    }
    setSortedData(storedData);
  }, [sort, sortBy, data]);

  useEffect(() => {
    setDataSnap(() =>
      sortedData.slice(
        currentPage * pageSize - pageSize,
        currentPage * pageSize
      )
    );
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage, sortedData, sort, sortBy]);

  return (
    <>
      {dataSnap.map((product) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            description={product.description}
          />
        </Grid>
      ))}
      {pages > 1 && (
        <Grid item xs={12} sx={{ position: "sticky", bottom: 0, zIndex: 10 }}>
          <Stack
            mb={2}
            p="3px 5px"
            boxShadow="0px 5px 30px 0px"
            mx="auto"
            bgcolor="background.paper"
            borderRadius={2}
            height="fit-content"
            width="fit-content"
          >
            <Pagination
              count={pages}
              shape="rounded"
              onChange={(_, number) => {
                setCurrentPage(number);
              }}
              size="small"
              sx={{ display: { xs: "unset", md: "none" } }}
            />
            <Pagination
              count={pages}
              shape="rounded"
              onChange={(_, number) => {
                setCurrentPage(number);
              }}
              sx={{ display: { xs: "none", md: "unset" } }}
            />
          </Stack>
        </Grid>
      )}
    </>
  );
};

export default Paginator;
