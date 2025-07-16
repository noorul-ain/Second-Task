"use client";
import React from "react";
import { motion } from "framer-motion";

export default function AboutStorySection() {
  return (
    <motion.section
      className="max-w-7xl mx-auto px-4 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.1 }}
    >
      {/* Left Content */}
      <motion.div
        className="pr-0 md:pr-8"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Our Agency Story
        </h2>
        <p className="text-gray-500 mb-4 md:mb-6">
          Check out our company story and work process
        </p>
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p className="text-gray-700 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip.
        </p>
        <button className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-medium px-8 py-3 rounded-full transition-colors duration-200">
          More About Us
        </button>
      </motion.div>
      {/* Right Image */}
      <motion.div
        className="w-full flex justify-center items-center"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <img
          src="/aboutu2.jpg"
          alt="Our Agency Story"
          className="rounded-2xl shadow-lg w-full max-w-lg object-cover"
        />
      </motion.div>
    </motion.section>
  );
}
