"use client";

import React, { useState } from "react";

export default function RentUPFooter() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <div className="bg-gray-800 text-white">
      {/* Top Green Section */}
      <div className="bg-green-500 px-4 sm:px-6 py-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex-1">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
              Do You Have Questions ?
            </h2>
            <p className="text-green-100 text-sm sm:text-base">
              We'll help you to grow your career and growth.
            </p>
          </div>
          <button className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors w-full sm:w-auto">
            Contact Us Today
          </button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="px-4 sm:px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Newsletter Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">R</span>
                </div>
                <span className="text-xl font-bold">RentUP</span>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold mb-4">
                Do You Need Help With Anything?
              </h3>

              <p className="text-gray-400 mb-6 text-sm sm:text-base">
                Receive updates, hot deals, tutorials, discounts sent straight
                to your inbox every month.
              </p>

              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-2 w-full"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  required
                  className="flex-1 px-4 py-3 bg-white text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button
                  type="submit"
                  className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition-colors font-semibold w-full sm:w-auto"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Navigation Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">LAYOUTS</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Home Page
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Page
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Service Page
                  </a>
                </li>
                <li>
                  <a
                    href="/properties"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Property Page
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact Page
                  </a>
                </li>
                <li>
                  <a
                    href="/blog"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Single Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">ALL SECTIONS</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/headers"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Headers
                  </a>
                </li>
                <li>
                  <a
                    href="/features"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="/attractive"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Attractive
                  </a>
                </li>
                <li>
                  <a
                    href="/testimonials"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    href="/videos"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Videos
                  </a>
                </li>
                <li>
                  <a
                    href="/footers"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Footers
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400 text-xs sm:text-sm">
              © {new Date().getFullYear()} RentUP. Designed By GorkCoder.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
