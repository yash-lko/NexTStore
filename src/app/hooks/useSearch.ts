import { useMemo } from "react";
import { ProductType } from "@/types/products";

export const useProductSearch = (
  products: ProductType[],
  query: string
) => {
  return useMemo(() => {
    if (!query) return products;

    return products.filter((p) =>
      p.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [products, query]);
};
