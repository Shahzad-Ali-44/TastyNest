import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Footer from "../footer";
import Navbar from "../navbar";
import Image from "next/image";
export default function RecipeList({ recipeList }) {
  return (
    <div className="flex flex-col min-h-screen">

      <Navbar />

      <main className="flex-grow bg-gray-50 px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="md:text-4xl text-2xl font-bold text-green-800 mb-10 text-center">
            🍳 Our Delicious Recipes
          </h2>

          {recipeList && recipeList.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {recipeList.map((recipe) => (
                <Link key={recipe.id} href={`/recipes/${recipe.id}`} prefetch={true}>
                  <Card className="hover:scale-105 transition-all cursor-pointer">
                    <CardContent className="p-0">
                      <div className="w-full h-56 overflow-hidden rounded-t-md">
                        <Image
                          src={recipe.image}
                          alt={recipe.name}
                          width={500}
                          height={300}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-gray-900">
                          {recipe.name}
                        </h3>
                        <div className="mt-2 flex items-center justify-between text-gray-600">
                          <p>⭐ {recipe.rating}</p>
                          <p className="font-semibold">{recipe.cuisine}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 text-lg">
              No recipes found!
            </p>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
