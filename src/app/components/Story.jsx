import React from 'react';

export default function AgencyStorySection() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Our Agency Story
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Check out our company story and work process
              </p>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <p className="text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              
              <p className="text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
              </p>
            </div>
            
            <div className="pt-4">
              <button className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-medium px-8 py-3 rounded-full transition-colors duration-200">
                More About Us
              </button>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3">
              <img 
                src="/images/family-laptop.jpg" 
                alt="Family working together with laptop in modern living room"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}