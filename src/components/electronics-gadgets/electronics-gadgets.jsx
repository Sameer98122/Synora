// 'use client';

// import React, { useState, useMemo } from 'react';
// import { motion, AnimatePresence, LazyMotion, domAnimation } from 'framer-motion';
// import { Heart, Star, ShoppingCart, Search, ChevronDown, Sparkles } from 'lucide-react';
// import Navbar from '../layout/navbar';

// export default function ElectronicsStore() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [sortBy, setSortBy] = useState('featured');
//   const [wishlist, setWishlist] = useState(new Set());

//   const products = [
//     { 
//       id: 1, 
//       name: 'Premium Wireless Headphones', 
//       price: 4999, 
//       originalPrice: 6999, 
//       rating: 4.8, 
//       reviews: 324,
//       badge: 'Best Seller',
//       badgeColor: 'bg-green-500',
//       image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=500&fit=crop' 
//     },
//     { 
//       id: 2, 
//       name: 'Smart Watch Pro', 
//       price: 2499, 
//       originalPrice: 3499, 
//       rating: 4.6, 
//       reviews: 156,
//       badge: 'New',
//       badgeColor: 'bg-blue-600',
//       image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=500&fit=crop' 
//     },
//     { 
//       id: 3, 
//       name: 'Wireless Gaming Mouse', 
//       price: 1899, 
//       originalPrice: 2499, 
//       rating: 4.7, 
//       reviews: 89,
//       badge: 'Sale',
//       badgeColor: 'bg-red-500',
//       image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=500&fit=crop' 
//     },
//     { 
//       id: 4, 
//       name: 'Portable Bluetooth Speaker', 
//       price: 3299, 
//       originalPrice: 4199, 
//       rating: 4.9, 
//       reviews: 203,
//       badge: 'Trending',
//       badgeColor: 'bg-purple-600',
//       image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=500&fit=crop' 
//     },
//     { 
//       id: 5, 
//       name: 'Mechanical Keyboard RGB', 
//       price: 5499, 
//       originalPrice: 6999, 
//       rating: 4.5, 
//       reviews: 412,
//       badge: 'Best Seller',
//       badgeColor: 'bg-green-500',
//       image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=400&h=500&fit=crop' 
//     },
//     { 
//       id: 6, 
//       name: 'Wireless Earbuds Pro', 
//       price: 2799, 
//       originalPrice: 3499, 
//       rating: 4.6, 
//       reviews: 278,
//       badge: 'New',
//       badgeColor: 'bg-blue-600',
//       image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=500&fit=crop' 
//     },
//     { 
//       id: 7, 
//       name: '4K Action Camera', 
//       price: 8999, 
//       originalPrice: 11999, 
//       rating: 4.8, 
//       reviews: 156,
//       badge: 'Sale',
//       badgeColor: 'bg-red-500',
//       image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=500&fit=crop' 
//     },
//     { 
//       id: 8, 
//       name: 'USB-C Fast Charger 65W', 
//       price: 1299, 
//       originalPrice: 1799, 
//       rating: 4.7, 
//       reviews: 342,
//       badge: 'Trending',
//       badgeColor: 'bg-purple-600',
//       image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400&h=500&fit=crop' 
//     }
//   ];

//   const sortOptions = [
//     { value: 'featured', label: 'Featured' },
//     { value: 'price-low', label: 'Price: Low to High' },
//     { value: 'price-high', label: 'Price: High to Low' },
//     { value: 'rating', label: 'Top Rated' }
//   ];

//   // Filter and Sort
//   const filteredProducts = useMemo(() => {
//     let filtered = products.filter(product =>
//       product.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     switch (sortBy) {
//       case 'price-low':  filtered.sort((a, b) => a.price - b.price); break;
//       case 'price-high': filtered.sort((a, b) => b.price - a.price); break;
//       case 'rating':     filtered.sort((a, b) => b.rating - a.rating); break;
//       default: break;
//     }
//     return filtered;
//   }, [searchTerm, sortBy, products]);

//   // Wishlist handler
//   const toggleWishlist = (id) => {
//     setWishlist(prev => {
//       const newSet = new Set(prev);
//       newSet.has(id) ? newSet.delete(id) : newSet.add(id);
//       return newSet;
//     });
//   };

//   // Animations
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
//   };
//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//     exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } }
//   };

//   return (
//     <>
//       <Navbar />
//       <LazyMotion features={domAnimation}>
//         <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
//           {/* Background Blurs */}
//           <div className="absolute inset-0 opacity-5 pointer-events-none">
//             <div className="absolute top-20 left-20 w-64 h-64 bg-blue-600 rounded-full blur-3xl"></div>
//             <div className="absolute bottom-20 right-20 w-80 h-80 bg-slate-600 rounded-full blur-3xl"></div>
//         </div>

//         {/* Header Section */}
//         <motion.div 
//           className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <div className="text-center">
//             <motion.div 
//               className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6"
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               transition={{ delay: 0.2, type: "spring" }}
//             >
//               <Sparkles className="w-4 h-4 mr-2" />
//               Elevate Your Tech!
//             </motion.div>
//             <motion.h1 
//               className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3, duration: 0.6 }}
//             >
//               Electronics
//               <span className="block text-blue-600 mt-2">SYNORA</span>
//             </motion.h1>
//             <motion.p 
//               className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.5, duration: 0.6 }}
//             >
//               Discover the latest gadgets, tech essentials & great deals for every lifestyle.
//             </motion.p>
//           </div>
//         </motion.div>

//         {/* Navbar (Search + Sort) */}
//         <nav className="bg-white/80 backdrop-blur-md border-y border-slate-200 sticky top-0 z-50 shadow-sm">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//             <div className="flex items-center justify-between gap-4">
//               {/* Search Bar */}
//               <div className="relative flex-1 max-w-xl">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
//                 <input
//                   type="text"
//                   placeholder="Search electronics & gadgets..."
//                   value={searchTerm}
//                   onChange={e => setSearchTerm(e.target.value)}
//                   className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
//                 />
//               </div>
//               {/* Sort Dropdown */}
//               <div className="relative">
//                 <select
//                   value={sortBy}
//                   onChange={e => setSortBy(e.target.value)}
//                   className="appearance-none bg-white border border-slate-200 rounded-xl px-4 py-2.5 pr-10 text-slate-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none min-w-[150px]"
//                 >
//                   {sortOptions.map(opt => (
//                     <option key={opt.value} value={opt.value}>{opt.label}</option>
//                   ))}
//                 </select>
//                 <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
//               </div>
//             </div>
//           </div>
//         </nav>

//         {/* Products Grid */}
//         <motion.div 
//           className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//             <AnimatePresence mode="wait">
//               {filteredProducts.map(product => (
//                 <motion.div
//                   key={product.id}
//                   layout
//                   variants={itemVariants}
//                   initial="hidden"
//                   animate="visible"
//                   exit="exit"
//                   whileHover={{ y: -8 }}
//                   className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 group"
//                 >

//                   {/* Product Image */}
//                   <div className="relative aspect-square bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="w-full h-full object-cover rounded-xl"
//                     />
//                     {/* Badge */}
//                     <span className={`absolute top-3 left-3 ${product.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow-md`}>
//                       {product.badge}
//                     </span>
//                     {/* Wishlist Button */}
//                     <motion.button
//                       onClick={() => toggleWishlist(product.id)}
//                       className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-all duration-200"
//                       whileTap={{ scale: 0.9 }}
//                     >
//                       <Heart 
//                         className={`w-5 h-5 ${wishlist.has(product.id) ? 'fill-red-500 text-red-500' : 'text-slate-600'}`}
//                       />
//                     </motion.button>
//                     {/* Quick View Overlay */}
//                     <motion.div 
//                       className="absolute inset-0 bg-black/0 group-hover:bg-black/20 flex items-center justify-center transition-all duration-300"
//                       initial={{ opacity: 0 }}
//                       whileHover={{ opacity: 1 }}
//                     >
//                       <motion.button
//                         className="bg-white text-slate-900 px-4 py-2 rounded-lg font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center space-x-2 shadow-lg"
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                       >
//                         <Star className="w-4 h-4" />
//                         <span>Quick View</span>
//                       </motion.button>
//                     </motion.div>
//                   </div>

//                   {/* Product Info */}
//                   <div className="p-5">
//                     <h3 className="text-lg font-semibold text-slate-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors cursor-pointer">
//                       {product.name}
//                     </h3>
//                     {/* Rating */}
//                     <div className="flex items-center mb-3">
//                       <div className="flex items-center">
//                         {[...Array(5)].map((_, i) => (
//                           <Star
//                             key={i}
//                             className={`w-4 h-4 ${
//                               i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300'
//                             }`}
//                           />
//                         ))}
//                       </div>
//                       <span className="ml-2 text-sm text-slate-600">
//                         {product.rating} ({product.reviews})
//                       </span>
//                     </div>
//                     {/* Price */}
//                     <div className="flex items-center justify-between mb-4">
//                       <div className="flex items-center space-x-2">
//                         <span className="text-2xl font-bold text-slate-900">
//                           ₹{product.price.toLocaleString()}
//                         </span>
//                         <span className="text-sm text-slate-500 line-through">
//                           ₹{product.originalPrice.toLocaleString()}
//                         </span>
//                       </div>
//                       <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">
//                         {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
//                       </span>
//                     </div>
//                     {/* Cart Button */}
//                     <motion.button
//                       className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-md"
//                       whileHover={{ scale: 1.02 }}
//                       whileTap={{ scale: 0.98 }}
//                     >
//                       <ShoppingCart className="w-5 h-5" />
//                       <span>Add to Cart</span>
//                     </motion.button>
//                   </div>
//                 </motion.div>
//               ))}
//             </AnimatePresence>
//           </div>
//           {/* Empty State */}
//           {filteredProducts.length === 0 && (
//             <motion.div 
//               className="text-center py-16"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//             >
//               <Sparkles className="w-20 h-20 text-slate-400 mx-auto mb-4" />
//               <h3 className="text-2xl font-semibold text-slate-900 mb-2">No products found</h3>
//               <p className="text-slate-600 mb-6">Try adjusting your search or sorting options.</p>
//               <button
//                 onClick={() => {
//                   setSearchTerm('');
//                   setSortBy('featured');
//                 }}
//                 className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200"
//               >
//                 Reset Filters
//               </button>
//             </motion.div>
//           )}
//         </motion.div>
//       </div>
//     </LazyMotion>
//     </>
//   );
// }
