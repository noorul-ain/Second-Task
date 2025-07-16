"use client";
import React from 'react';

const PricingPackages = () => {
  const packages = [
    {
      id: 'basic',
      name: 'Basic',
      price: 29,
      billing: 'per user, per month',
      features: [
        { name: '99.5% Uptime Guarantee', included: true },
        { name: '120GB CDN Bandwidth', included: true },
        { name: '5GB Cloud Storage', included: true },
        { name: 'Personal Help Support', included: false },
        { name: 'Enterprise SLA', included: false }
      ],
      buttonText: 'Start Basic',
      buttonStyle: 'border border-green-500 text-green-600 hover:bg-green-50',
      isPopular: false
    },
    {
      id: 'standard',
      name: 'Standard',
      price: 49,
      billing: 'per user, per month',
      features: [
        { name: '99.5% Uptime Guarantee', included: true },
        { name: '150GB CDN Bandwidth', included: true },
        { name: '10GB Cloud Storage', included: true },
        { name: 'Personal Help Support', included: true },
        { name: 'Enterprise SLA', included: false }
      ],
      buttonText: 'Start Standard',
      buttonStyle: 'bg-green-600 text-white hover:bg-green-700',
      isPopular: true
    },
    {
      id: 'platinum',
      name: 'Platinum',
      price: 79,
      billing: '2 user, per month',
      features: [
        { name: '100% Uptime Guarantee', included: true },
        { name: '200GB CDN Bandwidth', included: true },
        { name: '20GB Cloud Storage', included: true },
        { name: 'Personal Help Support', included: true },
        { name: 'Enterprise SLA', included: true }
      ],
      buttonText: 'Start Platinum',
      buttonStyle: 'border border-green-500 text-green-600 hover:bg-green-50',
      isPopular: false
    }
  ];

  const CheckIcon = () => (
    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );

  const XIcon = () => (
    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  );

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Select Your Package
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque 
            corrupti quos dolores
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 ${
                pkg.isPopular ? 'border-2 border-orange-500 transform scale-105' : 'border border-gray-200'
              }`}
            >
              {/* Popular Badge */}
              {pkg.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Best Value
                  </span>
                </div>
              )}

              {/* Package Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {pkg.name}
                </h3>
                <div className="mb-2">
                  <span className="text-5xl font-bold text-gray-900">
                    ${pkg.price}
                  </span>
                </div>
                <p className="text-blue-600 font-medium">
                  {pkg.billing}
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {pkg.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      {feature.included ? <CheckIcon /> : <XIcon />}
                    </div>
                    <span className={`text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${pkg.buttonStyle}`}
              >
                {pkg.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA or Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need a custom solution? We've got you covered.
          </p>
          <button className="text-blue-600 hover:text-blue-700 font-semibold underline">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingPackages;