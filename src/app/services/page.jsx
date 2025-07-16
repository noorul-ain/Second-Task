"use client";
import { motion } from "framer-motion";

const services = [
  {
    icon: (
      <svg
        className="w-10 h-10 text-red-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <path
          d="M8 16l4-4 4 4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Family House",
    count: "122 Property",
    bg: "bg-red-50",
  },
  {
    icon: (
      <svg
        className="w-10 h-10 text-green-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M8 16l4-4 4 4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "House & Villa",
    count: "155 Property",
    bg: "bg-green-50",
  },
  {
    icon: (
      <svg
        className="w-10 h-10 text-yellow-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M12 8v8M8 12h8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Apartment",
    count: "300 Property",
    bg: "bg-yellow-50",
  },
  {
    icon: (
      <svg
        className="w-10 h-10 text-purple-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M8 8h8v8H8z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Office & Studio",
    count: "80 Property",
    bg: "bg-purple-50",
  },
  {
    icon: (
      <svg
        className="w-10 h-10 text-blue-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M12 8v8M8 12h8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Villa & Condo",
    count: "80 Property",
    bg: "bg-blue-50",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

export default function ServicesPage() {
  return (
    <div className="bg-gray-50 ">
      {/* Hero Section */}
      <section className="relative h-96 md:h-[420px] flex items-center overflow-hidden px-0 md:px-0">
        <img
          src="/servicebanner.jpg"
          alt="Services Hero"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/65 z-10" />
        <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col justify-center h-full pl-8 md:pl-16">
          <p className="text-white text-lg mb-2">Services</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 text-left">
            Services – All Services
          </h1>
        </div>
      </section>

      {/* Services Cards Section */}
      <section className="max-w-7xl mx-auto px-4 py-8 md:py-10">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-8 flex flex-col items-center text-center"
              custom={i}
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.04,
                boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
              <div
                className={`w-16 h-16 ${service.bg} rounded-full flex items-center justify-center mb-6`}
              >
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm">{service.count}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
