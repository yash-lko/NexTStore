import { Product, SortType } from "@/types/products";

export const sortProducts = (
  products: Product[] | undefined,
  sort: SortType
): Product[] => {
  if (!products || !Array.isArray(products)) return [];

  const sorted = [...products];

  switch (sort) {
    case "lowToHigh":
      return sorted.sort((a, b) => a.price - b.price);

    case "highToLow":
      return sorted.sort((a, b) => b.price - a.price);

    default:
      return sorted; // ✅ safe
  }
};

