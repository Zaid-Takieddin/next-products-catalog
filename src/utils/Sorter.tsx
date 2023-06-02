"use client";
import { Sorter } from "@/types/Sorter";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useState } from "react";

const Sorter = ({ label, labels, setLabel, setSortBy, sortBy }: Sorter) => {
  return (
    <Grid
      container
      item
      xs={12}
      alignItems="center"
      marginBottom="auto"
      spacing={3}
    >
      <Grid item xs={12} md={4} lg={5}>
        {/* <Box> */}
        <FormControl fullWidth>
          <InputLabel id="label">Select property to sort</InputLabel>
          <Select
            labelId="label"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
          >
            {labels.map((l) => (
              <MenuItem key={l} value={l}>
                {l.toUpperCase()}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {/* </Box> */}
      </Grid>
      <Grid item xs={12} md={4} lg={5}>
        {/* <Box> */}
        <FormControl fullWidth>
          <InputLabel id="sortBy">Sort</InputLabel>
          <Select
            labelId="sortBy"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <MenuItem value="asc">Ascending</MenuItem>
            <MenuItem value="desc">Descending</MenuItem>
          </Select>
        </FormControl>
        {/* </Box> */}
      </Grid>
      <Grid item xs={12} md={2}>
        <Button
          variant="contained"
          onClick={() => {
            setLabel("");
            setSortBy("");
          }}
        >
          Clear
        </Button>
      </Grid>
    </Grid>
  );
};

export default Sorter;
