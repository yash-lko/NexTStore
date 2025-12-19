"use client"
import React, { useState } from 'react'
import { Search } from 'lucide-react'
import { getProducts } from '@/lib/product';
const SearchComp = () => {
    const [search , setSearch]=useState('');
    console.log(search, "search")
  return (
     <div className="hidden md:flex items-center flex-1 max-w-xl">
                    <div className="w-full relative">
                        <input
                            type="text"
                            onChange={(e)=>setSearch(e.target.value)} 
                            name='search'
                            placeholder="Search for products..."
                            className="w-full rounded-sm py-2 pl-4 pr-10 text-sm border border-gray text-black"
                        />
                        <Search  className="absolute right-3 top-2.5 text-pink-500 w-5 h-5" />
                    </div>
                </div>
  )
}

export default SearchComp