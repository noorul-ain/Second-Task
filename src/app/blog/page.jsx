"use client";
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Heart } from "lucide-react";

const blogProperties = [
  {
    id: 1,
    image: "/p-1.png",
    status: "For Rent",
    statusColor: "bg-yellow-100 text-yellow-600",
    title: "Red Carpet Real Estate",
    address: "210 Zirak Road, Canada",
    price: "$7,540",
    type: "Homes & Villas",
    priceColor: "bg-green-500",
  },
  {
    id: 2,
    image: "/p-2.png",
    status: "For Sale",
    statusColor: "bg-green-100 text-green-600",
    title: "Fairmount Properties",
    address: "5698 Zirak Road, NewYork",
    price: "$4,850",
    type: "Commercial",
    priceColor: "bg-green-500",
  },
  {
    id: 3,
    image: "/p-3.png",
    status: "For Rent",
    statusColor: "bg-yellow-100 text-yellow-600",
    title: "The Real Estate Corner",
    address: "5624 Mooker Market, USA",
    price: "$2,742",
    type: "Apartment",
    priceColor: "bg-green-500",
  },
  {
    id: 4,
    image: "/p-4.png",
    status: "For Sale",
    statusColor: "bg-green-100 text-green-600",
    title: "Herringbone Realty",
    address: "5621 Liverpool, London",
    price: "$7,540",
    type: "Homes & Villas",
    priceColor: "bg-green-500",
  },
  {
    id: 5,
    image: "/p-5.png",
    status: "For Rent",
    statusColor: "bg-yellow-100 text-yellow-600",
    title: "Brick Lane Realty",
    address: "210 Montreal Road, Canada",
    price: "$4,850",
    type: "Commercial",
    priceColor: "bg-green-500",
  },
  {
    id: 6,
    image: "/p-6.png",
    status: "For Sale",
    statusColor: "bg-green-100 text-green-600",
    title: "Banyon Tree Realty",
    address: "210 Zirak Road, Canada",
    price: "$2,742",
    type: "Apartment",
    priceColor: "bg-green-500",
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

export default function BlogPage() {
  return (
    <div className="bg-gray-50 min-h-screen  pb-12">
      {/* Hero Banner */}
      <section className="relative w-full h-64 md:h-100 flex items-center justify-center mb-12 overflow-hidden ">
        <img
          src="/blogBanner.jpg"
          alt="Blog Banner"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-black/65  z-10" />
        <motion.div
          className="relative z-20 text-left max-w-4xl px-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="block text-white text-lg md:text-xl font-medium mb-2 opacity-80">
            Blog
          </span>
          <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight mb-2">
            Blog Grid – Our Blogs
          </h1>
        </motion.div>
      </section>

      {/* Blog Property Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {blogProperties.map((property, i) => (
            <motion.div
              key={property.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
              custom={i}
              variants={cardVariants}
              whileHover={{ y: -6, boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
              {/* Image */}
              <div className="relative w-full h-56 md:h-64 bg-gray-100">
                <img
                  src={property.image}
                  alt={property.title}
                  className="object-cover w-full h-full"
                />
                {/* Heart Icon */}
                <button className="absolute top-4 right-4 bg-white rounded-full p-2 shadow hover:bg-gray-100 transition-colors">
                  <Heart className="w-5 h-5 text-gray-300" />
                </button>
                {/* Status Badge */}
                <span
                  className={`absolute top-4 left-4 px-3 py-1 rounded font-semibold text-xs ${property.statusColor}`}
                >
                  {property.status}
                </span>
              </div>
              {/* Card Content */}
              <div className="flex-1 flex flex-col justify-between p-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">
                    {property.title}
                  </h3>
                  <div className="flex items-center text-[#8ea9d3] text-sm mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    {property.address}
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t mt-4">
                  <span
                    className={`text-white text-lg font-bold px-5 py-2 rounded-full ${property.priceColor}`}
                  >
                    {property.price}
                  </span>
                  <span className="text-[#8ea9d3] text-sm font-medium">
                    /sqft
                  </span>
                  <span className="text-gray-800 text-base font-semibold">
                    {property.type}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
