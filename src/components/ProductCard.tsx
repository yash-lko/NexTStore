"use client"
import { ShoppingCart } from "lucide-react";
import { ProductCardProps } from "@/types/products";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
export default function ProductCard({ product }: ProductCardProps) {
    const { addToCart, cart } = useCart();
    if (!product) return null;
    const { title } = product;
    const slug = title.toLowerCase().trim().replace(/\s+/g, "-");
    return (
        <div className="group bg-white mt-2 rounded-xl cursor-pointer shadow-[0_4px_18px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.12)] transition-all duration-300 flex flex-col overflow-hidden">

            <div className="h-50 w-full bg-white flex items-center justify-center overflow-hidden transition-transform ease-in-out duration-300 hover:scale-105">
                <Link href={`products/${product.slug}`}>
                    <img
                        src={product?.images?.[0]}
                        alt={product.title}
                        className="max-h-45 max-w-45 object-contain p-2"
                    />
                </Link>
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
                        ₹{(product.price * 90).toFixed(2)}
                    </p>

                    <button onClick={() => addToCart(product)} className="p-2 rounded-full  bg-pink-500 text-white cursor-pointer">
                        <ShoppingCart className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
