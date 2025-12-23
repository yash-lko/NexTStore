
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/product";

export default async function ProductsPage() {
  const products=await getProducts(400)
 
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
