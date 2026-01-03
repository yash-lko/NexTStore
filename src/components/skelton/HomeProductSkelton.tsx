import ProductSkeleton from "./ProductSkelton";

export default function HomeProductsSkeleton() {
    return (
        <>
            {/* <div className="w-full h-65 sm:h-65 lg:h-65 rounded-xl shimmer mb-6" /> */}
            <div className="w-full h-16"/>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-7">
                {Array.from({ length: 12 }).map((_, i) => (
                    <ProductSkeleton key={i} />
                ))}
            </div>
        </>
    );
}
