"use client"
import { useState, createContext, useContext } from "react"
import { CartContextType, CartItem, Product } from "@/types/products"
import toast from "react-hot-toast"

const CartContext = createContext<CartContextType | null>(null)

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([])

  const addToCart = (product: Product) => {
    const existing = cart.find(item => item.id === product.id)

    if (existing) {
      toast.success("Quantity increased")
      setCart(prev =>
        prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      )
    } else {
      toast.success("Item added to cart")
      setCart(prev => [...prev, { ...product, quantity: 1 }])
    }
  }

  const removeFromCart = (id: number) => {
    toast.error("Item removed from cart")
    setCart(prev => prev.filter(item => item.id !== id))
  }

  const increaseQty = (id: number) => {
    toast("Quantity updated", { icon: "🛒" })
    setCart(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    )
  }

  const decreaseQty = (id: number) => {
    toast("Quantity updated", { icon: "🛒" })
    setCart(prev =>
      prev
        .map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    )
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, increaseQty, decreaseQty }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used inside CartProvider")
  }
  return context
}
