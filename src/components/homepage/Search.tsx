"use client"
import { Search } from 'lucide-react'
import { useSearchStore } from '@/app/store/useSearchStore';
import { useDebounce } from '@/app/hooks/useDebounce';
import { useState, useEffect } from 'react';
const SearchComp = () => {
    const { query, setQuery } = useSearchStore();
    const [inputValue, setInputValue] = useState(query);

    const debounceValue = useDebounce(inputValue, 300);

    useEffect(() => {
        setQuery(debounceValue);
    }, [debounceValue, setQuery]);

    console.log(inputValue, "Input value")


    return (
        <div className="hidden md:flex items-center flex-1 max-w-xl">
            <div className="w-full relative">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    name='search'
                    placeholder="Search for products..."
                    className="w-full rounded-sm py-2 pl-4 pr-10 text-sm border border-gray text-black"
                />
                <Search className="absolute right-3 top-2.5 text-pink-500 w-5 h-5" />
            </div>
        </div>
    )
}

export default SearchComp;