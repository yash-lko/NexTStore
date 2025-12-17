export default function ProductDetailsSkeleton() {
    return (
        <div className="container mx-auto px-8 py-8 mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="w-full h-105 rounded-xl shimmer" />
                <div className="space-y-5">
                    <div className="h-8 w-3/4 rounded shimmer" />
                    <div className="h-4 w-full rounded shimmer" />
                    <div className="h-4 w-full rounded shimmer" />
                    <div className="h-4 w-5/6 rounded shimmer" />
                    <div className="h-6 w-32 rounded shimmer mt-4" />
                    <div className="h-4 w-40 rounded shimmer" />
                    <div className="flex gap-4 mt-6">
                        <div className="h-12 w-36 rounded-lg shimmer" />
                        <div className="h-12 w-28 rounded-lg shimmer" />
                    </div>
                </div>

            </div>
        </div>
    );
}
