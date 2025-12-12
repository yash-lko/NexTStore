import Link from "next/link";
import { Facebook, Instagram, Twitter, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-white">NexShop</h2>
          <p className="mt-3 text-sm text-gray-400">
            Your modern eCommerce learning project built with Next.js & Tailwind.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-4">
            <Link href="#" className="hover:text-white">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="hover:text-white">
              <Instagram size={20} />
            </Link>
            <Link href="#" className="hover:text-white">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="hover:text-white">
              <Github size={20} />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white">Home</Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-white">Products</Link>
            </li>
            <li>
              <Link href="/categories" className="hover:text-white">Categories</Link>
            </li>
            <li>
              <Link href="/cart" className="hover:text-white">Cart</Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/contact" className="hover:text-white">Contact Us</Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-white">FAQ</Link>
            </li>
            <li>
              <Link href="/returns" className="hover:text-white">Returns</Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Newsletter</h3>
          <p className="text-sm text-gray-400">
            Subscribe to our newsletter for updates.
          </p>

          <div className="mt-4 flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-lg bg-gray-800 text-sm text-gray-200 placeholder-gray-400 focus:outline-none"
            />
            <button className="px-4 py-2 bg-pink-500 text-white rounded-lg text-sm font-semibold">
              Join
            </button>
          </div>
        </div>

      </div>

      <hr className="border-gray-700 my-6" />

      <p className="text-center text-sm text-gray-500">
        © {new Date().getFullYear()} NexTShop. All rights reserved.
      </p>
    </footer>
  );
}
