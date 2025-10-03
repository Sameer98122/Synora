'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence, LazyMotion, domAnimation } from 'framer-motion';
import { Heart, Star, ShoppingCart, Search, ChevronDown, Sparkles, Filter } from 'lucide-react';
import Navbar from '../../../components/layout/navbar';
import Footer from '@/components/footer/footer';

export default function ElectronicsStore() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [wishlist, setWishlist] = useState(new Set());
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('all');

  const products = [
    { 
      id: 1, 
      name: 'Premium Wireless Headphones', 
      price: 4999, 
      originalPrice: 6999, 
      rating: 4.8, 
      reviews: 324,
      badge: 'Best Seller',
      badgeColor: 'bg-green-500',
      category: 'audio',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=500&fit=crop' 
    },
    { 
      id: 2, 
      name: 'Smart Watch Pro', 
      price: 2499, 
      originalPrice: 3499, 
      rating: 4.6, 
      reviews: 156,
      badge: 'New',
      badgeColor: 'bg-blue-600',
      category: 'wearables',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=500&fit=crop' 
    },
    { 
      id: 3, 
      name: 'Wireless Gaming Mouse', 
      price: 1899, 
      originalPrice: 2499, 
      rating: 4.7, 
      reviews: 89,
      badge: 'Sale',
      badgeColor: 'bg-red-500',
      category: 'accessories',
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=500&fit=crop' 
    },
    { 
      id: 4, 
      name: 'Portable Bluetooth Speaker', 
      price: 3299, 
      originalPrice: 4199, 
      rating: 4.9, 
      reviews: 203,
      badge: 'Trending',
      badgeColor: 'bg-purple-600',
      category: 'audio',
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=500&fit=crop' 
    },
    { 
      id: 5, 
      name: 'Mechanical Keyboard RGB', 
      price: 5499, 
      originalPrice: 6999, 
      rating: 4.5, 
      reviews: 412,
      badge: 'Best Seller',
      badgeColor: 'bg-green-500',
      category: 'accessories',
      image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=400&h=500&fit=crop' 
    },
    { 
      id: 6, 
      name: 'Wireless Earbuds Pro', 
      price: 2799, 
      originalPrice: 3499, 
      rating: 4.6, 
      reviews: 278,
      badge: 'New',
      badgeColor: 'bg-blue-600',
      category: 'audio',
      image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=500&fit=crop' 
    },
    { 
      id: 7, 
      name: '4K Action Camera', 
      price: 8999, 
      originalPrice: 11999, 
      rating: 4.8, 
      reviews: 156,
      badge: 'Sale',
      badgeColor: 'bg-red-500',
      category: 'cameras',
      image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=500&fit=crop' 
    },
    { 
      id: 8, 
      name: 'USB-C Fast Charger 65W', 
      price: 1299, 
      originalPrice: 1799, 
      rating: 4.7, 
      reviews: 342,
      badge: 'Trending',
      badgeColor: 'bg-purple-600',
      category: 'accessories',
      image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400&h=500&fit=crop' 
    }
  ];

  const filterOptions = [
    { value: 'all', label: 'All Items' },
    { value: 'audio', label: 'Audio' },
    { value: 'wearables', label: 'Wearables' },
    { value: 'accessories', label: 'Accessories' },
    { value: 'cameras', label: 'Cameras' }
  ];

  // Filter and Sort
  const filteredProducts = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(term);
      const matchesFilter = selectedFilter === 'all' || product.category === selectedFilter;
      return matchesSearch && matchesFilter;
    });
    
    switch (sortBy) {
      case 'price-low':  filtered.sort((a, b) => a.price - b.price); break;
      case 'price-high': filtered.sort((a, b) => b.price - a.price); break;
      case 'rating':     filtered.sort((a, b) => b.rating - a.rating); break;
      case 'newest':     filtered.sort((a, b) => b.id - a.id); break;
      default: break;
    }
    return filtered;
  }, [searchTerm, sortBy, selectedFilter]);

  // Wishlist handler
  const toggleWishlist = (id) => {
    setWishlist(prev => {
      const newSet = new Set(prev);
      newSet.has(id) ? newSet.delete(id) : newSet.add(id);
      return newSet;
    });
  };

  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.06 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
    exit: { opacity: 0, scale: 0.98, transition: { duration: 0.25 } }
  };

  return (
    <>
      <Navbar />
      <LazyMotion features={domAnimation}>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 mt-10 relative overflow-hidden">
          {/* Background Blurs */}
          <div className="pointer-events-none opacity-6 absolute inset-0 -z-10">
            <div className="absolute top-24 left-6 w-48 h-48 md:w-64 md:h-64 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-24 right-6 w-56 h-56 md:w-80 md:h-80 bg-slate-600 rounded-full blur-3xl opacity-12"></div>
          </div>

          {/* Header Section */}
          <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative">
            <motion.div 
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <div className="text-center">
                <motion.div 
                  className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-5"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.15, type: 'spring' }}
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Elevate Your Tech!
                </motion.div>

                <motion.h1 
                  className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.5 }}
                >
                  Electronics
                  <span className="block text-blue-400 mt-2">SYNORA</span>
                </motion.h1>

                <motion.p 
                  className="text-sm sm:text-base md:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.35, duration: 0.45 }}
                >
                  Discover the latest gadgets, tech essentials & great deals for every lifestyle.
                </motion.p>
              </div>
            </motion.div>
          </div>

          {/* Search and Filter Section */}
          <div className="bg-white shadow-sm sticky top-16 z-50 border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                {/* Search Bar */}
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    placeholder="Search electronics & gadgets..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition"
                  />
                </div>

                {/* Filter & Sort */}
                <div className="flex gap-2 sm:gap-3">
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className={`flex items-center gap-2 px-4 py-2.5 border rounded-lg font-medium transition-all text-sm ${
                      showFilters 
                        ? 'bg-blue-50 border-blue-500 text-blue-600' 
                        : 'border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <Filter size={18} />
                    <span className="hidden sm:inline">Filter</span>
                  </button>

                  <div className="relative flex-1 sm:w-48">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2.5 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer w-full text-sm"
                    >
                      <option value="featured">Featured</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="rating">Top Rated</option>
                      <option value="newest">Newest</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                  </div>
                </div>
              </div>

              {/* Category Pills */}
              {showFilters && (
                <div className="mt-4 pb-2">
                  <div className="flex flex-wrap gap-2">
                    {filterOptions.map(option => (
                      <button
                        key={option.value}
                        onClick={() => setSelectedFilter(option.value)}
                        className={`px-4 py-2 rounded-full border font-medium transition-all text-sm ${
                          selectedFilter === option.value
                            ? 'bg-blue-600 text-white border-blue-600'
                            : 'border-gray-300 hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Products Grid */}
          <motion.div 
            className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Products Header */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">All Products</h3>
              <p className="text-sm sm:text-base text-gray-600 mt-1 sm:mt-2">
                Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'item' : 'items'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              <AnimatePresence mode="popLayout">
                {filteredProducts.map(product => (
                  <motion.div
                    key={product.id}
                    layout
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    whileHover={{ y: -6 }}
                    className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 group"
                  >

                    {/* Product Image */}
                    <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden h-[240px] sm:h-[300px] md:h-[340px] lg:h-[360px]">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />

                      {/* Badge */}
                      <span className={`absolute top-3 left-3 ${product.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow-md`}>{product.badge}</span>

                      {/* Wishlist Button */}
                      <motion.button
                        onClick={() => toggleWishlist(product.id)}
                        className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-all duration-200"
                        whileTap={{ scale: 0.92 }}
                        aria-label={wishlist.has(product.id) ? 'Remove from wishlist' : 'Add to wishlist'}
                      >
                        <Heart 
                          className={`w-5 h-5 ${wishlist.has(product.id) ? 'fill-red-500 text-red-500' : 'text-slate-600'}`}
                        />
                      </motion.button>

                      {/* Quick View Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <motion.div
                          className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 pointer-events-auto"
                          whileHover={{ scale: 1.02 }}
                        >
                          <button className="bg-white text-slate-900 px-4 py-2 rounded-lg font-medium flex items-center space-x-2 shadow-lg">
                            <Star className="w-4 h-4" />
                            <span>Quick View</span>
                          </button>
                        </motion.div>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-4 sm:p-5">
                      <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors cursor-pointer">{product.name}</h3>

                      {/* Rating */}
                      <div className="flex items-center mb-3">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300'}`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-slate-500 ml-2">{product.reviews} reviews</span>
                      </div>

                      {/* Price */}
                      <div className="flex items-baseline mb-4">
                        <span className="text-lg sm:text-xl font-bold text-slate-900">₹{product.price.toLocaleString()}</span>
                        {product.originalPrice && (
                          <span className="text-sm sm:text-base text-slate-500 line-through ml-2">₹{product.originalPrice.toLocaleString()}</span>
                        )}
                      </div>

                      {/* Add to Cart Button */}
                      <motion.button
                        className="w-full bg-blue-600 text-white rounded-lg px-4 py-2 font-semibold flex items-center justify-center gap-2 shadow-md hover:bg-blue-700 transition-all duration-200"
                        whileTap={{ scale: 0.95 }}
                      >
                        <ShoppingCart className="w-5 h-5" />
                        Add to Cart
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </LazyMotion>
      <Footer/>
    </>
  );
}