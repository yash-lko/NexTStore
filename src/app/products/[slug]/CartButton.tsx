"use client"

import { ShoppingCart } from "lucide-react"
import { useCart } from "@/app/context/CartContext"
import { ProductType } from "@/types/products"

export default function CartButton({ product }: { product: ProductType }) {
  const { addToCart } = useCart()

  return (
    <button
      onClick={() => addToCart(product)}
      className="flex items-center gap-2 px-4 py-2 cursor-pointer rounded-lg bg-pink-500 text-white text-sm font-medium hover:bg-pink-600 transition"
    >
      <ShoppingCart className="w-4 h-4" />
      Add to Cart
    </button>
  )
}
