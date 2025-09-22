import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar/>
   
      <main>
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Discover Amazing
                  <span className="block text-gray-300">Recipes</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  From traditional family recipes to modern culinary masterpieces. Find your next favorite dish with our curated collection of delicious recipes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/recipes"
                    className="px-8 py-4 bg-white text-gray-900 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
                  >Browse Recipes
                  </Link>
                  <Link
                    href="/about"
                    className="px-8 py-4 border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      <div className="text-4xl mb-3">🍕</div>
                      <h3 className="text-lg font-bold">Italian</h3>
                      <p className="text-sm text-gray-300">Pasta & Pizza</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      <div className="text-4xl mb-3">🍜</div>
                      <h3 className="text-lg font-bold">Asian</h3>
                      <p className="text-sm text-gray-300">Noodles & Rice</p>
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      <div className="text-4xl mb-3">🥘</div>
                      <h3 className="text-lg font-bold">Indian</h3>
                      <p className="text-sm text-gray-300">Curries & Spices</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      <div className="text-4xl mb-3">🍰</div>
                      <h3 className="text-lg font-bold">Desserts</h3>
                      <p className="text-sm text-gray-300">Sweet Treats</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Popular Recipe Categories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our most loved recipe categories and discover new flavors from around the world.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-900 rounded-2xl p-8 text-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-5xl mb-4">🍕</div>
                <h3 className="text-2xl font-bold mb-4">Italian Cuisine</h3>
                <p className="text-gray-300 mb-6">Classic pasta, pizza, and risotto recipes from the heart of Italy.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold">50+ Recipes</span>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-2xl p-8 text-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-5xl mb-4">🍜</div>
                <h3 className="text-2xl font-bold mb-4">Asian Fusion</h3>
                <p className="text-gray-300 mb-6">Fresh noodles, rice dishes, and aromatic Asian flavors.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold">75+ Recipes</span>
                </div>
              </div>
              
              <div className="bg-gray-900 rounded-2xl p-8 text-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-5xl mb-4">🥗</div>
                <h3 className="text-2xl font-bold mb-4">Healthy & Fresh</h3>
                <p className="text-gray-300 mb-6">Nutritious salads, smoothies, and wholesome meals.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold">40+ Recipes</span>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-2xl p-8 text-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-5xl mb-4">🍰</div>
                <h3 className="text-2xl font-bold mb-4">Desserts & Sweets</h3>
                <p className="text-gray-300 mb-6">Indulgent cakes, cookies, and sweet treats for every occasion.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold">60+ Recipes</span>
                </div>
              </div>
              
              <div className="bg-gray-900 rounded-2xl p-8 text-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-5xl mb-4">🥘</div>
                <h3 className="text-2xl font-bold mb-4">Indian Spices</h3>
                <p className="text-gray-300 mb-6">Aromatic curries, biryanis, and traditional Indian dishes.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold">80+ Recipes</span>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-2xl p-8 text-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-5xl mb-4">🍳</div>
                <h3 className="text-2xl font-bold mb-4">Quick & Easy</h3>
                <p className="text-gray-300 mb-6">30-minute meals and simple recipes for busy weeknights.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold">100+ Recipes</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Cooks Love TastyNest
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join thousands of home cooks and professional chefs who trust us for their culinary journey.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">👨‍🍳</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Recipes</h3>
                <p className="text-gray-600 mb-6">Curated by professional chefs and tested by home cooks worldwide.</p>
                <div className="text-3xl font-bold text-orange-500">500+</div>
                <div className="text-sm text-gray-500">Expert Recipes</div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">⭐</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Highly Rated</h3>
                <p className="text-gray-600 mb-6">Every recipe is rated and reviewed by our community of food lovers.</p>
                <div className="text-3xl font-bold text-green-500">4.8/5</div>
                <div className="text-sm text-gray-500">Average Rating</div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">🌍</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Community</h3>
                <p className="text-gray-600 mb-6">Connect with food enthusiasts from every corner of the world.</p>
                <div className="text-3xl font-bold text-blue-500">50K+</div>
                <div className="text-sm text-gray-500">Happy Cooks</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Cook Something Amazing?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Join our community of food lovers and discover your next favorite recipe today!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/recipes"
                className="px-10 py-5 bg-white text-gray-900 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >Browse All Recipes
              </Link>
              <Link
                href="/about"
                className="px-10 py-5 border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
              >
                Learn About Us
              </Link>
            </div>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl mb-4">🍽️</div>
                <h3 className="text-xl font-bold mb-2">1000+ Recipes</h3>
                <p className="text-gray-300">From appetizers to desserts</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl mb-4">⏱️</div>
                <h3 className="text-xl font-bold mb-2">Quick & Easy</h3>
                <p className="text-gray-300">30-minute meals included</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-bold mb-2">Global Cuisines</h3>
                <p className="text-gray-300">Taste the world</p>
              </div>
            </div>
          </div>
        </section>
      </main>
  
      <Footer/>
    </div>
  );
}
