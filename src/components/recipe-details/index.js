import Link from "next/link";
import Navbar from "../navbar";
import Footer from "../footer";
import Image from "next/image";
import { ArrowLeft, Clock, Users, Star } from "lucide-react";

export default function RecipeDetailsItem({ getRecipeDetails }) {
  if (!getRecipeDetails) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow bg-white py-12 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Recipe Not Found</h2>
            <p className="text-gray-600 mb-6">The recipe you're looking for doesn't exist.</p>
            <Link href="/recipes" className="text-green-600 hover:text-green-800 font-semibold">
              Back to Recipes
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/recipes" className="mb-8 inline-block group">
            <span className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span className="font-medium">Back to Recipes</span>
            </span>
          </Link>

          <div className="mb-16">
                <div className="relative overflow-hidden rounded-2xl shadow-xl mb-8 sm:mb-12 group">
                  <Image
                    src={getRecipeDetails?.image}
                    alt={getRecipeDetails?.name}
                    width={1000}
                    height={500}
                    className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  <div className="absolute top-3 right-3 sm:top-6 sm:right-6 bg-white/95 backdrop-blur-sm rounded-full px-2 py-1 sm:px-4 sm:py-2 flex items-center gap-1 sm:gap-2 text-sm sm:text-lg font-bold text-gray-700 shadow-lg">
                    <Star className="w-3 h-3 sm:w-5 sm:h-5 text-yellow-500" />
                    {getRecipeDetails?.rating}
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 drop-shadow-lg">
                      {getRecipeDetails?.name}
                    </h2>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      <div className="flex items-center gap-1 sm:gap-2 bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-1 sm:px-4 sm:py-2 rounded-full font-medium text-xs sm:text-sm">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{getRecipeDetails?.prepTimeMinutes} min</span>
                      </div>
                      <div className="flex items-center gap-1 sm:gap-2 bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-1 sm:px-4 sm:py-2 rounded-full font-medium text-xs sm:text-sm">
                        <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{getRecipeDetails?.servings} servings</span>
                      </div>
                      <div className="flex items-center gap-1 sm:gap-2 bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-1 sm:px-4 sm:py-2 rounded-full font-medium text-xs sm:text-sm">
                        <span className="font-semibold">{getRecipeDetails?.cuisine}</span>
                      </div>
                    </div>
                  </div>
                </div>

            <div className="text-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 max-w-4xl mx-auto">
                <div className="bg-white p-4 sm:p-6 rounded-xl border border-gray-200 shadow-sm text-center">
                  <p className="text-xs sm:text-sm text-gray-600 mb-2 font-medium">Meal Type</p>
                  <p className="text-base sm:text-lg font-bold text-gray-900">{getRecipeDetails?.mealType?.[0]}</p>
                </div>
                <div className="bg-white p-4 sm:p-6 rounded-xl border border-gray-200 shadow-sm text-center">
                  <p className="text-xs sm:text-sm text-gray-600 mb-2 font-medium">Cuisine</p>
                  <p className="text-base sm:text-lg font-bold text-gray-900">{getRecipeDetails?.cuisine}</p>
                </div>
                <div className="bg-white p-4 sm:p-6 rounded-xl border border-gray-200 shadow-sm text-center sm:col-span-2 lg:col-span-1">
                  <p className="text-xs sm:text-sm text-gray-600 mb-2 font-medium">Difficulty</p>
                  <p className="text-base sm:text-lg font-bold text-gray-900">Easy</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
            <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <span className="text-xl sm:text-2xl">🥕</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Ingredients</h3>
              </div>
              <div className="space-y-3 sm:space-y-4">
                {getRecipeDetails?.ingredients?.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 sm:gap-4 bg-gray-50 p-3 sm:p-4 rounded-xl hover:bg-gray-100 transition-colors">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 font-medium text-base sm:text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {getRecipeDetails?.instructions && (
              <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-6 sm:mb-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <span className="text-xl sm:text-2xl">👨‍🍳</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Instructions</h3>
                </div>
                <div className="space-y-4 sm:space-y-6">
                  {getRecipeDetails.instructions.map((instruction, index) => (
                    <div key={index} className="flex gap-4 sm:gap-6 bg-gray-50 p-4 sm:p-6 rounded-xl hover:bg-gray-100 transition-colors">
                      <div className="bg-gray-900 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-sm sm:text-lg font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 leading-relaxed text-base sm:text-lg">{instruction}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
