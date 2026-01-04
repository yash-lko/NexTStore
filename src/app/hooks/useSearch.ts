import { useMemo } from "react";
import { Product } from "@/types/products";

export const useProductSearch = (
  products: Product[],
  query: string
) => {
  return useMemo(() => {
    if (!query) return products;

    return products.filter((p) =>
      p.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [products, query]);
};
