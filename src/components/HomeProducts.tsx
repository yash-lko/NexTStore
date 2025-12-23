
import { getProducts } from "@/lib/product";
import HomeProductClient from "./HomeProductClient";

export default async function HomeProducts() {
  const products = await getProducts(12);

  return <HomeProductClient products={products} />;
}
