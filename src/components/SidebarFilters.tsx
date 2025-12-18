"use client";

import { useState } from "react";
import { Smartphone, Shirt, Home, Heart, Activity } from "lucide-react";

export default function FilterBar() {
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");

  const categories = [
    { name: "All", icon: Activity },
    { name: "Electronics", icon: Smartphone },
    { name: "Fashion", icon: Shirt },
    { name: "Home", icon: Home },
    { name: "Beauty", icon: Heart },
    { name: "Sports", icon: Activity },
  ];

  const sortOptions = [
    { label: "Default", value: "" },
    { label: "Price: Low → High", value: "low-high" },
    { label: "Price: High → Low", value: "high-low" },
    { label: "Newest First", value: "newest" },
  ];

  return (
    <div className="w-full  bg-white shadow px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-4 overflow-x-auto">
      
      {/* Categories */}
      <div className="flex gap-3 flex-wrap md:flex-nowrap">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <button
              key={cat.name}
              onClick={() => setCategory(cat.name)}
              className={`flex items-center cursor-pointer gap-2 px-4 py-2 rounded text-sm font-medium shrink-0 ${
                category === cat.name
                  ? "bg-pink-500 text-white"
                  : "bg-gray-100 text-black hover:text-white hover:bg-pink-500"
              } transition`}
            >
              <Icon size={16} />
              {cat.name}
            </button>
          );
        })}
      </div>

      {/* Sort Dropdown */}
      <div className="ml-auto">
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border rounded-md px-3 py-2 text-sm bg-white text-black"
        >
          {sortOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
