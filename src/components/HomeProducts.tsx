
import { getProducts } from "@/lib/product";
import HomeProductClient from "./HomeProductClient";
import SearchReset from "./SearchReset";

export default async function HomeProducts() {
  let products = [];

  try {
    products = await getProducts(48)
  } catch (error) {
    console.error("Failed to fetch products", error);
    return (
      <div className="text-center py-10 text-red-500 min-h-100">
        Failed to load products. Please try again later.
      </div>
    );
  }
  if (!products || products.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500 min-h-100">
        No products available right now.
      </div>
    );
  }

  return (
    <>
      <SearchReset />
      <HomeProductClient products={products} />
    </>

  )



}
