export default function ProductSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow-[0_4px_18px_rgba(0,0,0,0.08)] overflow-hidden">

      <div className="h-48 w-full shimmer" />

      <div className="p-4 space-y-3">
        <div className="h-4 shimmer rounded w-3/4" />
        <div className="h-3 shimmer rounded w-full" />
        <div className="h-3 shimmer rounded w-2/3" />

        <div className="flex items-center justify-between pt-3">
          <div className="h-4 shimmer rounded w-16" />
          <div className="h-9 w-9 shimmer rounded-full" />
        </div>
      </div>
    </div>
  );
}
