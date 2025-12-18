"use client";

import { useState } from "react";

export default function Filters() {
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  return (
    <div className="w-full mt-10  bg-white dark:bg-gray-900 shadow rounded-lg p-5 mb-6 ">
      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

        {/* Category Filter */}
        <div>
          <label className="block mb-1 text-sm font-medium dark:text-white">
            Category
          </label>
          <select
            className="w-full border rounded-md p-2 bg-gray-50 dark:bg-gray-800 dark:text-white"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="home">Home</option>
            <option value="beauty">Beauty</option>
          </select>
        </div>

        {/* Sort By */}
        <div>
          <label className="block mb-1 text-sm font-medium dark:text-white">
            Sort By
          </label>
          <select
            className="w-full border rounded-md p-2 bg-gray-50 dark:bg-gray-800 dark:text-white"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">Default</option>
            <option value="low-high">Price: Low → High</option>
            <option value="high-low">Price: High → Low</option>
            <option value="latest">Latest</option>
          </select>
        </div>

        {/* Min Price */}
        <div>
          <label className="block mb-1 text-sm font-medium dark:text-white">
            Min Price
          </label>
          <input
            type="number"
            className="w-full border rounded-md p-2 bg-gray-50 dark:bg-gray-800 dark:text-white"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
        </div>

        {/* Max Price */}
        <div>
          <label className="block mb-1 text-sm font-medium dark:text-white">
            Max Price
          </label>
          <input
            type="number"
            className="w-full border rounded-md p-2 bg-gray-50 dark:bg-gray-800 dark:text-white"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
      </div>

      {/* Clear Filters Button */}
      <div className="mt-4 flex justify-end">
        <button
          onClick={() => {
            setCategory("");
            setSort("");
            setMinPrice("");
            setMaxPrice("");
          }}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-sm dark:bg-gray-700 dark:text-white"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
}
