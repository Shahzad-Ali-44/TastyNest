import Link from "next/link";
import Navbar from "../navbar";
import Footer from "../footer";
import Image from "next/image";

export default function RecipeDetailsItem({ getRecipeDetails }) {
  return (
    <div className="flex flex-col min-h-screen">

      <Navbar />


      <main className="flex-grow bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <Link href="/recipes" className="text-green-700 font-semibold hover:underline mb-6 inline-block">
            ← Back to Recipe List
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

            <div className="w-full">
              <Image
                src={getRecipeDetails?.image}
                alt={getRecipeDetails?.name}
                width={500}
                height={300}
                className="rounded-xl md:w-[400px] object-cover shadow-md"
              />
            </div>


            <div>
              <h2 className="text-4xl font-bold text-green-800 mb-4">
                {getRecipeDetails?.name}
              </h2>

              <p className="text-lg text-gray-700 mb-2">
                <span className="font-semibold">Meal Type:</span>{" "}
                {getRecipeDetails?.mealType?.[0]}
              </p>

              <p className="text-lg text-gray-700 mb-6">
                <span className="font-semibold">Cuisine:</span>{" "}
                {getRecipeDetails?.cuisine}
              </p>


              <div>
                <h3 className="text-2xl font-semibold text-green-700 mb-2">
                  🥕 Ingredients
                </h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  {getRecipeDetails?.ingredients.map((item, index) => (
                    <li key={index} className="text-base">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
