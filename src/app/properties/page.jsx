"use client";
import React, { useState } from 'react';
import { Home, Building, MapPin, Star, Heart, Filter, Search, Bed, Bath, Car, Wifi, Tv, AirVent, Coffee, Users, ArrowLeft, ArrowRight, Phone, Mail, Calendar, Eye } from 'lucide-react';

const PropertiesPage = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [likedProperties, setLikedProperties] = useState(new Set());

  const properties = [
    {
      id: 1,
      title: "Luxury Family House",
      type: "house",
      price: "Rs 45,000/month",
      location: "DHA Phase 5, Lahore",
      rating: 4.8,
      bedrooms: 4,
      bathrooms: 3,
      parking: 2,
      area: "2500 sq ft",
      images: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1600566752229-450a218da1e6?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=800&h=500&fit=crop"
      ],
      roomImages: [
        { room: "Living Room", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop" },
        { room: "Master Bedroom", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop" },
        { room: "Kitchen", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop" },
        { room: "Bathroom", image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=300&fit=crop" },
        { room: "Dining Room", image: "https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?w=400&h=300&fit=crop" },
        { room: "Guest Room", image: "https://images.unsplash.com/photo-1560448075-cbc16bb4af8e?w=400&h=300&fit=crop" },
        { room: "Home Office", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop" },
        { room: "Garden", image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop" },
        { room: "Balcony", image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop" }
      ],
      amenities: ["WiFi", "Air Conditioning", "Parking", "Garden", "Security"],
      description: "Beautiful 4-bedroom family house in a prime location with all modern amenities and spacious garden."
    },
    {
      id: 2,
      title: "Modern Apartment",
      type: "apartment",
      price: "Rs 25,000/month",
      location: "Gulberg III, Lahore",
      rating: 4.5,
      bedrooms: 2,
      bathrooms: 2,
      parking: 1,
      area: "1200 sq ft",
      images: [
        "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1560448204-444092153225?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1560448075-bb485b067938?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1560448075-cbc16bb4af8e?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=500&fit=crop"
      ],
      roomImages: [
        { room: "Living Room", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop" },
        { room: "Master Bedroom", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop" },
        { room: "Kitchen", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop" },
        { room: "Bathroom", image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=300&fit=crop" },
        { room: "Second Bedroom", image: "https://images.unsplash.com/photo-1560448075-bb485b067938?w=400&h=300&fit=crop" },
        { room: "Balcony", image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop" }
      ],
      amenities: ["WiFi", "Air Conditioning", "Gym", "Pool", "Elevator"],
      description: "Stylish 2-bedroom apartment with modern design and city views. Perfect for professionals."
    },
    {
      id: 3,
      title: "Luxury Villa",
      type: "villa",
      price: "Rs 80,000/month",
      location: "Cantt, Rawalpindi",
      rating: 4.9,
      bedrooms: 5,
      bathrooms: 4,
      parking: 3,
      area: "3500 sq ft",
      images: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1600607688960-e095ff83135b?w=800&h=500&fit=crop"
      ],
      roomImages: [
        { room: "Grand Living Room", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop" },
        { room: "Master Suite", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop" },
        { room: "Gourmet Kitchen", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop" },
        { room: "Luxury Bathroom", image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=300&fit=crop" },
        { room: "Home Office", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop" },
        { room: "Guest Room", image: "https://images.unsplash.com/photo-1560448075-cbc16bb4af8e?w=400&h=300&fit=crop" },
        { room: "Swimming Pool", image: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=400&h=300&fit=crop" },
        { room: "Garden", image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop" },
        { room: "Dining Room", image: "https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?w=400&h=300&fit=crop" },
        { room: "Gym", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop" },
        { room: "Wine Cellar", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=300&fit=crop" }
      ],
      amenities: ["WiFi", "Air Conditioning", "Pool", "Garden", "Security", "Gym"],
      description: "Stunning luxury villa with premium amenities and spacious rooms. Perfect for large families."
    },
    {
      id: 4,
      title: "Cozy Studio",
      type: "studio",
      price: "Rs 18,000/month",
      location: "Johar Town, Lahore",
      rating: 4.3,
      bedrooms: 1,
      bathrooms: 1,
      parking: 1,
      area: "600 sq ft",
      images: [
        "https://images.unsplash.com/photo-1560448204-444092153225?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1560448075-bb485b067938?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=500&fit=crop"
      ],
      roomImages: [
        { room: "Studio Space", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop" },
        { room: "Kitchenette", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop" },
        { room: "Bathroom", image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=300&fit=crop" },
        { room: "Work Area", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop" },
        { room: "Storage", image: "https://images.unsplash.com/photo-1560448075-bb485b067938?w=400&h=300&fit=crop" }
      ],
      amenities: ["WiFi", "Air Conditioning", "Furnished", "Utilities Included"],
      description: "Perfect studio apartment for young professionals and students. Fully furnished with modern amenities."
    },
    {
      id: 5,
      title: "Spacious Penthouse",
      type: "apartment",
      price: "Rs 120,000/month",
      location: "Clifton, Karachi",
      rating: 4.9,
      bedrooms: 3,
      bathrooms: 3,
      parking: 2,
      area: "2000 sq ft",
      images: [
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1600607688960-e095ff83135b?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=500&fit=crop"
      ],
      roomImages: [
        { room: "Living Room", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop" },
        { room: "Master Bedroom", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop" },
        { room: "Kitchen", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop" },
        { room: "Bathroom", image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=300&fit=crop" },
        { room: "Terrace", image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop" },
        { room: "Dining Room", image: "https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?w=400&h=300&fit=crop" },
        { room: "Second Bedroom", image: "https://images.unsplash.com/photo-1560448075-bb485b067938?w=400&h=300&fit=crop" },
        { room: "Third Bedroom", image: "https://images.unsplash.com/photo-1560448075-cbc16bb4af8e?w=400&h=300&fit=crop" }
      ],
      amenities: ["WiFi", "Air Conditioning", "Sea View", "Elevator", "Gym", "Pool"],
      description: "Luxurious penthouse with stunning sea views and premium amenities. Perfect for executives."
    },
    {
      id: 6,
      title: "Family Townhouse",
      type: "house",
      price: "Rs 35,000/month",
      location: "Bahria Town, Islamabad",
      rating: 4.6,
      bedrooms: 3,
      bathrooms: 2,
      parking: 2,
      area: "1800 sq ft",
      images: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&h=500&fit=crop"
      ],
      roomImages: [
        { room: "Living Room", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop" },
        { room: "Master Bedroom", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop" },
        { room: "Kitchen", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop" },
        { room: "Bathroom", image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=300&fit=crop" },
        { room: "Second Bedroom", image: "https://images.unsplash.com/photo-1560448075-bb485b067938?w=400&h=300&fit=crop" },
        { room: "Third Bedroom", image: "https://images.unsplash.com/photo-1560448075-cbc16bb4af8e?w=400&h=300&fit=crop" },
        { room: "Garden", image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop" }
      ],
      amenities: ["WiFi", "Air Conditioning", "Garden", "Security", "Playground"],
      description: "Comfortable family townhouse in a safe community with excellent amenities and green spaces."
    }
  ];

  const filteredProperties = properties.filter(property => {
    const matchesFilter = filter === 'all' || property.type === filter;
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const toggleLike = (propertyId) => {
    const newLiked = new Set(likedProperties);
    if (newLiked.has(propertyId)) {
      newLiked.delete(propertyId);
    } else {
      newLiked.add(propertyId);
    }
    setLikedProperties(newLiked);
  };

  const openPropertyModal = (property) => {
    setSelectedProperty(property);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProperty) {
      setCurrentImageIndex((prev) => 
        prev === selectedProperty.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProperty) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProperty.images.length - 1 : prev - 1
      );
    }
  };

  const PropertyCard = ({ property }) => (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
      <div className="relative">
        <img 
          src={property.images[0]} 
          alt={property.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 flex space-x-2">
          <button 
            onClick={() => toggleLike(property.id)}
            className={`p-2 rounded-full ${likedProperties.has(property.id) ? 'bg-red-500 text-white' : 'bg-white text-gray-600'} hover:scale-110 transition-transform`}
          >
            <Heart className="w-4 h-4" />
          </button>
          <button 
            onClick={() => openPropertyModal(property)}
            className="p-2 rounded-full bg-white text-gray-600 hover:bg-blue-500 hover:text-white transition-colors"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>
        <div className="absolute bottom-3 left-3 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
          {property.images.length} Photos
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900">{property.title}</h3>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">{property.rating}</span>
          </div>
        </div>
        
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>
        
        <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center">
            <Bed className="w-4 h-4 mr-1" />
            <span>{property.bedrooms}</span>
          </div>
          <div className="flex items-center">
            <Bath className="w-4 h-4 mr-1" />
            <span>{property.bathrooms}</span>
          </div>
          <div className="flex items-center">
            <Car className="w-4 h-4 mr-1" />
            <span>{property.parking}</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">{property.price}</div>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
            Contact
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Home className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">RentApp</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900 transition-colors">
                <Phone className="w-5 h-5" />
              </button>
              <button className="text-gray-600 hover:text-gray-900 transition-colors">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white border-b py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search properties..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex space-x-2">
              {['all', 'house', 'apartment', 'villa', 'studio'].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    filter === type
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Available Properties</h2>
          <p className="text-gray-600">{filteredProperties.length} properties found</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>

      {/* Property Detail Modal */}
      {selectedProperty && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={() => setSelectedProperty(null)}
                className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              
              {/* Image Carousel */}
              <div className="relative h-64 md:h-80">
                <img
                  src={selectedProperty.images[currentImageIndex]}
                  alt={selectedProperty.title}
                  className="w-full h-full object-cover"
                />
                
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 hover:bg-opacity-100 transition-all"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 hover:bg-opacity-100 transition-all"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
                
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {selectedProperty.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedProperty.title}</h3>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{selectedProperty.location}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-blue-600">{selectedProperty.price}</div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm text-gray-600">{selectedProperty.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-4 gap-4 mb-6">
                  <div className="text-center">
                    <Bed className="w-6 h-6 mx-auto mb-2 text-gray-600" />
                    <div className="text-sm text-gray-600">Bedrooms</div>
                    <div className="font-semibold">{selectedProperty.bedrooms}</div>
                  </div>
                  <div className="text-center">
                    <Bath className="w-6 h-6 mx-auto mb-2 text-gray-600" />
                    <div className="text-sm text-gray-600">Bathrooms</div>
                    <div className="font-semibold">{selectedProperty.bathrooms}</div>
                  </div>
                  <div className="text-center">
                    <Car className="w-6 h-6 mx-auto mb-2 text-gray-600" />
                    <div className="text-sm text-gray-600">Parking</div>
                    <div className="font-semibold">{selectedProperty.parking}</div>
                  </div>
                  <div className="text-center">
                    <Home className="w-6 h-6 mx-auto mb-2 text-gray-600" />
                    <div className="text-sm text-gray-600">Area</div>
                    <div className="font-semibold text-xs">{selectedProperty.area}</div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Room Gallery</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {selectedProperty.roomImages.map((room, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={room.image}
                          alt={room.room}
                          className="w-full h-24 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="text-white text-sm font-medium">{room.room}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Description</h4>
                  <p className="text-gray-600">{selectedProperty.description}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Amenities</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProperty.amenities.map((amenity, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                    <Phone className="w-5 h-5 inline mr-2" />
                    Call Now
                  </button>
                  <button className="flex-1 border-2 border-blue-500 text-blue-500 py-3 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-colors">
                    <Calendar className="w-5 h-5 inline mr-2" />
                    Schedule Visit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertiesPage;