import SidebarFilters from "@/components/SidebarFilters";
import BannerSlider from "@/components/BannerSlider";
import HomeProducts from "@/components/HomeProducts";
import { Suspense } from "react";
import HomeProductsSkeleton from "@/components/HomeProductSkelton";
export default function Home() {
  return (
    <div className="w-full px-8 mt-6">
      <div className="w-full">
        <SidebarFilters />
      </div>
     
      <div className="w-full px-4 mt-6">
        
        <Suspense fallback={<HomeProductsSkeleton />}>
         
          <HomeProducts />
          {/* <BannerSlider /> */}
        </Suspense>
      </div>
    </div>

  );
}
