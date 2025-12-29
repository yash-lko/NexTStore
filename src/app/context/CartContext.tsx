"use client"
import { useState, createContext, useContext } from "react"
import { CartContextType, CartItem, Product } from "@/types/products"
import toast from "react-hot-toast"
import { showAlertToast } from "@/components/ui/AlertToast"

const CartContext = createContext<CartContextType | null>(null)

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([])

  const addToCart = (product: Product) => {
    const existing = cart.find(item => item.id === product.id)

    if (existing) {
    showAlertToast(
          "success",
          "Quantity Updated",
          "Product quantity has been increased."
        )

      setCart(prev =>
        prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      )
    } else {
     showAlertToast(
        "success",
        "Added to Cart",
        "Item has been added to your cart."
      )
      setCart(prev => [...prev, { ...product, quantity: 1 }])
    }
  }

  const removeFromCart = (id: number) => {
    showAlertToast(
      "error",
      "Removed from Cart",
      "Item has been removed from your cart."
    )
    setCart(prev => prev.filter(item => item.id !== id))
  }

  const increaseQty = (id: number) => {
     showAlertToast(
      "success",
      "Quantity Updated",
      "Item quantity increased."
    )
    setCart(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    )
  }

  const decreaseQty = (id: number) => {
      showAlertToast(
      "success",
      "Quantity Updated",
      "Item quantity decreased."
    )
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

