"use client";

import ProductCard from "./ProductCard";
import { useSearchStore } from "@/app/store/useSearchStore";
import Image from "next/image";
import { useState, useMemo } from "react";
import { sortProducts, SortType } from "@/lib/sortProducts";
import FilterBar from "./SidebarFilters";

export default function HomeProductClient({ products }: { products: any[] }) {
    const { query } = useSearchStore();
    const [sort, setSort] = useState<SortType>("default");
    const filteredProducts = useMemo(() => {
        return products.filter((product) =>
            product.title.toLowerCase().includes(query.toLowerCase())
        );
    }, [products, query]);

    const sortedProducts = useMemo(() => {
        return sortProducts(filteredProducts, sort);
    }, [filteredProducts, sort]);
    if (query && sortedProducts.length === 0) {
        return (
            <div className="flex justify-center min-h-90 w-full items-center">
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
        <div>

      <FilterBar sort={sort} onSortChange={setSort} />

          


            <div className="grid grid-cols-2 mt-6 sm:grid-cols-3 lg:grid-cols-4 gap-7">
                {sortedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
