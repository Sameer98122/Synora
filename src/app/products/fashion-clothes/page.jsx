"use client";
import React, { useState } from 'react';
import { Heart, ShoppingCart, Star, Search, ChevronDown, Menu, X, Filter, TrendingUp } from 'lucide-react';
import  Navbar from '@/components/layout/navbar';
import Footer from '@/components/footer/footer';

export default function FashionStore() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const products = [
    {
      id: 1,
      name: 'Floral Summer Dress',
      price: 2499,
      originalPrice: 3499,
      discount: '29% OFF',
      rating: 4.8,
      reviews: 456,
      badge: 'Best Seller',
      badgeColor: 'bg-green-500',
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop',
      category: 'Dresses',
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      id: 2,
      name: 'Classic Denim Jacket',
      price: 3299,
      originalPrice: 4599,
      discount: '28% OFF',
      rating: 4.9,
      reviews: 623,
      badge: 'Trending',
      badgeColor: 'bg-purple-600',
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop',
      category: 'Jackets',
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      id: 3,
      name: 'High Waist Jeans',
      price: 1899,
      originalPrice: 2699,
      discount: '30% OFF',
      rating: 4.7,
      reviews: 892,
      badge: 'Hot',
      badgeColor: 'bg-red-500',
      image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=500&fit=crop',
      category: 'Jeans',
      sizes: ['26', '28', '30', '32']
    },
    {
      id: 4,
      name: 'Silk Blouse Elegant',
      price: 1599,
      originalPrice: 2299,
      discount: '30% OFF',
      rating: 4.6,
      reviews: 334,
      badge: 'New',
      badgeColor: 'bg-blue-600',
      image: 'https://images.unsplash.com/photo-1564859228273-274232fdb516?w=400&h=500&fit=crop',
      category: 'Tops',
      sizes: ['S', 'M', 'L']
    },
    {
      id: 5,
      name: 'Leather Handbag',
      price: 4299,
      originalPrice: 5999,
      discount: '28% OFF',
      rating: 4.9,
      reviews: 278,
      badge: 'Luxury',
      badgeColor: 'bg-yellow-500',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=500&fit=crop',
      category: 'Bags',
      sizes: ['One Size']
    },
    {
      id: 6,
      name: 'Casual T-Shirt',
      price: 799,
      originalPrice: 1199,
      discount: '33% OFF',
      rating: 4.5,
      reviews: 1024,
      badge: 'Best Price',
      badgeColor: 'bg-orange-500',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop',
      category: 'T-Shirts',
      sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    {
      id: 7,
      name: 'Maxi Skirt Boho',
      price: 1999,
      originalPrice: 2799,
      discount: '29% OFF',
      rating: 4.7,
      reviews: 445,
      badge: 'Trending',
      badgeColor: 'bg-purple-600',
      image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400&h=500&fit=crop',
      category: 'Skirts',
      sizes: ['S', 'M', 'L']
    },
    {
      id: 8,
      name: 'Sneakers White',
      price: 2799,
      originalPrice: 3999,
      discount: '30% OFF',
      rating: 4.8,
      reviews: 712,
      badge: 'Best Seller',
      badgeColor: 'bg-green-500',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop',
      category: 'Shoes',
      sizes: ['6', '7', '8', '9', '10']
    },
    {
      id: 9,
      name: 'Formal Blazer',
      price: 3999,
      originalPrice: 5499,
      discount: '27% OFF',
      rating: 4.9,
      reviews: 189,
      badge: 'Premium',
      badgeColor: 'bg-indigo-600',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=500&fit=crop',
      category: 'Blazers',
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      id: 10,
      name: 'Yoga Pants',
      price: 1299,
      originalPrice: 1899,
      discount: '32% OFF',
      rating: 4.6,
      reviews: 567,
      badge: 'Active',
      badgeColor: 'bg-teal-500',
      image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&h=500&fit=crop',
      category: 'Activewear',
      sizes: ['XS', 'S', 'M', 'L']
    },
    {
      id: 11,
      name: 'Evening Gown',
      price: 5999,
      originalPrice: 8999,
      discount: '33% OFF',
      rating: 5.0,
      reviews: 123,
      badge: 'Exclusive',
      badgeColor: 'bg-pink-600',
      image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&h=500&fit=crop',
      category: 'Dresses',
      sizes: ['S', 'M', 'L']
    },
    {
      id: 12,
      name: 'Denim Shorts',
      price: 1199,
      originalPrice: 1699,
      discount: '29% OFF',
      rating: 4.4,
      reviews: 834,
      badge: 'Summer',
      badgeColor: 'bg-cyan-500',
      image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=500&fit=crop',
      category: 'Shorts',
      sizes: ['26', '28', '30', '32']
    },
  ];

  const toggleWishlist = (id) => {
    setWishlist(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const categories = ['All', 'Dresses', 'Tops', 'Jeans', 'Jackets', 'T-Shirts', 'Skirts', 'Shoes', 'Blazers', 'Activewear', 'Shorts', 'Bags'];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8" />
            <span className="text-sm sm:text-base font-semibold bg-white/20 px-4 py-1 rounded-full">New Season Collection</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6">
            Fashion That Speaks Your Style
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 md:mb-10 text-pink-100 max-w-2xl mx-auto">
            Discover the latest trends in fashion and clothing with exclusive discounts
          </p>
          <button className="bg-white text-blue-600 px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 rounded-full font-semibold hover:bg-gray-100 transition-all hover:shadow-lg transform hover:scale-105 text-sm sm:text-base md:text-lg">
            Shop Now
          </button>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white shadow-sm sticky top-14 sm:top-16 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search fashion & clothing..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition"
              />
            </div>

            {/* Filter & Sort */}
            <div className="flex gap-2 sm:gap-3">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center gap-2 px-4 py-2.5 border rounded-lg font-medium transition-all text-sm ${
                  showFilters 
                    ? 'bg-blue-600 text-white border-blue-600'
                        : 'border-gray-300 hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600'
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
                  <option value="newest">Newest First</option>
                  <option value="popular">Most Popular</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
              </div>
            </div>
          </div>

          {/* Category Pills */}
          {showFilters && (
            <div className="mt-4 pb-2">
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full border font-medium transition-all text-sm ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'border-gray-300 hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Products Section */}
      <div className="py-6 sm:py-8 md:py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Products Header */}
          <div className="mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">Trending Collection</h3>
            <p className="text-sm sm:text-base text-gray-600 mt-1 sm:mt-2">
              Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'item' : 'items'}
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {filteredProducts.map(product => (
              <div
                key={product.id}
                className="bg-white rounded-lg sm:rounded-xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Image Container */}
                <div className="relative bg-gray-100 aspect-[3/4] overflow-hidden group">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Badge */}
                  <span className={`absolute top-2 left-2 ${product.badgeColor} text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-lg z-10`}>
                    {product.badge}
                  </span>

                  {/* Wishlist Icon */}
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-all hover:scale-110 shadow-md z-10"
                  >
                    <Heart
                      size={18}
                      className={`transition ${wishlist.includes(product.id) ? 'text-red-500 fill-red-500' : 'text-gray-600'}`}
                    />
                  </button>

                  {/* Quick View Overlay (Desktop) */}
                  <div className="hidden sm:flex absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center flex-col gap-2">
                    <button className="bg-white text-gray-900 px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition text-sm">
                      Quick View
                    </button>
                    <div className="flex gap-1">
                      {product.sizes.slice(0, 4).map(size => (
                        <span key={size} className="bg-white/90 text-gray-900 text-xs px-2 py-1 rounded font-medium">
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-3 sm:p-4">
                  <p className="text-xs text-gray-500 mb-1">{product.category}</p>
                  <h3 className="text-gray-900 font-semibold text-sm sm:text-base mb-2 line-clamp-2 leading-snug min-h-[2.5rem] sm:min-h-[3rem]">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center mb-2 sm:mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={`${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="ml-1.5 text-gray-600 text-xs">
                      {product.rating} <span className="hidden sm:inline">({product.reviews})</span>
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mb-3">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-lg sm:text-xl font-bold text-gray-900">
                        ₹{product.price.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 line-through text-xs">
                        ₹{product.originalPrice.toLocaleString()}
                      </span>
                      <span className="text-green-600 font-semibold text-xs bg-green-50 px-2 py-0.5 rounded">
                        {product.discount}
                      </span>
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <button className="w-full bg-gradient-to-r bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-2.5 rounded-lg flex items-center justify-center gap-2 transition-all hover:shadow-md text-sm">
                    <ShoppingCart size={16} />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg mb-2">No products found matching your criteria.</p>
              <button 
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 sm:px-10 py-3 sm:py-3.5 rounded-lg font-semibold transition-all hover:shadow-lg transform hover:scale-105 text-sm sm:text-base"
              >
                Clear all filters
              </button>
            </div>
          )}

          {/* Load More Button */}
          {filteredProducts.length > 0 && (
            <div className="mt-8 sm:mt-12 text-center">
              <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 sm:px-10 py-3 sm:py-3.5 rounded-lg font-semibold transition-all hover:shadow-lg transform hover:scale-105 text-sm sm:text-base">
                Load More Products
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
    
    <Footer />
   </>
  );
}