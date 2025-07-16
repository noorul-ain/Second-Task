"use client";

import React, { useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";

// Import Poppins with weights 400 and 600
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function RealEstateSearch() {
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("Property Type");
  const [priceRange, setPriceRange] = useState("Price Range");

  const handleSearch = () => {
    console.log("Search:", { location, propertyType, priceRange });
  };

  return (
    <div
      className={`${poppins.className} min-h-screen relative overflow-hidden flex flex-col justify-center`}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url('/herobanner.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-2 sm:px-4 pt-24 w-full">
        {/* Header */}
        <motion.div
          className="text-center mb-8 sm:mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl text-white mb-4 sm:mb-6 tracking-wide font-semibold"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Search Your Next Home
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg text-slate-300 tracking-wide font-normal"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Find new & featured property located in your local city.
          </motion.p>
        </motion.div>

        {/* Search Form */}
        <motion.div
          className="bg-white rounded-lg shadow-xl p-2 sm:p-4 w-full max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-7xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <div className="flex flex-col md:flex-row gap-2 sm:gap-3 items-stretch md:items-end">
            {/* Location */}
            <div className="flex-1 min-w-[150px]">
              <div className="text-xs text-slate-500 mb-1 uppercase tracking-wide">
                City/Street
              </div>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location"
                className="w-full px-3 py-3 border-none focus:outline-none text-black placeholder-slate-400 text-sm font-normal rounded-md"
              />
            </div>

            <div className="hidden md:block h-12 w-px bg-slate-200"></div>

            {/* Property Type */}
            <div className="flex-1 min-w-[150px]">
              <div className="text-xs text-slate-500 mb-1 uppercase tracking-wide">
                Property Type
              </div>
              <div className="relative">
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full px-3 py-3 border-none focus:outline-none text-slate-800 appearance-none cursor-pointer text-sm font-normal rounded-md"
                >
                  <option value="Property Type">Property Type</option>
                  <option value="House">House</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Condo">Condo</option>
                  <option value="Townhouse">Townhouse</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none" />
              </div>
            </div>

            <div className="hidden md:block h-12 w-px bg-slate-200"></div>

            {/* Price Range */}
            <div className="flex-1 min-w-[150px]">
              <div className="text-xs text-slate-500 mb-1 uppercase tracking-wide">
                Price Range
              </div>
              <div className="relative">
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full px-3 py-3 border-none focus:outline-none text-slate-800 appearance-none cursor-pointer text-sm rounded-md"
                  style={{ fontFamily: "Arial, sans-serif", fontWeight: 400 }}
                >
                  <option value="Price Range">Price Range</option>
                  <option value="$500 - $1000">$500 - $1000</option>
                  <option value="$1000 - $2000">$1000 - $2000</option>
                  <option value="$2000 - $3000">$2000 - $3000</option>
                  <option value="$3000+">$3000+</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none" />
              </div>
            </div>

            <div className="hidden md:block h-12 w-px bg-slate-200"></div>

            {/* Advance Filter Button */}
            <div className="flex-shrink-0">
              <button
                className={`${poppins.className} px-4 py-3 text-black text-base font-medium transition-colors duration-200 whitespace-nowrap hover:text-slate-800 rounded-md w-full md:w-auto`}
              >
                Advance Filter
              </button>
            </div>

            {/* Search Button */}
            <button
              onClick={handleSearch}
              className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-md transition-all duration-200 hover:shadow-md flex items-center justify-center w-full md:w-auto mt-2 md:mt-0"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
