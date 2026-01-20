
import { Metadata } from "next";
import { ProductDetailsSlug } from "@/types/products";
import BackButton from "@/components/BackButton";
import CartButton from "./CartButton";
export const metadata: Metadata = {
  icons: {
    icon: '/images/favicon.ico',
  },
};


export default async function ProductDetailsUI({ params }: { params: Promise<ProductDetailsSlug> }) {

  const product_slug = (await params).slug;

  const res = await fetch('https://api.escuelajs.co/api/v1/products');
  const data = await res.json();
  if (!res.ok) {
    return <h2>Something Went Wrong!</h2>
  }
  console.log(data, "Data")


  const productDetails = data.find((b: any) => b.slug.trim() === product_slug.trim());

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 mt-12">
      <BackButton />
      <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-10">

        <div className="bg-white rounded-xl shadow-sm p-5 flex items-center justify-center">
          <img
            src={productDetails?.images?.[0]}
            alt="Product"
            className="max-h-95 object-contain"
          />
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            {productDetails?.title}
          </h1>

          <p className="text-sm text-gray-600 mt-2 leading-relaxed">
            {productDetails?.description}
          </p>

          <div className="flex items-center gap-3 mt-5">
            <span className="text-xl font-semibold text-pink-600">
              ₹{(productDetails?.price * 90.5).toFixed(2)}
            </span>
          </div>
          <div className="mt-3 space-y-1 text-xs text-gray-500">
            <p>
              Category:{" "}
              <span className="font-medium text-gray-800">{productDetails?.category.name}</span>
            </p>
          </div>


          <div className="flex gap-3 mt-6">
           <CartButton product={productDetails}/>
          </div>
        </div>
      </div>
    </div>
  );
}
