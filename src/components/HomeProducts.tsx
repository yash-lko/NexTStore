import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/product";

export default async function HomeProducts() {
  const products = await getProducts(12);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-7">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
