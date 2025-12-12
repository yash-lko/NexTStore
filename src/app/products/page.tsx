"use client";

import { useState } from "react";
import Image from "next/image";
import Products from "@/components/Products";

const sampleProducts = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 1999,
    image: "/images/product1.jpg",
  },
  {
    id: 2,
    title: "Smart Watch",
    price: 2999,
    image: "/images/product2.jpg",
  },
  {
    id: 3,
    title: "Running Shoes",
    price: 1599,
    image: "/images/product3.jpg",
  },
  {
    id: 4,
    title: "DSLR Camera",
    price: 45999,
    image: "/images/product4.jpg",
  },
];

export default function ProductsPage() {
  const [search, setSearch] = useState("");

  const filtered = sampleProducts.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Products</h1>

     
<Products/>
      </div>
    </div>
  );
}
