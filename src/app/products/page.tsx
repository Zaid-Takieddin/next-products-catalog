import { Product } from "@/types/Product";
import DataDisplayer from "@/UI/DataDispalyer";
import Paginator from "@/utils/Paginator";

async function getProducts() {
  try {
    const res = await fetch("https://dummyapi.online/api/products");
    return res.json();
  } catch (error: any) {
    throw new Error(error);
  }
}

export default async function Products() {
  const products: Product[] = await getProducts();

  return <DataDisplayer data={products} />;
}
