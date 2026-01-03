
import BannerSlider from "@/components/BannerSlider";
import HomeProducts from "@/components/homepage/HomeProducts";
import { Suspense } from "react";
import HomeProductsSkeleton from "@/components/skelton/HomeProductSkelton";
export default function Home() {
  return (
    <div className="w-full px-8 mt-6">
      <Suspense fallback={<HomeProductsSkeleton />}>
        <HomeProducts />
        {/* <BannerSlider /> */}
      </Suspense>
    </div>
  );
}
