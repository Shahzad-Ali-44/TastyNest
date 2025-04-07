import Link from "next/link";

export default function Navbar() {

    return (
        <nav className="bg-green-700 text-white px-6 py-4 shadow-md flex justify-between items-center">
            <h1 className="text-xl font-bold">👨‍🍳 TastyNest </h1>
            <div className="space-x-4">
                <Link href="/" className="hover:text-yellow-300 font-semibold">
                    Home
                </Link>
                <Link href="/recipes" className="hover:text-yellow-300 font-semibold">
                    Recipes
                </Link>
            </div>
        </nav>

    );


}