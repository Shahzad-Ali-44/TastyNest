"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <nav ref={menuRef} className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 h-20 sm:h-24">
                <div className="flex justify-between items-center h-full">
                    <Link href="/" className="flex items-center hover:opacity-80 transition-all duration-300">
                        <div className="h-16 sm:h-20 flex items-center">
                            <Image
                                src="/logo.png"
                                alt="TastyNest Logo"
                                width={180}
                                height={60}
                                className="h-36 sm:h-48 w-auto object-contain"
                                priority
                                sizes="(max-width: 640px) 120px, 180px"
                            />
                        </div>
                    </Link>
                    
                    <div className="hidden md:flex space-x-10">
                        <Link href="/" className="text-gray-700 hover:text-gray-900 font-semibold text-lg py-2 px-4 rounded-xl hover:bg-gray-100 transition-all duration-300 relative group">
                            Home
                            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gray-900 group-hover:w-8 transition-all duration-300 rounded-full"></span>
                        </Link>
                        <Link href="/recipes" className="text-gray-700 hover:text-gray-900 font-semibold text-lg py-2 px-4 rounded-xl hover:bg-gray-100 transition-all duration-300 relative group">
                            Recipes
                            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gray-900 group-hover:w-8 transition-all duration-300 rounded-full"></span>
                        </Link>
                        <Link href="/about" className="text-gray-700 hover:text-gray-900 font-semibold text-lg py-2 px-4 rounded-xl hover:bg-gray-100 transition-all duration-300 relative group">
                            About
                            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gray-900 group-hover:w-8 transition-all duration-300 rounded-full"></span>
                        </Link>
                        <Link href="/contact" className="text-gray-700 hover:text-gray-900 font-semibold text-lg py-2 px-4 rounded-xl hover:bg-gray-100 transition-all duration-300 relative group">
                            Contact
                            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gray-900 group-hover:w-8 transition-all duration-300 rounded-full"></span>
                        </Link>
                    </div>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-3 rounded-xl hover:bg-gray-100 transition-all duration-300"
                    >
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                <div className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-lg z-40 transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
                }`}>
                    <div className="px-6 py-4 space-y-2">
                        <Link 
                            href="/" 
                            className="block text-gray-700 hover:text-gray-900 font-semibold text-lg py-3 px-4 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link 
                            href="/recipes" 
                            className="block text-gray-700 hover:text-gray-900 font-semibold text-lg py-3 px-4 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Recipes
                        </Link>
                        <Link 
                            href="/about" 
                            className="block text-gray-700 hover:text-gray-900 font-semibold text-lg py-3 px-4 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </Link>
                        <Link 
                            href="/contact" 
                            className="block text-gray-700 hover:text-gray-900 font-semibold text-lg py-3 px-4 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}