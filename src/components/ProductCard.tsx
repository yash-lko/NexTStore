import { ShoppingCart } from "lucide-react";
import { Product } from "@/types/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  if (!product) return null;

  return (
    <div className="group bg-white rounded-xl shadow-[0_4px_18px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.12)] transition-all duration-300 flex flex-col overflow-hidden">
      
     <div className="h-48 w-full bg-white flex items-center justify-center overflow-hidden">
  <img
    src={product.thumbnail}
    alt={product.title}
    className="max-h-full max-w-full object-contain"
  />
</div>


      <div className="p-4">
        <h3 className="font-semibold text-lg text-pink-500 line-clamp-2">
          {product.title}
        </h3>
       <p className="text-xs text-gray-900 line-clamp-2 font-light">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-3">
          <p className="text-lg font-semibold text-gray-900">
            ₹{product.price}
          </p>

          <button className="p-2 rounded-full bg-pink-500 text-white transition-all duration-200 group-hover:scale-110 cursor-pointer">
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
