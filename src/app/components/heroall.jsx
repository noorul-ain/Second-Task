import React from 'react';

export default function AboutUsHero() {
  return (
    <div className="relative h-96 md:h-[500px] bg-gray-100 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/path/to/your/image.jpg')`
        }}
      />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-green-500 rounded-full opacity-20"></div>
      <div className="absolute top-32 right-20 w-12 h-12 bg-blue-400 rounded-full opacity-30"></div>
      <div className="absolute bottom-40 left-20 w-20 h-20 bg-yellow-400 rounded-full opacity-25"></div>
      
      {/* Plant/Decorative Elements */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-green-600 to-transparent opacity-30"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-600 to-transparent opacity-20"></div>
      
      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-xl lg:max-w-2xl">
          {/* Breadcrumb */}
          <div className="mb-4 md:mb-8">
            <span className="text-white text-xs sm:text-sm font-medium tracking-wide opacity-90">
              About Us
            </span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-8 leading-tight">
            About Us - Who We Are?
          </h1>
          
          {/* Optional Description */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white opacity-90 leading-relaxed">
            Discover our story, values, and the passionate team behind our mission to create meaningful connections and exceptional experiences.
          </p>
        </div>
      </div>
      
      {/* Family Dining Scene */}
      <div className="absolute right-0 top-0 w-1/2 md:w-2/5 lg:w-1/2 h-full">
        <div className="relative w-full h-full bg-gradient-to-l from-blue-100 to-transparent opacity-40"></div>
        
        {/* Kitchen/Dining Room Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-blue-50 to-gray-100 opacity-30"></div>
        
        {/* Table */}
        <div className="absolute bottom-1/4 left-1/4 w-32 sm:w-40 md:w-48 h-16 sm:h-20 md:h-24 bg-yellow-100 rounded-lg shadow-lg opacity-80 transform rotate-12"></div>
        
        {/* Family Members */}
        {/* Adult 1 (Left) */}
        <div className="absolute bottom-1/3 left-1/3 transform -translate-x-1/2">
          <div className="w-8 sm:w-10 md:w-12 h-12 sm:h-14 md:h-16 bg-blue-300 rounded-t-full mb-2 opacity-70"></div>
          <div className="w-12 sm:w-14 md:w-16 h-8 sm:h-10 md:h-12 bg-blue-400 rounded-lg opacity-70"></div>
        </div>
        
        {/* Adult 2 (Center) */}
        <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2">
          <div className="w-8 sm:w-10 md:w-12 h-12 sm:h-14 md:h-16 bg-pink-300 rounded-t-full mb-2 opacity-70"></div>
          <div className="w-12 sm:w-14 md:w-16 h-8 sm:h-10 md:h-12 bg-pink-400 rounded-lg opacity-70"></div>
        </div>
        
        {/* Child (Right) */}
        <div className="absolute bottom-1/4 right-1/3 transform translate-x-1/2">
          <div className="w-6 sm:w-7 md:w-8 h-8 sm:h-10 md:h-12 bg-green-300 rounded-t-full mb-2 opacity-70"></div>
          <div className="w-8 sm:w-10 md:w-12 h-6 sm:h-7 md:h-8 bg-green-400 rounded-lg opacity-70"></div>
        </div>
        
        {/* Food/Plates on table */}
        <div className="absolute bottom-1/4 left-1/3 w-3 sm:w-4 h-3 sm:h-4 bg-red-300 rounded-full opacity-60"></div>
        <div className="absolute bottom-1/4 left-1/2 w-3 sm:w-4 h-3 sm:h-4 bg-orange-300 rounded-full opacity-60"></div>
        <div className="absolute bottom-1/4 right-1/3 w-2 sm:w-3 h-2 sm:h-3 bg-yellow-300 rounded-full opacity-60"></div>
        
        {/* Kitchen Elements */}
        <div className="absolute top-1/4 right-1/4 w-12 sm:w-14 md:w-16 h-24 sm:h-28 md:h-32 bg-gray-300 rounded-lg opacity-40"></div>
        <div className="absolute top-1/3 right-1/3 w-8 sm:w-10 md:w-12 h-6 sm:h-7 md:h-8 bg-white rounded opacity-50"></div>
        
        {/* Window/Light source */}
        <div className="absolute top-1/4 left-1/4 w-16 sm:w-18 md:w-20 h-18 sm:h-20 md:h-24 bg-yellow-100 rounded-lg opacity-50 shadow-inner"></div>
        
        {/* Decorative plants */}
        <div className="absolute top-1/2 left-1/6 w-6 sm:w-7 md:w-8 h-8 sm:h-10 md:h-12 bg-green-500 rounded-t-full opacity-40"></div>
        <div className="absolute bottom-1/6 right-1/6 w-4 sm:w-5 md:w-6 h-6 sm:h-7 md:h-8 bg-green-400 rounded-t-full opacity-40"></div>
      </div>
    </div>
  );
}