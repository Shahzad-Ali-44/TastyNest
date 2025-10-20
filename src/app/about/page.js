import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="content-visibility-auto">
        <section className="py-20 bg-gray-900 text-white contain-layout">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight transform-gpu will-change-transform">
                About
                <span className="block text-gray-300">TastyNest</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Professional recipe management platform dedicated to culinary excellence. 
                Discover, create, and share amazing recipes with our global community of food lovers.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/20 rounded-2xl p-8 border border-white/30 text-center will-change-transform transform-gpu contain-paint">
                <div className="text-5xl mb-4">🍳</div>
                <h3 className="text-2xl font-bold mb-4">1000+ Recipes</h3>
                <p className="text-gray-300">Curated collection from professional chefs</p>
              </div>
              <div className="bg-white/20 rounded-2xl p-8 border border-white/30 text-center will-change-transform transform-gpu contain-paint">
                <div className="text-5xl mb-4">🌍</div>
                <h3 className="text-2xl font-bold mb-4">50+ Cuisines</h3>
                <p className="text-gray-300">Global flavors from every corner of the world</p>
              </div>
              <div className="bg-white/20 rounded-2xl p-8 border border-white/30 text-center will-change-transform transform-gpu contain-paint">
                <div className="text-5xl mb-4">⭐</div>
                <h3 className="text-2xl font-bold mb-4">4.8/5 Rating</h3>
                <p className="text-gray-300">Highly rated by our community</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white contain-layout">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 transform-gpu will-change-transform">
                Our Story
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Born from a passion for great food and the desire to make professional quality 
                recipes accessible to everyone, everywhere.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6 transform-gpu will-change-transform">Mission</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  TastyNest is dedicated to providing a professional platform for recipe discovery, 
                  creation, and sharing. We believe that great cooking starts with great recipes, 
                  and our platform makes it easy to find, organize, and share culinary excellence.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Whether you're a home cook looking for inspiration or a professional chef 
                  managing your recipe collection, TastyNest provides the tools and resources 
                  you need to succeed in the kitchen.
                </p>
              </div>
              <div className="bg-gray-100 rounded-2xl p-8 text-center will-change-transform transform-gpu contain-paint">
                <div className="text-6xl mb-4">🥗</div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Made with care</h4>
                <p className="text-gray-600">
                  Every recipe is thoughtfully reviewed so it’s easy to follow and a joy to cook.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50 contain-layout">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 transform-gpu will-change-transform">
                Why Choose TastyNest?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're committed to providing the best recipe experience with professional 
                quality, global diversity, and user-friendly features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Cooking made simple, joyful, and real</h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <span className="w-10 h-10 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-xl">✔</span>
                    <div>
                      <p className="text-lg font-semibold text-gray-900">Easy-to-follow recipes</p>
                      <p className="text-gray-600">Clear steps and ingredients you actually have at home.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-10 h-10 bg-yellow-100 text-yellow-700 rounded-full flex items-center justify-center text-xl">⏱</span>
                    <div>
                      <p className="text-lg font-semibold text-gray-900">Ideas for any day</p>
                      <p className="text-gray-600">Quick weeknight meals or slow Sunday favorites, your choice.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-10 h-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xl">🌍</span>
                    <div>
                      <p className="text-lg font-semibold text-gray-900">Tastes from everywhere</p>
                      <p className="text-gray-600">Discover comforting classics and new flavors to love.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl border border-gray-200 p-10 text-center shadow-sm will-change-transform transform-gpu contain-paint">
                <div className="mx-auto w-32 h-32 rounded-full bg-gray-100 flex items-center justify-center text-6xl mb-6">👩‍🍳</div>
                <p className="text-gray-700 text-lg max-w-md mx-auto">TastyNest is your friendly kitchen companion here to help you cook with confidence and have fun doing it.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-900 text-white contain-layout">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 transform-gpu will-change-transform">
                Our Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything we do is guided by our core values of quality, accessibility, 
                and community.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/20 rounded-2xl p-8 border border-white/30 will-change-transform transform-gpu contain-paint">
                <div className="text-4xl mb-4">🍽️</div>
                <h3 className="text-2xl font-bold mb-4">Quality First</h3>
                <p className="text-gray-300">
                  We maintain the highest standards in recipe curation and platform performance.
                </p>
              </div>
              
              <div className="bg-white/20 rounded-2xl p-8 border border-white/30 will-change-transform transform-gpu contain-paint">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-2xl font-bold mb-4">Community Driven</h3>
                <p className="text-gray-300">
                  Our platform is built by and for the global community of food lovers.
                </p>
              </div>
              
              <div className="bg-white/20 rounded-2xl p-8 border border-white/30 will-change-transform transform-gpu contain-paint">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-2xl font-bold mb-4">Innovation</h3>
                <p className="text-gray-300">
                  We continuously improve and innovate to provide the best user experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white contain-layout">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 transform-gpu will-change-transform">
              Ready to Start Cooking?
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Join our community of food lovers and discover your next favorite recipe today!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/recipes"
                className="px-10 py-5 bg-gray-900 text-white rounded-xl font-bold text-lg hover:bg-gray-800 transition-colors duration-200 transform hover:scale-105 shadow-lg will-change-transform"
              >
                Browse Recipes
              </Link>
              <Link
                href="/contact"
                className="px-10 py-5 border-2 border-gray-900 text-gray-900 rounded-xl font-bold text-lg hover:bg-gray-900 hover:text-white transition-colors duration-200 transform hover:scale-105 will-change-transform"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
