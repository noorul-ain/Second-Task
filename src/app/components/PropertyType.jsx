import React from "react";
import { Home, Building2, Briefcase, Castle } from "lucide-react";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function FeaturedPropertyTypes() {
  const propertyTypes = [
    {
      id: 1,
      icon: Home,
      title: "Family House",
      count: "122 Property",
      color: "text-red-500",
      bgColor: "bg-red-50",
    },
    {
      id: 2,
      icon: Home,
      title: "House & Villa",
      count: "155 Property",
      color: "text-green-500",
      bgColor: "bg-green-50",
    },
    {
      id: 3,
      icon: Building2,
      title: "Apartment",
      count: "300 Property",
      color: "text-yellow-500",
      bgColor: "bg-yellow-50",
    },
    {
      id: 4,
      icon: Briefcase,
      title: "Office & Studio",
      count: "80 Property",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
    },
    {
      id: 5,
      icon: Castle,
      title: "Villa & Condo",
      count: "80 Property",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
  ];

  return (
    <div className={`${poppins.className} py-16 bg-gray-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h2 className="text-3xl md:text-4xl text-gray-800 mb-4 font-semibold">
            Featured Property Types
          </h2>
          <p className="text-[#8ea9d3] text-lg font-normal">
            Find All Type of Property.
          </p>
        </motion.div>

        {/* Property Types Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {propertyTypes.map((property, i) => {
            const IconComponent = property.icon;
            return (
              <motion.div
                key={property.id}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6 text-center cursor-pointer group"
                custom={i}
                variants={cardVariants}
                whileHover={{
                  scale: 1.06,
                  boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 ${property.bgColor} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300`}
                >
                  <IconComponent className={`w-8 h-8 ${property.color}`} />
                </div>

                {/* Title with Poppins 500 */}
                <h3 className="text-lg text-gray-800 mb-2 font-medium">
                  {property.title}
                </h3>

                {/* Count with Poppins 400 */}
                <p className="text-[#8ea9d3] text-sm font-normal">
                  {property.count}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
