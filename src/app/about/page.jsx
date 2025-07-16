import React from "react";
import AboutStorySection from "./AboutStorySection";

export default function AboutPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-80 md:h-100 flex items-center overflow-hidden px-0 md:px-0">
        <img
          src="/aobutbanner.jpg"
          alt="About Us Hero"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-blue-950/65 z-10" />
        <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col justify-center h-full pl-8 md:pl-16">
          <p className="text-white text-lg mb-2">About Us</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 text-left">
            About Us – Who We Are?
          </h1>
        </div>
      </section>

      {/* Agency Story Section (Client Component) */}
      <AboutStorySection />
    </div>
  );
}
