"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-gray-900 text-white py-16 contain-layout">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center hover:opacity-80 transition-all duration-300 mb-6">
              <div className="h-20 sm:h-24 flex items-center overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="TastyNest Logo"
                  width={240}
                  height={80}
                  className="h-48 sm:h-56 w-auto object-contain filter brightness-0 invert"
                  priority
                  sizes="(max-width: 640px) 160px, 240px"
                  style={{
                    width: 'auto !important',
                    height: 'auto !important',
                    maxWidth: '240px',
                    maxHeight: '224px'
                  }}
                  unoptimized={false}
                />
              </div>
            </Link>
            <p className="text-gray-300 leading-relaxed max-w-md">
              Professional recipe management platform. Discover, create, and share culinary excellence with our curated collection.
            </p>
          </div>
          <div className="contain-paint">
            <h4 className="text-lg font-semibold text-white mb-4 transform-gpu will-change-transform">Quick Links</h4>
            <div className="space-y-3">
              <a href="/" className="block text-gray-300 hover:text-white transition-colors will-change-transform">Home</a>
              <a href="/recipes" className="block text-gray-300 hover:text-white transition-colors will-change-transform">Recipes</a>
              <a href="/about" className="block text-gray-300 hover:text-white transition-colors will-change-transform">About</a>
              <a href="/contact" className="block text-gray-300 hover:text-white transition-colors will-change-transform">Contact</a>
            </div>
          </div>
          <div className="contain-paint">
            <h4 className="text-lg font-semibold text-white mb-4 transform-gpu will-change-transform">Stats</h4>
            <div className="space-y-3">
              <p className="text-gray-300">1000+ Recipes</p>
              <p className="text-gray-300">50+ Cuisines</p>
              <p className="text-gray-300">Global Community</p>
              <p className="text-gray-300">Since 2024</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 contain-paint">
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left space-y-4 md:space-y-0">
            <p className="text-gray-400">
              © {isClient ? currentYear : 2024} <span className="font-semibold text-white">TastyNest</span>. All Rights Reserved.
            </p>
            <p className="text-gray-400">
              Developed by{" "}
              <a
                href="https://shahzadali.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors font-medium will-change-transform"
              >
                Shahzad Ali
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
  