"use client";

import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Footer from "../footer";
import Navbar from "../navbar";
import Image from "next/image";
import { useState, useMemo, useRef, useEffect } from "react";

export default function RecipeList({ recipeList }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCuisine, setSelectedCuisine] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const cuisines = useMemo(() => {
    if (!recipeList) return [];
    return [...new Set(recipeList.map(recipe => recipe.cuisine))];
  }, [recipeList]);

  const filteredRecipes = useMemo(() => {
    if (!recipeList) return [];
    
    return recipeList.filter(recipe => {
      const matchesSearch = recipe.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCuisine = !selectedCuisine || recipe.cuisine === selectedCuisine;
      return matchesSearch && matchesCuisine;
    });
  }, [recipeList, searchTerm, selectedCuisine]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Recipe Collection
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional recipes from around the world
            </p>
          </div>

          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Search recipes..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  />
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                    🔍
                  </div>
                </div>
                <div className="relative group" ref={dropdownRef}>
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all min-w-[200px] bg-white cursor-pointer hover:border-gray-400 text-left flex items-center"
                  >
                    <span className="text-gray-700">{selectedCuisine || "All Cuisines"}</span>
                    <div className={`absolute right-3 top-1/2 transform -translate-y-1/2 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}>
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
                      <div className="py-2">
                        <button
                          onClick={() => {
                            setSelectedCuisine("");
                            setIsDropdownOpen(false);
                          }}
                          className={`w-full px-4 py-3 text-left hover:bg-gray-100 transition-colors ${
                            selectedCuisine === "" ? "bg-gray-100 text-gray-900 font-medium" : "text-gray-700"
                          }`}
                        >
                          All Cuisines
                        </button>
                        {cuisines.map((cuisine) => (
                          <button
                            key={cuisine}
                            onClick={() => {
                              setSelectedCuisine(cuisine);
                              setIsDropdownOpen(false);
                            }}
                            className={`w-full px-4 py-3 text-left hover:bg-gray-100 transition-colors ${
                              selectedCuisine === cuisine ? "bg-gray-100 text-gray-900 font-medium" : "text-gray-700"
                            }`}
                          >
                            {cuisine}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {filteredRecipes && filteredRecipes.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredRecipes.map((recipe) => (
                <Link key={recipe.id} href={`/recipes/${recipe.id}`} prefetch={true}>
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer overflow-hidden group h-full flex flex-col">
                    <div className="relative overflow-hidden">
                      <Image
                        src={recipe.image}
                        alt={recipe.name}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 flex items-center gap-1 text-sm font-semibold text-gray-700 shadow-sm">
                        <span className="text-yellow-500">⭐</span>
                        {recipe.rating}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-gray-700 transition-colors min-h-[3.5rem]">
                        {recipe.name}
                      </h3>
                      <div className="flex items-center justify-between text-sm text-gray-600 mt-auto">
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium">
                          {recipe.cuisine}
                        </span>
                        <span className="text-gray-500">
                          {recipe.prepTimeMinutes} min
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg mb-4">
                {searchTerm || selectedCuisine ? "No recipes match your filters" : "No recipes found!"}
              </p>
              {(searchTerm || selectedCuisine) && (
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCuisine("");
                  }}
                  className="text-green-600 hover:text-green-800 font-semibold"
                >
                  Clear Filters
                </button>
              )}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
