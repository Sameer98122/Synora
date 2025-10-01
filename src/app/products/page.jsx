'use client';

import React, { useState } from 'react';
import { motion, LazyMotion, domAnimation } from 'framer-motion';
import { Search, Sparkles, ArrowRight, ShoppingBag, TrendingUp } from 'lucide-react';

const cardCategories = [
  {
    id: 'home-decor',
    name: 'Home Decor',
    description: 'Make your space stylish and cozy.',
    color: 'from-yellow-400 to-yellow-600',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
    icon: '🏠'
  },
  {
    id: 'fashion',
    name: 'Fashion & Clothes',
    description: 'Latest trends, stunning looks.',
    color: 'from-pink-400 to-pink-600',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop',
    icon: '👗'
  },
  {
    id: 'accessories',
    name: 'Accessories',
    description: 'Premium bags, watches, and more.',
    color: 'from-purple-400 to-purple-600',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&h=600&fit=crop',
    icon: '👜'
  },
  {
    id: 'electronics',
    name: 'Electronic & Gadget',
    description: 'Upgrade your tech life.',
    color: 'from-blue-400 to-blue-600',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&h=600&fit=crop',
    icon: '🎧'
  },
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all'); 
  const [sortOption, setSortOption] = useState('featured'); 

  const filteredCards =
    selectedCategory === 'all'
      ? cardCategories
      : cardCategories.filter((card) => card.id === selectedCategory);

  let displayedCards = filteredCards.filter(
    (card) =>
      card.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  displayedCards = displayedCards.sort((a, b) => {
    if (sortOption === 'price-low') {
      return a.name.length - b.name.length;
    }
    if (sortOption === 'price-high') {
      return b.name.length - a.name.length;
    }
    if (sortOption === 'newest' || sortOption === 'highest-rated') {
      return b.id.localeCompare(a.id);
    }
    return 0;
  });

  return (
    <LazyMotion features={domAnimation}>
      <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 min-h-screen relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-10 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-5 animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced Header Section */}
          <section className="text-center mb-12 pt-20 pb-8">
            <motion.div
              className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-semibold mb-6 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
            >
              <Sparkles className="w-4 h-4 mr-2 animate-spin" style={{animationDuration: '3s'}} />
              Premium Collection 2024
            </motion.div>
            
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="text-slate-900">Discover Amazing</span>
              <br />
              <span className="relative inline-block mt-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Products</span>
                <motion.div 
                  className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-blue-400 to-purple-400 opacity-30 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Explore our carefully curated collection of premium products designed to elevate your lifestyle
            </motion.p>

            <motion.div
              className="flex items-center justify-center gap-8 text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <div className="flex items-center gap-2 text-slate-700">
                <ShoppingBag className="w-5 h-5 text-blue-600" />
                <span className="font-semibold">1000+ Products</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <span className="font-semibold">Top Rated</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Sparkles className="w-5 h-5 text-purple-600" />
                <span className="font-semibold">Newest Arrivals</span>
              </div>
            </motion.div>
          </section>

          {/* Navbar */}
          <motion.section 
            className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl p-6 mb-12 border border-slate-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between w-full">
              
              <div className="flex-1 w-full max-w-full lg:max-w-xs">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-white"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-2 justify-center lg:justify-end flex-grow">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                    selectedCategory === 'all'
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  All Products ({cardCategories.length})
                </button>
                {cardCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                      selectedCategory === cat.id
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {cat.name} (1)
                  </button>
                ))}

                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="border border-slate-300 rounded-xl px-4 py-3 text-sm font-medium text-slate-700 outline-none transition-all duration-200 bg-white hover:border-blue-400 focus:ring-2 focus:ring-blue-500"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="highest-rated">Highest Rated</option>
                  <option value="newest">Newest First</option>
                </select>
              </div>
            </div>
          </motion.section>

          {/* Product Cards with Images */}
          <section className="space-y-8 pb-12"> 
            {displayedCards.map((card, index) => (
              <motion.div
                key={card.id}
                className={`rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-r ${card.color} group relative`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img 
                      src={card.image} 
                      alt={card.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
                    <div className="absolute top-6 left-6 text-6xl">{card.icon}</div>
                  </div>

                  {/* Content Section */}
                  <div className="p-10 flex flex-col justify-center text-white">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">
                      {card.name}
                    </h3>
                    <p className="text-lg text-white/90 max-w-2xl mb-6">
                      {card.description}
                    </p>
                    <div>
                      <motion.button
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 text-lg font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group/btn"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>Explore Collection</span>
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </section>
        </main>
      </div>
    </LazyMotion>
  );
}