"use client";
import { SortingProps, SortType } from "@/types/products";

const Sorting = ({ sort, onSortChange }: SortingProps) => {
    return (
        <div>
            <select
                value={sort}
                onChange={(e) => onSortChange(e.target.value as SortType)}
                className="border border-black cursor-pointer rounded-md px-3 py-2 text-sm bg-white text-black md:ml-auto"
            >
                <option value="default">Default</option>
                <option value="lowToHigh">Price: Low → High</option>
                <option value="highToLow">Price: High → Low</option>
            </select>
        </div>
    );
};

export default Sorting;
