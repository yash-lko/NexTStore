"use client"
import ProductCard from './ProductCard';
import { useSearchStore } from '@/app/store/useSearchStore';
import Image from 'next/image';
export default function HomeProductClient({ products }: { products: any[]; }) {
    const { query } = useSearchStore();
    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
    );
    if (query && filteredProducts.length === 0) {
        return (
            <div className='flex justify-center min-h-90 w-full items-center'>
                <Image
                    src="/images/search-message.png"
                    alt="logo"
                    width={400}
                    height={400}
                />

            </div>

        )
    }
    return (
        <div className="grid grid-cols-2 mt-6 sm:grid-cols-3 lg:grid-cols-4 gap-7">
            {filteredProducts.map((products) => (
                <ProductCard key={products.id} product={products} />
            ))}
        </div>
    )
}

