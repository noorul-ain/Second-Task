"use client";

import React from "react";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const locations = [
  {
    id: 1,
    title: "New Orleans, Louisiana",
    villas: 12,
    offices: 7,
    apartments: 10,
    image: "/city1.png",
    imageAlt: "New Orleans cityscape with tall buildings and trees",
  },
  {
    id: 2,
    title: "Jerrsy, United State",
    villas: 12,
    offices: 7,
    apartments: 10,
    image: "/city2.png",
    imageAlt: "Jersey coastal view with beach and buildings",
  },
  {
    id: 3,
    title: "Liverpool, London",
    villas: 12,
    offices: 7,
    apartments: 10,
    image: "/city3.png",
    imageAlt: "Liverpool waterfront with modern hotel building",
  },
  {
    id: 4,
    title: "NewYork, United States",
    villas: 12,
    offices: 7,
    apartments: 10,
    image: "/city4.png",
    imageAlt: "New York City skyline with river view",
  },
  {
    id: 5,
    title: "Montreal, Canada",
    villas: 12,
    offices: 7,
    apartments: 10,
    image: "/city5.png",
    imageAlt: "Montreal city park with modern buildings in background",
  },
  {
    id: 6,
    title: "California, USA",
    villas: 12,
    offices: 7,
    apartments: 10,
    image: "/city6.png",
    imageAlt: "California urban street with tall buildings",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

const ExploreLocations = () => {
  return (
    <div className={`${poppins.className} bg-white py-20 px-4`}>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Explore By Location
          </h2>
          <p className="text-[#8ea9d3] text-lg font-normal max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </motion.div>

        {/* Locations Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {locations.map((location, i) => (
            <motion.div
              key={location.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer h-64"
              custom={i}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
              {/* Background Image */}
              <img
                src={location.image}
                alt={location.imageAlt}
                className="absolute inset-0 w-full h-full object-cover z-0"
              />

              {/* Centered Overlay with Animation */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute top-6 left-1/2 -translate-x-1/2 w-[90%] h-[70%] bg-black/20 rounded-xl flex flex-col justify-center items-center z-20"
              >
                <h3 className="text-2xl font-bold mb-4 text-center text-white drop-shadow-lg">
                  {location.title}
                </h3>
                <div className="flex items-center justify-center space-x-8 text-lg text-white">
                  <div className="flex items-center space-x-1">
                    <span className="font-semibold">{location.villas}</span>
                    <span className="opacity-90">Villas</span>
                  </div>
                  <div className="w-px h-5 bg-white opacity-50" />
                  <div className="flex items-center space-x-1">
                    <span className="font-semibold">{location.offices}</span>
                    <span className="opacity-90">Offices</span>
                  </div>
                  <div className="w-px h-5 bg-white opacity-50" />
                  <div className="flex items-center space-x-1">
                    <span className="font-semibold">{location.apartments}</span>
                    <span className="opacity-90">Apartments</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ExploreLocations;
