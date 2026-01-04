"use client";

import ProductCard from "../ProductCard";
import Image from "next/image";
import { useSearchStore } from "@/app/store/useSearchStore";
import { Product } from "@/types/products";
import Filter from "../Filter";
import Sorting from "../Sorting";
import { useCategoryFilter } from "@/app/hooks/useCategoryFilter";
import { useProductSorting } from "@/app/hooks/useSorting";
import { useProductSearch } from "@/app/hooks/useSearch";

export default function HomeProductClient({
  products,
}: {
  products: Product[];
}) {
  const { query } = useSearchStore();

  // Category
  const {
    category,
    setCategory,
    categories,
    categoryFilteredProducts,
  } = useCategoryFilter(products);

 
  const searchedProducts = useProductSearch(
    categoryFilteredProducts,
    query
  );

 
  const {
    sort,
    setSort,
    sortedProducts,
  } = useProductSorting(searchedProducts);

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
      <div className="w-full bg-white shadow px-4 py-3 flex flex-col md:flex-row gap-4 justify-between">
        <Filter
          category={category}
          categories={categories}
          onCategoryChange={setCategory}
        />

        <Sorting
          sort={sort}
          onSortChange={setSort}
        />
      </div>

      <div className="grid grid-cols-2 mt-6 sm:grid-cols-3 lg:grid-cols-4 gap-7">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
