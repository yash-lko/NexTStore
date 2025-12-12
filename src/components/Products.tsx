"use client";
import { ShoppingCart } from "lucide-react";
export default function Products() {

    return (
        <>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-7 mt-6">
                {Array.from({ length: 8 }).map((_, i) => (
                    <div
                        key={i}
                        className="group bg-white rounded-xl shadow-[0_4px_18px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.12)] transition-all duration-300 flex flex-col overflow-hidden"
                    >
                        <div className="h-48 w-full overflow-hidden">
                            <img
                                src={`https://picsum.photos/400?random=${i}`}

                                alt={`Product ${i + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="font-semibold text-lg text-gray-900 group-hover:text-black">
                                Product {i + 1}
                            </h3>

                            <div className="flex items-center justify-between mt-3">
                                <p className="text-lg font-semibold text-gray-900">₹999</p>
                                <button className="p-2 rounded-full bg-pink-500 text-white transition-all duration-200 group-hover:scale-115 cursor-pointer">
                                    <ShoppingCart className="w-5 h-5" />
                                </button>
                            </div>


                        </div>
                    </div>
                ))}
            </div>


            <div className="mt-8 flex justify-center ">
                <button className="px-6 py-2 bg-pink-500 cursor-pointer text-white rounded-md text-sm font-medium hover:bg-gray-800 transition">
                    Show More
                </button>
            </div>
        </>

    );
}
