'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Sparkles, ArrowRight, ShoppingBag, TrendingUp, Menu, X } from 'lucide-react';

const cardCategories = [
  {
    id: 'home-decor',
    name: 'Home Decor',
    description: 'Make your space stylish and cozy.',
    color: 'from-yellow-400 to-yellow-600',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
    icon: '🏠',
    slug: 'home-decor',
  },
  {
    id: 'fashion',
    name: 'Fashion & Clothes',
    description: 'Latest trends, stunning looks.',
    color: 'from-pink-400 to-pink-600',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop',
    icon: '👗',
    slug: 'fashion-clothes',
  },
  {
    id: 'accessories',
    name: 'Accessories',
    description: 'Premium bags, watches, and more.',
    color: 'from-purple-400 to-purple-600',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&h=600&fit=crop',
    icon: '👜',
    slug: 'accessories',
  },
  {
    id: 'electronics',
    name: 'Electronic & Gadget',
    description: 'Upgrade your tech life.',
    color: 'from-blue-400 to-blue-600',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&h=600&fit=crop',
    icon: '🎧',
    slug: 'electronics-gadgets',
  },
];

export default function Product() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOption, setSortOption] = useState('featured');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const router = useRouter();

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
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-blue-500 rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-purple-500 rounded-full blur-3xl opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-pink-500 rounded-full blur-3xl opacity-5"></div>
      </div>

      <main className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header */}
        <section className="text-center mb-8 sm:mb-12 pt-12 sm:pt-16 md:pt-20 pb-6 sm:pb-8">
          <div className="inline-flex items-center px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-xs sm:text-sm font-semibold mb-8 sm:mb-12 shadow-lg">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            Premium Collection 2024
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 sm:mb-6 leading-tight px-2">
            <span className="text-slate-900">Discover Amazing</span>
            <br />
            <span className="relative inline-block mt-1 sm:mt-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Products
              </span>
              <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 sm:h-3 bg-gradient-to-r from-blue-400 to-purple-400 opacity-30 rounded-full" />
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4">
            Explore our carefully curated collection of premium products designed to elevate your lifestyle
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-8 text-xs sm:text-sm px-4">
            <div className="flex items-center gap-2 text-slate-700">
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
              <span className="font-semibold">1000+ Products</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
              <span className="font-semibold">Top Rated</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
              <span className="font-semibold">Newest Arrivals</span>
            </div>
          </div>
        </section>

        {/* Search & Filters */}
        <section className="bg-white/90 backdrop-blur-lg rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 mb-8 sm:mb-12 border border-slate-200">
          <div className="flex flex-col gap-4">
            {/* Search */}
            <div className="w-full">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 border border-slate-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-white text-sm sm:text-base"
                />
              </div>
            </div>

            {/* Mobile Filter Toggle */}
            <div className="flex sm:hidden items-center justify-between gap-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg text-sm font-medium shadow-lg flex-1"
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                {mobileMenuOpen ? 'Close Filters' : 'Filters & Sort'}
              </button>

              <div className="text-sm font-medium text-slate-700 bg-slate-100 px-4 py-2.5 rounded-lg whitespace-nowrap">
                {displayedCards.length} items
              </div>
            </div>

            {/* Filters */}
            <div
              className={`${
                mobileMenuOpen ? 'flex' : 'hidden'
              } sm:flex flex-col sm:flex-row gap-3 sm:gap-2 items-stretch sm:items-center justify-between w-full`}
            >
              {/* Categories */}
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 flex-grow">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap text-center ${
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
                    className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap text-center ${
                      selectedCategory === cat.id
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    <span className="hidden sm:inline">{cat.name} (1)</span>
                    <span className="sm:hidden">
                      {cat.icon} {cat.name}
                    </span>
                  </button>
                ))}
              </div>

              {/* Sort */}
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="border border-slate-300 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-slate-700 outline-none transition-all duration-200 bg-white hover:border-blue-400 focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="highest-rated">Highest Rated</option>
                <option value="newest">Newest First</option>
              </select>
            </div>
          </div>
        </section>

        {/* Product Cards */}
        <section className="space-y-6 sm:space-y-8 pb-8 sm:pb-12">
          {displayedCards.length === 0 ? (
            <div className="text-center py-12 sm:py-20">
              <p className="text-lg sm:text-xl text-slate-600">
                No products found matching your search.
              </p>
            </div>
          ) : (
            displayedCards.map((card) => (
              <div
                key={card.id}
                className={`rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl bg-gradient-to-r ${card.color} group relative hover:shadow-2xl transition-shadow duration-300`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-48 xs:h-56 sm:h-64 md:h-auto overflow-hidden order-1 md:order-none">
                    <img
                      src={card.image}
                      alt={card.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
                    <div className="absolute top-4 sm:top-6 left-4 sm:left-6 text-4xl sm:text-5xl md:text-6xl">
                      {card.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center text-white">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                      {card.name}
                    </h3>
                    <p className="text-base sm:text-lg text-white/90 mb-5 sm:mb-6 leading-relaxed">
                      {card.description}
                    </p>
                    <div>
                      <button
                        onClick={() => router.push(`/products/${card.slug}`)}
                        className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-blue-600 text-base sm:text-lg font-semibold rounded-lg sm:rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group/btn hover:scale-105 active:scale-95"
                      >
                        <span>Explore Collection</span>
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                  
                </div>
              </div>
            ))
          )}
        </section>
      </main>
    </div>
  );
}
