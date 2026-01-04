import { useMemo, useState } from "react";
import { Product } from "@/types/products";

export const useCategoryFilter = (products: Product[]) => {
  const [category, setCategory] = useState("All");

  const categories = useMemo(() => {
    const set = new Set<string>();
    products.forEach((p) => {
      if (p.category?.name) set.add(p.category.name);
    });
    return ["All", ...Array.from(set)];
  }, [products]);

  const categoryFilteredProducts = useMemo(() => {
    if (category === "All") return products;
    return products.filter(
      (p) => p.category?.name === category
    );
  }, [products, category]);

  return {
    category,
    setCategory,
    categories,
    categoryFilteredProducts,
  };
};
