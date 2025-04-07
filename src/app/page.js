import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
     
      <Navbar/>
   
      <main className="flex-grow  bg-cover bg-center flex items-center justify-center text-center px-4 py-20">
        <div className="bg-white bg-opacity-80 p-8 rounded-xl shadow-lg max-w-xl">
          <h2 className="md:text-4xl text-3xl font-bold mb-4 text-green-800">
            Welcome to TastyNest👨‍🍳
          </h2>
          <p className="text-xl text-gray-700 mb-6">
            Discover delicious recipes from around the world. Start cooking today!
          </p>
          <Link
            href="/recipes"
            className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition"
          >
            🍝 Explore Recipes
          </Link>
        </div>
      </main>
  
      <Footer/>
    </div>
  );
}
