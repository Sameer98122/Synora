"use client";
import React, { useState } from 'react';
import { Heart, ShoppingCart, Star, Search, ChevronDown, Menu, X, Filter } from 'lucide-react';
import Navbar from '@/components/layout/navbar';


export default function AccessoriesStore() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const products = [
    {
      id: 1,
      name: 'Leather Crossbody Bag',
      price: 3299,
      originalPrice: 4199,
      discount: '21% OFF',
      rating: 4.9,
      reviews: 203,
      badge: 'Best Seller',
      badgeColor: 'bg-green-500',
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=500&fit=crop',
      category: 'Bags'
    },
    {
      id: 2,
      name: 'Designer Sunglasses',
      price: 1299,
      originalPrice: 1799,
      discount: '28% OFF',
      rating: 4.7,
      reviews: 342,
      badge: 'New',
      badgeColor: 'bg-blue-600',
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=500&fit=crop',
      category: 'Eyewear'
    },
    {
      id: 3,
      name: 'Classic Wrist Watch',
      price: 2499,
      originalPrice: 3499,
      discount: '29% OFF',
      rating: 4.6,
      reviews: 156,
      badge: 'Sale',
      badgeColor: 'bg-red-500',
      image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=500&fit=crop',
      category: 'Watches'
    },
    {
      id: 4,
      name: 'Leather Wallet Premium',
      price: 899,
      originalPrice: 1299,
      discount: '31% OFF',
      rating: 4.8,
      reviews: 421,
      badge: 'Trending',
      badgeColor: 'bg-purple-600',
      image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=500&fit=crop',
      category: 'Wallets'
    },
    {
      id: 5,
      name: 'Silk Scarf Collection',
      price: 1499,
      originalPrice: 1999,
      discount: '25% OFF',
      rating: 4.5,
      reviews: 189,
      badge: 'Best Seller',
      badgeColor: 'bg-green-500',
      image: 'https://images.unsplash.com/photo-1601924357840-3ff3f7f6f7fa?w=400&h=500&fit=crop',
      category: 'Scarves'
    },
    {
      id: 6,
      name: 'Statement Necklace',
      price: 1899,
      originalPrice: 2499,
      discount: '24% OFF',
      rating: 4.6,
      reviews: 278,
      badge: 'New',
      badgeColor: 'bg-blue-600',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=500&fit=crop',
      category: 'Jewelry'
    },
    {
      id: 7,
      name: 'Leather Belt Classic',
      price: 799,
      originalPrice: 1199,
      discount: '33% OFF',
      rating: 4.7,
      reviews: 512,
      badge: 'Sale',
      badgeColor: 'bg-red-500',
      image: 'https://images.unsplash.com/photo-1624222247344-021b1f8b6c59?w=400&h=500&fit=crop',
      category: 'Belts'
    },
    {
      id: 8,
      name: 'Baseball Cap Premium',
      price: 699,
      originalPrice: 999,
      discount: '30% OFF',
      rating: 4.4,
      reviews: 234,
      badge: 'Trending',
      badgeColor: 'bg-purple-600',
      image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=500&fit=crop',
      category: 'Hats'
    },
  ];

  const toggleWishlist = (id) => {
    setWishlist(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const categories = ['All', 'Bags', 'Eyewear', 'Watches', 'Wallets', 'Jewelry', 'Belts', 'Hats', 'Scarves'];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6">
            Premium Accessories Collection
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 md:mb-10 text-blue-100 max-w-2xl mx-auto">
            Discover the perfect accessories to elevate your style
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
                placeholder="Search accessories..."
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
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">All Products</h3>
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
                  <div className="hidden sm:flex absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center">
                    <button className="bg-white text-gray-900 px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition text-sm">
                      Quick View
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-3 sm:p-4">
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
                  <button className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-2.5 rounded-lg flex items-center justify-center gap-2 transition-all hover:shadow-md text-sm">
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
              <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
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
  );
}