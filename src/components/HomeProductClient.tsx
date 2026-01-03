"use client";

import ProductCard from "./ProductCard";
import Image from "next/image";
import { useSearchStore } from "@/app/store/useSearchStore";
import { useState, useMemo } from "react";
import { sortProducts, SortType } from "@/lib/sortProducts";
import SidebarFilters from "./SidebarFilters";
import { Product } from "@/types/products";

export default function HomeProductClient({
  products,
}: {
  products: Product[];
}) {
  const { query } = useSearchStore();
  const [sort, setSort] = useState<SortType>("default");
  const [category, setCategory] = useState("All");

  const availableCategories = useMemo(() => {
    const set = new Set<string>();
    products.forEach((p) => {
      if (p.category?.name) {
        set.add(p.category.name);
      }
    });
    return Array.from(set);
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(query.toLowerCase());

      const matchesCategory =
        category === "All" ||
        product.category?.name === category;

      return matchesSearch && matchesCategory;
    });
  }, [products, query, category]);

  const sortedProducts = useMemo(() => {
    return sortProducts(filteredProducts, sort);
  }, [filteredProducts, sort]);

  if (query && sortedProducts.length === 0) {
    return (
      <div className="flex justify-center min-h-90 items-center">
        <Image
          src="/images/search-message.png"
          alt="No results"
          width={400}
          height={400}
        />
      </div>
    );
  }

  return (
    <>
      <SidebarFilters
        sort={sort}
        category={category}
        categories={availableCategories}
        onSortChange={setSort}
        onCategoryChange={setCategory}
      />

      <div className="grid grid-cols-2 mt-6 sm:grid-cols-3 lg:grid-cols-4 gap-7">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
