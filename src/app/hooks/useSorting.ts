import { useMemo, useState } from "react";
import { Product, SortType } from "@/types/products";
import {sortProducts } from "@/lib/sortProducts";

export const useProductSorting = (products: Product[]) => {
  const [sort, setSort] = useState<SortType>("default");

  const sortedProducts = useMemo(() => {
    return sortProducts(products, sort);
  }, [products, sort]);

  return {
    sort,
    setSort,
    sortedProducts,
  };
};
