"use client";

import { Smartphone, Shirt, Home, Heart, Activity } from "lucide-react";
import { SortType } from "@/lib/sortProducts";

type Props = {
  sort: SortType;
  onSortChange: (sort: SortType) => void;
};

export default function FilterBar({ sort, onSortChange }: Props) {
  const categories = [
    { name: "All", icon: Activity },
    { name: "Electronics", icon: Smartphone },
    { name: "Fashion", icon: Shirt },
    { name: "Home", icon: Home },
    { name: "Beauty", icon: Heart },
    { name: "Sports", icon: Activity },
  ];

  return (
    <div className="w-full bg-white shadow px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-4 overflow-x-auto">
      
      {/* Category UI (visual only for now) */}
      <div className="flex gap-3 flex-wrap md:flex-nowrap">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <button
              key={cat.name}
              disabled
              className="flex items-center gap-2 px-4 py-2 rounded text-sm font-medium shrink-0
                         bg-gray-100 text-black opacity-60 cursor-not-allowed"
            >
              <Icon size={16} />
              {cat.name}
            </button>
          );
        })}
      </div>

      {/* Sorting (ACTIVE) */}
      <div className="ml-auto">
        <select
          value={sort}
          onChange={(e) => onSortChange(e.target.value as SortType)}
          className="border rounded-md px-3 py-2 text-sm bg-white text-black"
        >
          <option value="default">Default</option>
          <option value="lowToHigh">Price: Low → High</option>
          <option value="highToLow">Price: High → Low</option>
        </select>
      </div>
    </div>
  );
}
