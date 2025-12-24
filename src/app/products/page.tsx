
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/product";
import { Product } from "@/types/products";

export default async function ProductsPage() {
  let products: Product[] = []

  try {
    products = await getProducts(24);

  } catch (error) {
    return (
      <div className="text-center py-10 text-red-500 min-h-100">
        Failed to load products. Please try again later.
      </div>
    )
  }

  if (!products || products.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500 min-h-100">
        No products available right now.
      </div>
    )
  }



  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Products</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-7 mt-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
