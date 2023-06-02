import { Dispatch, SetStateAction } from "react";

export type Sorter = {
  labels: string[];
  label: string | "";
  sortBy: string | "";
  setLabel: Dispatch<SetStateAction<string | "">>;
  setSortBy: Dispatch<SetStateAction<string | "">>;
};
