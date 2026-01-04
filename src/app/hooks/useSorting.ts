import { useMemo, useState } from "react";
import { ProductType, SortType } from "@/types/products";
import {sortProducts } from "@/lib/sortProducts";

export const useProductSorting = (products: ProductType[]) => {
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
