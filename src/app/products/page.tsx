import { Product } from "@/types/Product";
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

  return <Paginator data={products} pageSize={8} />;
}
