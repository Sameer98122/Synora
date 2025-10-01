'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, LazyMotion, domAnimation } from 'framer-motion';
import { 
  Heart, 
  Star, 
  ShoppingCart,
  Eye,
  Search,
  ChevronDown,
  Sparkles
} from 'lucide-react';

export default function HomeDecorPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [wishlist, setWishlist] = useState(new Set());

  const products = [
    {
      id: 1,
      name: 'Modern Geometric Wall Art',
      price: 1899,
      originalPrice: 2799,
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=500&h=500&fit=crop',
      rating: 4.8,
      reviews: 234,
      badge: 'Best Seller',
      badgeColor: 'bg-green-500',
      category: 'wall-art'
    },
    {
      id: 2,
      name: 'Elegant Crystal Table Lamp',
      price: 3499,
      originalPrice: 4999,
      image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&h=500&fit=crop',
      rating: 4.9,
      reviews: 189,
      badge: 'Premium',
      badgeColor: 'bg-purple-500',
      category: 'lighting'
    },
    {
      id: 3,
      name: 'Boho Macrame Wall Hanging',
      price: 1299,
      originalPrice: 1899,
      image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=500&h=500&fit=crop',
      rating: 4.7,
      reviews: 156,
      badge: 'Trending',
      badgeColor: 'bg-pink-500',
      category: 'wall-art'
    },
    {
      id: 4,
      name: 'Ceramic Vase Collection Set',
      price: 2199,
      originalPrice: 3299,
      image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=500&h=500&fit=crop',
      rating: 4.6,
      reviews: 203,
      badge: 'New',
      badgeColor: 'bg-blue-500',
      category: 'vases'
    },
    {
      id: 5,
      name: 'Vintage Brass Candle Holders',
      price: 1599,
      originalPrice: 2299,
      image: 'https://images.unsplash.com/photo-1602874801006-0f9fb5f7d36f?w=500&h=500&fit=crop',
      rating: 4.8,
      reviews: 178,
      badge: 'Sale',
      badgeColor: 'bg-red-500',
      category: 'candles'
    },
    {
      id: 6,
      name: 'Minimalist Floor Standing Mirror',
      price: 4999,
      originalPrice: 6999,
      image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=500&h=500&fit=crop',
      rating: 4.9,
      reviews: 267,
      badge: 'Hot',
      badgeColor: 'bg-orange-500',
      category: 'mirrors'
    },
    {
      id: 7,
      name: 'Handwoven Jute Area Rug',
      price: 3899,
      originalPrice: 5499,
      image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=500&h=500&fit=crop',
      rating: 4.7,
      reviews: 145,
      badge: 'Eco-Friendly',
      badgeColor: 'bg-green-600',
      category: 'rugs'
    },
    {
      id: 8,
      name: 'Decorative Throw Pillow Set',
      price: 1899,
      originalPrice: 2699,
      image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500&h=500&fit=crop',
      rating: 4.5,
      reviews: 312,
      badge: 'Best Value',
      badgeColor: 'bg-yellow-500',
      category: 'cushions'
    },
    {
      id: 9,
      name: 'Floating Wooden Wall Shelves',
      price: 2499,
      originalPrice: 3499,
      image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=500&h=500&fit=crop',
      rating: 4.8,
      reviews: 198,
      badge: 'Popular',
      badgeColor: 'bg-indigo-500',
      category: 'shelves'
    },
    {
      id: 10,
      name: 'Moroccan Style Pendant Light',
      price: 4299,
      originalPrice: 5999,
      image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=500&h=500&fit=crop',
      rating: 4.9,
      reviews: 223,
      badge: 'Luxury',
      badgeColor: 'bg-purple-600',
      category: 'lighting'
    },
    {
      id: 11,
      name: 'Abstract Canvas Painting',
      price: 3299,
      originalPrice: 4799,
      image: 'https://images.unsplash.com/photo-1549887534-1541e9326642?w=500&h=500&fit=crop',
      rating: 4.7,
      reviews: 167,
      badge: 'Artistic',
      badgeColor: 'bg-pink-600',
      category: 'wall-art'
    },
    {
      id: 12,
      name: 'Terrazzo Plant Pot Trio',
      price: 1699,
      originalPrice: 2399,
      image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&h=500&fit=crop',
      rating: 4.6,
      reviews: 289,
      badge: 'Trending',
      badgeColor: 'bg-teal-500',
      category: 'planters'
    }
  ];

  const filterOptions = [
    { value: 'all', label: 'All Items' },
    { value: 'wall-art', label: 'Wall Art' },
    { value: 'lighting', label: 'Lighting' },
    { value: 'vases', label: 'Vases' },
    { value: 'mirrors', label: 'Mirrors' },
    { value: 'rugs', label: 'Rugs' },
    { value: 'cushions', label: 'Cushions' }
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || product.category === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const toggleWishlist = (productId) => {
    const newWishlist = new Set(wishlist);
    if (newWishlist.has(productId)) {
      newWishlist.delete(productId);
    } else {
      newWishlist.add(productId);
    }
    setWishlist(newWishlist);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <>
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 mt-10 relative overflow-hidden">
        
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-slate-600 rounded-full blur-3xl"></div>
        </div>

        {/* Header Section */}
        <motion.div 
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center">
            <motion.div 
              className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Transform Your Space
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Home Décor
              <span className="block text-blue-600 mt-2">Collection</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Discover unique pieces that bring personality and warmth to every corner of your home
            </motion.p>
          </div>
        </motion.div>

        {/* Navbar BELOW header */}
        <nav className="bg-white/80 backdrop-blur-md border-y border-slate-200 sticky top-0 z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between gap-4">
              
              {/* Search Bar */}
              <div className="relative flex-1 max-w-xl">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search home decor..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                />
              </div>

              {/* Filter Dropdown */}
              <div className="relative">
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="appearance-none bg-white border border-slate-200 rounded-xl px-4 py-2.5 pr-10 text-slate-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none min-w-[150px]"
                >
                  {filterOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </nav>

        {/* Products Grid */}
        <motion.div 
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="wait">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 group flex flex-col h-full"
                >
                  {/* Product Image */}
                  <div className="relative aspect-square overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Badge */}
                    <div className={`absolute top-3 left-3 ${product.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow-md`}>
                      {product.badge}
                    </div>

                    {/* Wishlist Button */}
                    <motion.button
                      onClick={() => toggleWishlist(product.id)}
                      className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-all duration-200"
                      whileTap={{ scale: 0.9 }}
                    >
                      <Heart 
                        className={`w-5 h-5 ${wishlist.has(product.id) ? 'fill-red-500 text-red-500' : 'text-slate-600'}`}
                      />
                    </motion.button>

                    {/* Quick View Overlay */}
                    <motion.div 
                      className="absolute inset-0 bg-black/0 group-hover:bg-black/20 flex items-center justify-center transition-all duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <motion.button
                        className="bg-white text-slate-900 px-4 py-2 rounded-lg font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center space-x-2 shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Eye className="w-4 h-4" />
                        <span>Quick View</span>
                      </motion.button>
                    </motion.div>
                  </div>

                  {/* Product Info */}
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold text-slate-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors cursor-pointer min-h-[3.5rem]">
                      {product.name}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? 'text-yellow-400 fill-yellow-400'
                                : 'text-slate-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-slate-600">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-slate-900">
                          ₹{product.price.toLocaleString()}
                        </span>
                        <span className="text-sm text-slate-500 line-through">
                          ₹{product.originalPrice.toLocaleString()}
                        </span>
                      </div>
                      <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">
                        {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                      </span>
                    </div>

                    {/* Add to Cart Button */}
                    <motion.button
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-md mt-auto"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ShoppingCart className="w-5 h-5" />
                      <span>Add to Cart</span>
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <motion.div 
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Sparkles className="w-20 h-20 text-slate-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-slate-900 mb-2">No products found</h3>
              <p className="text-slate-600 mb-6">Try adjusting your search or filter</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedFilter('all');
                }}
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </LazyMotion>
   
    </>
  );
}