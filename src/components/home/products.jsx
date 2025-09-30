'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, LazyMotion, domAnimation } from 'framer-motion';
import { 
  HeartIcon, 
  StarIcon, 
  ShoppingCartIcon,
  EyeIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
  ChevronDownIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';

const ProductsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [wishlist, setWishlist] = useState(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  // Sample product data - replace with your actual product data
  const allProducts = [
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      price: 4999,
      originalPrice: 6999,
      category: 'electronics',
      image: '/product-1.jpg',
      rating: 4.8,
      reviews: 324,
      badge: 'Best Seller',
      badgeColor: 'bg-green-500'
    },
    {
      id: 2,
      name: 'Elegant Summer Dress',
      price: 2499,
      originalPrice: 3499,
      category: 'fashion',
      image: '/product-2.jpg',
      rating: 4.6,
      reviews: 156,
      badge: 'New',
      badgeColor: 'bg-blue-500'
    },
    {
      id: 3,
      name: 'Modern Table Lamp',
      price: 1899,
      originalPrice: 2499,
      category: 'home-decor',
      image: '/product-3.jpg',
      rating: 4.7,
      reviews: 89,
      badge: 'Sale',
      badgeColor: 'bg-red-500'
    },
    {
      id: 4,
      name: 'Leather Crossbody Bag',
      price: 3299,
      originalPrice: 4199,
      category: 'accessories',
      image: '/product-4.jpg',
      rating: 4.9,
      reviews: 203,
      badge: 'Premium',
      badgeColor: 'bg-purple-500'
    },
    {
      id: 5,
      name: 'Smart Fitness Tracker',
      price: 5499,
      originalPrice: 7999,
      category: 'electronics',
      image: '/product-5.jpg',
      rating: 4.5,
      reviews: 412,
      badge: 'Hot',
      badgeColor: 'bg-orange-500'
    },
    {
      id: 6,
      name: 'Casual Sneakers',
      price: 3799,
      originalPrice: 4999,
      category: 'fashion',
      image: '/product-6.jpg',
      rating: 4.4,
      reviews: 267,
      badge: 'Trending',
      badgeColor: 'bg-pink-500'
    },
    {
      id: 7,
      name: 'Decorative Wall Art',
      price: 1299,
      originalPrice: 1899,
      category: 'home-decor',
      image: '/product-7.jpg',
      rating: 4.6,
      reviews: 78,
      badge: 'Limited',
      badgeColor: 'bg-yellow-500'
    },
    {
      id: 8,
      name: 'Premium Watch',
      price: 8999,
      originalPrice: 12999,
      category: 'accessories',
      image: '/product-8.jpg',
      rating: 4.8,
      reviews: 145,
      badge: 'Luxury',
      badgeColor: 'bg-gold-500'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', count: allProducts.length },
    { id: 'electronics', name: 'Electronics', count: allProducts.filter(p => p.category === 'electronics').length },
    { id: 'fashion', name: 'Fashion', count: allProducts.filter(p => p.category === 'fashion').length },
    { id: 'home-decor', name: 'Home Decor', count: allProducts.filter(p => p.category === 'home-decor').length },
    { id: 'accessories', name: 'Accessories', count: allProducts.filter(p => p.category === 'accessories').length }
  ];

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'newest', label: 'Newest First' }
  ];

  // Filter and sort products
  const filteredProducts = allProducts.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return b.id - a.id;
      default:
        return 0;
    }
  });

  // Pagination
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = sortedProducts.slice(startIndex, startIndex + productsPerPage);

  // Wishlist functionality
  const toggleWishlist = (productId) => {
    const newWishlist = new Set(wishlist);
    if (newWishlist.has(productId)) {
      newWishlist.delete(productId);
    } else {
      newWishlist.add(productId);
    }
    setWishlist(newWishlist);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const productCardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <LazyMotion features={domAnimation}>
      <section className="relative py-20 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
        
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-slate-600 rounded-full blur-3xl"></div>
        </div>

        <motion.div 
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          {/* Header Section */}
          <div className="text-center mb-12">
            <motion.div 
              className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4"
              variants={itemVariants}
            >
              <SparklesIcon className="w-4 h-4 mr-2" />
              Our Products
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
              variants={itemVariants}
            >
              Discover Amazing 
              <span className="text-blue-600"> Products</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-slate-600 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Explore our carefully curated collection of premium products designed to enhance your lifestyle.
            </motion.p>
          </div>

          {/* Search and Filter Bar */}
          <motion.div 
            className="bg-white rounded-2xl shadow-lg p-6 mb-12 border border-slate-100"
            variants={itemVariants}
          >
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>

              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-slate-200 rounded-xl px-4 py-3 pr-10 text-slate-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
              </div>
            </div>
          </motion.div>

          {/* Products Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12"
            variants={containerVariants}
          >
            <AnimatePresence mode="wait">
              {currentProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  variants={productCardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 group"
                >
                  {/* Product Image */}
                  <div className="relative aspect-square bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                    {/* Placeholder for product image */}
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <ShoppingCartIcon className="w-16 h-16 text-slate-400 mx-auto mb-2" />
                        <div className="text-sm text-slate-500">Product Image</div>
                      </div>
                    </div>

                    {/* Badge */}
                    <div className={`absolute top-3 left-3 ${product.badgeColor} text-white text-xs font-bold px-2 py-1 rounded-full`}>
                      {product.badge}
                    </div>

                    {/* Wishlist Button */}
                    <motion.button
                      onClick={() => toggleWishlist(product.id)}
                      className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-all duration-200"
                      whileTap={{ scale: 0.9 }}
                    >
                      {wishlist.has(product.id) ? (
                        <HeartSolid className="w-5 h-5 text-red-500" />
                      ) : (
                        <HeartIcon className="w-5 h-5 text-slate-600" />
                      )}
                    </motion.button>

                    {/* Quick View Button */}
                    <motion.div 
                      className="absolute inset-0 bg-black/0 group-hover:bg-black/20 flex items-center justify-center transition-all duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <motion.button
                        className="bg-white text-slate-900 px-4 py-2 rounded-lg font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center space-x-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <EyeIcon className="w-4 h-4" />
                        <span>Quick View</span>
                      </motion.button>
                    </motion.div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <div className="mb-2">
                      <Link 
                        href={`/product/${product.id}`}
                        className="text-lg font-semibold text-slate-900 hover:text-blue-600 transition-colors duration-200 line-clamp-2"
                      >
                        {product.name}
                      </Link>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? 'text-yellow-400 fill-current'
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
                        {product.originalPrice && (
                          <span className="text-sm text-slate-500 line-through">
                            ₹{product.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                      {product.originalPrice && (
                        <span className="text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">
                          {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                        </span>
                      )}
                    </div>

                    {/* Add to Cart Button */}
                    <motion.button
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ShoppingCartIcon className="w-5 h-5" />
                      <span>Add to Cart</span>
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Pagination */}
          {totalPages > 1 && (
            <motion.div 
              className="flex justify-center items-center space-x-2"
              variants={itemVariants}
            >
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                Previous
              </button>
              
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                    currentPage === index + 1
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'border border-slate-300 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                Next
              </button>
            </motion.div>
          )}

          {/* Empty State */}
          {currentProducts.length === 0 && (
            <motion.div 
              className="text-center py-12"
              variants={itemVariants}
            >
              <ShoppingCartIcon className="w-16 h-16 text-slate-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">No products found</h3>
              <p className="text-slate-600 mb-6">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </motion.div>
      </section>
    </LazyMotion>
  );
};

export default ProductsSection;
