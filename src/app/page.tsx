import SidebarFilters from "@/components/SidebarFilters";
import BannerSlider from "@/components/BannerSlider";
import Products from "@/components/Products";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto p-4">
     <SidebarFilters/>
      <BannerSlider/>
      <Products/>
     
    </div>
  );
}
