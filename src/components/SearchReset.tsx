"use client"
import { useEffect } from "react";
import { useSearchStore } from "@/app/store/useSearchStore";

export default function SearchReset() {

    const resetQuery = useSearchStore((state) => state.resetQuery);

    useEffect(() => {
        resetQuery()
    }, [resetQuery])
    return null;
}