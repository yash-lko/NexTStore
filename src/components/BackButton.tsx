"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
export default function BackButton() {
    const router = useRouter();
    return (
        <button
            type="button"
            onClick={() => router.back()}
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-pink-600 transition mb-6 cursor-pointer"
        >
            <ArrowLeft className="w-4 h-4" />
            Back
        </button>
    );
}
