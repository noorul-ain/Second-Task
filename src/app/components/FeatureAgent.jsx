import React from "react";
import {
  MapPin,
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  MessageCircle,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";

export default function FeatureAgents() {
  const agents = [
    {
      id: 1,
      name: "Sargam S. Singh",
      location: "Liverpool, Canada",
      listings: "30 Listings",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      verified: true,
    },
    {
      id: 2,
      name: "Harijeet M. Siller",
      location: "Montreal, Canada",
      listings: "70 Listings",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      verified: true,
    },
    {
      id: 3,
      name: "Anna K. Young",
      location: "Denver, USA",
      listings: "80 Listings",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      verified: true,
    },
    {
      id: 4,
      name: "John Doe",
      location: "New York, USA",
      listings: "55 Listings",
      image: "https://randomuser.me/api/portraits/men/12.jpg",
      verified: true,
    },
    {
      id: 5,
      name: "Jane Smith",
      location: "London, UK",
      listings: "60 Listings",
      image: "https://randomuser.me/api/portraits/women/22.jpg",
      verified: true,
    },
    {
      id: 6,
      name: "Carlos Mendez",
      location: "Madrid, Spain",
      listings: "40 Listings",
      image: "https://randomuser.me/api/portraits/men/55.jpg",
      verified: true,
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.2 + i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Featured Agents
          </h2>
          <p className="text-[#8ea9d3] text-lg max-w-3xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna
            <br />
            aliqua. Ut enim ad minim veniam.
          </p>
        </motion.div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {agents.map((agent, i) => (
            <motion.div
              key={agent.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 p-8 text-center relative flex flex-col items-center group min-w-[320px]"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
              {/* Listings Badge */}
              <div className="absolute top-6 left-6 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md">
                {agent.listings}
              </div>

              {/* Agent Photo */}
              <div className="relative mb-6 mt-8">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg relative">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Verification Badge */}
                  {agent.verified && (
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white shadow">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center justify-center text-gray-500 text-sm mb-3">
                <MapPin className="w-4 h-4 mr-1 text-gray-400" />
                {agent.location}
              </div>

              {/* Agent Name */}
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                {agent.name}
              </h3>

              {/* Social Media Icons */}
              <div className="flex justify-center space-x-4 mb-8">
                <button className="w-10 h-10 bg-gray-50 hover:bg-gray-100 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110">
                  <Facebook className="w-5 h-5 text-gray-600" />
                </button>
                <button className="w-10 h-10 bg-gray-50 hover:bg-gray-100 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110">
                  <Linkedin className="w-5 h-5 text-gray-600" />
                </button>
                <button className="w-10 h-10 bg-gray-50 hover:bg-gray-100 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110">
                  <Twitter className="w-5 h-5 text-gray-600" />
                </button>
                <button className="w-10 h-10 bg-gray-50 hover:bg-gray-100 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110">
                  <Instagram className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 w-full">
                <button className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center text-sm font-medium shadow-sm hover:shadow-md">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Message
                </button>
                <button className="flex-1 bg-gray-900 hover:bg-black text-white py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center text-sm font-medium shadow-sm hover:shadow-md">
                  <Phone className="w-4 h-4 mr-2" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
