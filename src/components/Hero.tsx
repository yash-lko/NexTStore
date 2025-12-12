import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white">
            Discover Amazing
            <span className="text-blue-600 dark:text-blue-400"> Deals</span> Everyday
          </h1>

          <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg max-w-lg">
            Shop the latest products with unbeatable prices.  
            Clean UI. Smooth experience. Built with Next.js.
          </p>

          <div className="mt-8 flex justify-center md:justify-start gap-4">
            <Link
              href="/products"
              className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              Shop Now
            </Link>

            <Link
              href="/categories"
              className="px-6 py-3 border border-gray-800 dark:border-gray-200 rounded-lg text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800"
            >
              Browse Categories
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
