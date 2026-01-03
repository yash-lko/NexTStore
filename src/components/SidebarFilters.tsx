"use client";

import { SortType } from "@/lib/sortProducts";

type Props = {
  sort: SortType;
  category: string;
  categories: string[];
  onSortChange: (sort: SortType) => void;
  onCategoryChange: (category: string) => void;
};

export default function SidebarFilters({
  sort,
  category,
  categories,
  onSortChange,
  onCategoryChange,
}: Props) {
  return (
    <div className="w-full bg-white shadow px-4 py-3 flex flex-col md:flex-row gap-4">
      
      {/* Categories */}
      <div className="flex gap-3 flex-wrap">
        {["All", ...categories].map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={`px-4 py-2 rounded text-sm font-medium
              ${
                category === cat
                  ? "bg-pink-500 text-white"
                  : "bg-gray-100 hover:bg-pink-500 hover:text-white"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Sorting */}
      <select
        value={sort}
        onChange={(e) => onSortChange(e.target.value as SortType)}
        className="border rounded-md px-3 py-2 text-sm bg-white text-black md:ml-auto"
      >
        <option value="default">Default</option>
        <option value="lowToHigh">Price: Low → High</option>
        <option value="highToLow">Price: High → Low</option>
      </select>
    </div>
  );
}
