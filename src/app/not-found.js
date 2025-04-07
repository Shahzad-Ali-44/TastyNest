import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
    
      <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md mx-auto">
        <h1 className="text-4xl font-extrabold text-red-600 mb-4">
          Oops! Page Not Found.
        </h1>
        <p className="text-xl text-gray-700 mb-6">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <Link
          href="/"
          className="text-lg font-semibold text-green-600 hover:text-green-800 transition-all"
        >
          Go to Home
        </Link>
      </div>

      <footer className="absolute bottom-4 w-full text-center text-gray-500">
        <p>© 2025 TastyNest - All Rights Reserved</p>
      </footer>
    </div>
  );
}
