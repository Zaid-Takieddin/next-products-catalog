"use client";
import { Product } from "@/types/Product";
import Paginator from "@/utils/Paginator";
import Sorter from "@/utils/Sorter";
import { useState } from "react";

const DataDisplayer = ({ data }: { data: Product[] }) => {
  const [label, setLabel] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("");
  const labels = ["id", "price"];
  return (
    <>
      <Sorter
        label={label}
        sortBy={sortBy}
        setLabel={setLabel}
        setSortBy={setSortBy}
        labels={labels}
      />
      <Paginator data={data} pageSize={8} sort={sortBy} sortBy={label} />
    </>
  );
};

export default DataDisplayer;
