'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, LazyMotion, domAnimation } from 'framer-motion';
import { 
  ChevronRightIcon, 
  PlayIcon, 
  StarIcon, 
  ShoppingBagIcon, 
  TruckIcon, 
  ShieldCheckIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Optimized hero content with performance in mind
  const heroContent = [
    {
      id: 1,
      title: "Discover Amazing Products",
      subtitle: "Premium Quality at Unbeatable Prices",
      description: "Shop from our curated collection of the finest products, handpicked for quality and style.",
      cta: "Shop Now",
      stats: "50K+ Happy Customers"
    },
    {
      id: 2,
      title: "Limited Time Offers",
      subtitle: "Up to 70% Off on Selected Items", 
      description: "Don't miss out on incredible deals across all categories. Limited stock available!",
      cta: "View Deals",
      stats: "Flash Sale Ends Soon"
    },
    {
      id: 3,
      title: "New Arrivals Weekly",
      subtitle: "Stay Ahead of Trends",
      description: "Be the first to discover our latest arrivals and exclusive collections.",
      cta: "Explore New",
      stats: "Latest Collection"
    }
  ];

  const features = [
    { icon: TruckIcon, text: "Free Shipping", color: "text-blue-400" },
    { icon: ShieldCheckIcon, text: "Secure Payment", color: "text-green-400" },
    { icon: StarIcon, text: "Top Quality", color: "text-yellow-400" }
  ];

  // Optimized auto-rotation with cleanup
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroContent.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [heroContent.length]);

  // Animation variants for better performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const slideVariants = {
    enter: { opacity: 0, x: 50 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  };

  const floatingVariants = {
    float: {
      y: [-10, 10],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  return (
    <LazyMotion features={domAnimation}>
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        
        {/* Optimized Background Elements */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-300/10 to-transparent"
            animate={{ 
              skewY: [-2, 2],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
          
          <motion.div 
            className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl"
            variants={floatingVariants}
            animate="float"
          />
          
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-slate-300/5 rounded-full blur-2xl"
            variants={floatingVariants}
            animate="float"
            transition={{ delay: 1.5 }}
          />
        </div>

        {/* Main Content */}
        <motion.div 
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-12 lg:py-20">
            
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left lg:pr-12">
              
              {/* Trust Badge */}
              <motion.div 
                className="inline-flex items-center px-4 py-2 bg-blue-100/10 backdrop-blur-sm border border-blue-300/20 rounded-full text-blue-200 text-sm font-medium mb-6"
                variants={itemVariants}
              >
                <SparklesIcon className="w-4 h-4 mr-2 text-blue-300" />
                <AnimatePresence mode="wait">
                  <motion.span
                    key={heroContent[currentSlide].stats}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {heroContent[currentSlide].stats}
                  </motion.span>
                </AnimatePresence>
              </motion.div>

              {/* Dynamic Title */}
              <AnimatePresence mode="wait">
                <motion.h1 
                  key={heroContent[currentSlide].id}
                  className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {heroContent[currentSlide].title}
                </motion.h1>
              </AnimatePresence>

              {/* Subtitle */}
              <AnimatePresence mode="wait">
                <motion.h2 
                  key={`subtitle-${heroContent[currentSlide].id}`}
                  className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-200 mb-4"
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {heroContent[currentSlide].subtitle}
                </motion.h2>
              </AnimatePresence>

              {/* Description */}
              <AnimatePresence mode="wait">
                <motion.p 
                  key={`desc-${heroContent[currentSlide].id}`}
                  className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {heroContent[currentSlide].description}
                </motion.p>
              </AnimatePresence>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
                variants={itemVariants}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/products"
                    className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                  >
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={heroContent[currentSlide].cta}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {heroContent[currentSlide].cta}
                      </motion.span>
                    </AnimatePresence>
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <ChevronRightIcon className="w-5 h-5" />
                    </motion.div>
                  </Link>
                </motion.div>
                
                <motion.button 
                  className="group inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <PlayIcon className="mr-2 w-5 h-5" />
                  Watch Demo
                </motion.button>
              </motion.div>

              {/* Features */}
              <motion.div 
                className="flex flex-wrap justify-center lg:justify-start gap-6 text-slate-300"
                variants={itemVariants}
              >
                {features.map((feature, index) => (
                  <motion.div 
                    key={feature.text}
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <feature.icon className={`w-5 h-5 ${feature.color}`} />
                    <span className="text-sm font-medium">{feature.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Content - Product Showcase */}
            <motion.div 
              className="flex-1 mt-12 lg:mt-0"
              variants={itemVariants}
            >
              <motion.div 
                className="relative max-w-md mx-auto"
                variants={floatingVariants}
                animate="float"
              >
                {/* Product Card */}
                <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl">
                  
                  {/* Product Image Placeholder */}
                  <motion.div 
                    className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center mb-6 overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <ShoppingBagIcon className="w-20 h-20 text-slate-400" />
                    </motion.div>
                  </motion.div>
                  
                  {/* Product Info */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">Featured Product</h3>
                    
                    {/* Rating */}
                    <div className="flex items-center justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.2 + i * 0.1 }}
                        >
                          <StarIcon className="w-5 h-5 text-yellow-400 fill-current" />
                        </motion.div>
                      ))}
                      <span className="ml-2 text-slate-300 text-sm">(1,234 reviews)</span>
                    </div>
                    
                    {/* Price */}
                    <motion.div 
                      className="text-3xl font-bold text-blue-300 mb-4"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1.5, type: "spring" }}
                    >
                      ₹2,999
                    </motion.div>
                    
                    {/* Add to Cart */}
                    <motion.button 
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 rounded-xl transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Add to Cart
                    </motion.button>
                  </div>
                </div>

                {/* Floating Badges */}
                <motion.div 
                  className="absolute -top-4 -right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full"
                  animate={{ 
                    y: [0, -5, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  30% OFF
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-4 -left-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Best Seller
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Optimized Slide Indicators */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
          >
            {heroContent.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-blue-400 w-8' 
                    : 'bg-white/30 hover:bg-white/50 w-3'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </motion.div>
        </motion.div>
      </section>
    </LazyMotion>
  );
};

export default HeroSection;
