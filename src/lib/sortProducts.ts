import { ProductType, SortType } from "@/types/products";

export const sortProducts = (
  products: ProductType[] | undefined,
  sort: SortType
): ProductType[] => {
  if (!products || !Array.isArray(products)) return [];

  const sorted = [...products];

  switch (sort) {
    case "lowToHigh":
      return sorted.sort((a, b) => a.price - b.price);

    case "highToLow":
      return sorted.sort((a, b) => b.price - a.price);

    default:
      return sorted; 
  }
};

