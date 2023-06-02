import { Product } from "./Product";

export type Paginator = {
  pageSize: number;
  data: Product[];
  sort: string | "";
  sortBy: string | "";
};
