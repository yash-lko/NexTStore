"use client"

import { Search, ShoppingCart, Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import SearchComp from "./Search";
import { useCart } from "@/app/context/CartContext";
export default function Header() {
    const { cart } = useCart();
    return (
        <header className="w-full bg-white shadow-sm fixed top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">


                <Link href="/" className="text-2xl font-bold text-pink-500">
                    <Image
                        src="/images/logo.png"
                        alt="logo"
                        width={130}
                        height={100}
                        className="object-contain"
                        priority
                    />
                </Link>

                <SearchComp />



                <div className="flex items-center gap-5">
                    <button className="md:hidden">
                        <Menu className="w-7 h-7 text-black" />
                    </button>
                    <div className="hidden md:flex gap-6 text-black font-medium">
                        <Link href="/products" className="hover:underline">
                            Products
                        </Link>

                        <Link href="/about" className="hover:underline">
                            About
                        </Link>
                    </div>


                    <Link href="/cart" className="relative">
                        <ShoppingCart className="w-6 h-6 text-black" />


                        <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                            {cart.length}
                        </span>
                    </Link>

                    <Link
                        href="/login"
                        className="px-4 py-1.5 bg-pink-500 text-white font-semibold rounded-sm text-sm"
                    >
                        Login
                    </Link>

                </div>
            </div>


            <div className="md:hidden px-4 pb-3">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search for products..."
                        className="w-full rounded-sm py-2 pl-4 pr-10 text-sm bg-white text-black placeholder-gray-600"
                    />
                    <Search className="absolute right-3 top-2.5 text-gray-700 w-5 h-5" />
                </div>
            </div>
        </header>
    );
}
