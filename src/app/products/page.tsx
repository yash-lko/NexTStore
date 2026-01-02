import { getProducts } from "@/lib/product";
import { Product } from "@/types/products";
import ProductClient from "@/components/ProductClient";
import SearchReset from "@/components/SearchReset";

export default async function ProductsPage() {
  let products: Product[] = [];

  try {
    products = await getProducts(24); // <-- raw array
  } catch (error) {
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
    <div className="min-h-screen bg-white p-6">
      <SearchReset />
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Products</h1>
        <ProductClient products={products} />
      </div>
    </div>
  );
}
