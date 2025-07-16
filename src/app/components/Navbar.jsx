"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      className="bg-white fixed top-0 left-0 w-full z-50 shadow-sm"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img src="/logo.png" alt="RentUP Logo" className="h-10 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation Menu - Centered */}
          <nav className="hidden lg:flex flex-1 justify-center items-center space-x-10">
            <Link
              href="/"
              className="text-gray-900 font-semibold hover:text-green-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-900 font-semibold hover:text-green-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-gray-900 font-semibold hover:text-green-600 transition-colors"
            >
              Services
            </Link>
            <Link
              href="/blog"
              className="text-gray-900 font-semibold hover:text-green-600 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/pricing"
              className="text-gray-900 font-semibold hover:text-green-600 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="text-gray-900 font-semibold hover:text-green-600 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-6 flex-shrink-0">
            {/* My List */}
            <button className="flex items-center space-x-2 text-gray-900 font-semibold hover:text-green-600 transition-colors focus:outline-none">
              <div className="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-base font-bold">2</span>
              </div>
              <span className="font-semibold text-lg">My List</span>
            </button>
            {/* Sign In Button */}
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors flex items-center space-x-2 text-lg focus:outline-none">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
              <span>Sign In</span>
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden flex items-center">
            <button
              className="text-gray-900 hover:text-green-600 focus:outline-none"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-white shadow-lg px-4 pt-4 pb-8 flex flex-col space-y-4"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/"
              className="text-gray-900 font-semibold hover:text-green-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-900 font-semibold hover:text-green-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-gray-900 font-semibold hover:text-green-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/blog"
              className="text-gray-900 font-semibold hover:text-green-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/pricing"
              className="text-gray-900 font-semibold hover:text-green-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="text-gray-900 font-semibold hover:text-green-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex flex-col space-y-3 pt-2">
              <button className="flex items-center space-x-2 text-gray-900 font-semibold hover:text-green-600 transition-colors focus:outline-none">
                <div className="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-base font-bold">2</span>
                </div>
                <span className="font-semibold text-lg">My List</span>
              </button>
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors flex items-center space-x-2 text-lg focus:outline-none">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
                <span>Sign In</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
