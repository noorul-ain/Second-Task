"use client";

import React from "react";
import { Poppins } from "next/font/google";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function AnimatedNumber({ value, duration = 1.5 }) {
  const ref = useRef();
  const controls = useAnimation();
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) {
      controls.start({
        count: value,
        transition: { duration, ease: "easeOut" },
      });
    }
  }, [inView, value, duration, controls]);

  useEffect(() => {
    controls.set({ count: 0 });
    controls.start({ count: value, transition: { duration, ease: "easeOut" } });
  }, [value, duration, controls]);

  return (
    <motion.span
      ref={ref}
      initial={{ count: 0 }}
      animate={controls}
      onUpdate={(latest) => {
        setDisplay(Math.floor(latest.count));
      }}
      className="text-white text-4xl md:text-5xl font-bold"
    >
      {display} M
    </motion.span>
  );
}

const AwardsSection = () => {
  const awards = [
    {
      icon: "🏆",
      count: 32,
      title: "Blue Burmin Award",
    },
    {
      icon: "💼",
      count: 43,
      title: "Mimo XII Award",
    },
    {
      icon: "💡",
      count: 51,
      title: "Australian UGC Award",
    },
    {
      icon: "❤️",
      count: 42,
      title: "ITCA Green Award",
    },
  ];

  return (
    <div className={`${poppins.className} bg-[#122947] py-24 px-4`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-green-400 text-sm font-normal mb-2">Our Awards</p>
          <h2 className="text-white text-[30px] font-normal leading-normal">
            Over 1,24,000+ Happy User Being With Us Still They Love Our
            <br />
            Services
          </h2>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, index) => (
            <div key={index} className="text-center">
              {/* Icon Circle */}
              <div className="mb-6">
                <div className="bg-[#2A3F5A] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white text-2xl">{award.icon}</span>
                </div>
              </div>

              {/* Count */}
              <div className="mb-2">
                <AnimatedNumber value={award.count} />
              </div>

              {/* Award Title */}
              <p className="text-gray-300 text-sm md:text-base font-normal">
                {award.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AwardsSection;
