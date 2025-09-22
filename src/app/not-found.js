import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-sm w-full">
        <h1 className="text-2xl md:text-3xl font-bold text-red-600 mb-4">
          Oops! Page Not Found.
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <Link
          href="/"
          className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-semibold"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}
