"use client";
import { FilterProps } from "@/types/products";
const Filter = ({
    category,
    categories,
    onCategoryChange,
}: FilterProps) => {
    return (
        <div className="flex gap-3 flex-wrap">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => onCategoryChange(cat)}
                    className={`px-4 py-2 cursor-pointer rounded text-sm font-medium
            ${category === cat
                            ? "bg-pink-500 text-white"
                            : "bg-gray-100 hover:bg-pink-500 hover:text-white"
                        }`}
                >
                    {cat}
                </button>
            ))}
        </div>
    );
};

export default Filter;
