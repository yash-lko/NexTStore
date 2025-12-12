"use client";

import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {


  return (
    <div className="h-150 w-full flex items-center justify-center p-8">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-900">
          Create an Account ✨
        </h2>
        <p className="text-center text-gray-600 mt-1 mb-6">
          Register to get started
        </p>

        <form  className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full mt-1 px-4 py-2 border border-black rounded-md text-sm focus:ring-2 focus:ring-pink-500 focus:outline-none"
              placeholder="John Doe"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full mt-1 px-4 py-2 border border-black rounded-md text-sm focus:ring-2 focus:ring-pink-500 focus:outline-none"
              placeholder="you@example.com"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full mt-1 px-4 py-2 border border-black rounded-md text-sm focus:ring-2 focus:ring-pink-500 focus:outline-none"
              placeholder="••••••••"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded-md font-medium transition cursor-pointer"
          >
            Register
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-700 mt-5">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-pink-500 font-medium hover:underline"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
