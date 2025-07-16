"use client";
import React from "react";
import PricingPackages from "../components/PricingPackeges";
import { motion } from "framer-motion";

export default function PricingPage() {
  return (
    <div className="bg-gray-50 min-h-screen  pb-12">
      {/* Hero Banner */}
      <section className="relative w-full h-64 md:h-100 flex items-center justify-start mb-12 overflow-hidden">
        <img
          src="/servicebanner.jpg"
          alt="Pricing Banner"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <motion.div
          className="relative z-20 text-left max-w-4xl px-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="block text-white text-lg md:text-xl font-medium mb-2 opacity-80">
            30 days money back guarantee
          </span>
          <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight mb-2">
            No Extra Fees. Friendly Support
          </h1>
        </motion.div>
      </section>
      {/* Pricing Packages */}
      <PricingPackages />
    </div>
  );
}
