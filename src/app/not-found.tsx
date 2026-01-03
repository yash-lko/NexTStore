import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-white px-4">
      <h1 className="text-6xl font-bold text-pink-500">404</h1>
      <p className="mt-4 text-xl text-gray-700">
        Oops! Page not found
      </p>
      <p className="mt-2 text-gray-500">
        The page you are looking for doesn’t exist.
      </p>

      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-pink-500 text-white rounded-md hover:bg-pink-600"
      >
        Go Back Home
      </Link>
    </div>
  );
}
