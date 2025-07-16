import React from "react";
import { Heart, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const properties = [
  {
    id: 1,
    image: "/p-1.png",
    status: "For Rent",
    statusColor: "bg-yellow-100 text-yellow-600",
    title: "Red Carpet Real Estate",
    address: "210 Zirak Road, Canada",
    price: "$3,700",
    type: "Apartment",
    priceColor: "bg-green-500",
  },
  {
    id: 2,
    image: "/p-2.png",
    status: "For Sale",
    statusColor: "bg-green-100 text-green-600",
    title: "Fairmount Properties",
    address: "5698 Zirak Road, NewYork",
    price: "$9,750",
    type: "Condos",
    priceColor: "bg-green-500",
  },
  {
    id: 3,
    image: "/p-3.png",
    status: "For Rent",
    statusColor: "bg-yellow-100 text-yellow-600",
    title: "The Real Estate Corner",
    address: "5624 Mooker Market, USA",
    price: "$5,860",
    type: "Offices",
    priceColor: "bg-green-500",
  },
  {
    id: 4,
    image: "/p-4.png",
    status: "For Sale",
    statusColor: "bg-green-100 text-green-600",
    title: "Park Avenue",
    address: "9021 Zirak Road, Canada",
    price: "$7,200",
    type: "Apartment",
    priceColor: "bg-green-500",
  },
  {
    id: 5,
    image: "/p-5.png",
    status: "For Rent",
    statusColor: "bg-yellow-100 text-yellow-600",
    title: "Real Homes Realty",
    address: "1234 Market Street, USA",
    price: "$4,500",
    type: "Condos",
    priceColor: "bg-green-500",
  },
  {
    id: 6,
    image: "/p-6.png",
    status: "For Sale",
    statusColor: "bg-green-100 text-green-600",
    title: "Dreamland Properties",
    address: "7890 Dream Ave, Canada",
    price: "$8,100",
    type: "Offices",
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

export default function RecentProperty() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Recent Property Listed
          </h2>
          <p className="text-[#8ea9d3] text-lg font-normal max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </motion.div>
        {/* Property Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {properties.map((property, i) => (
            <motion.div
              key={property.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
              custom={i}
              variants={cardVariants}
              whileHover={{ y: -6, boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
              {/* Image */}
              <div className="relative w-full h-64 bg-gray-100">
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
    </section>
  );
}
