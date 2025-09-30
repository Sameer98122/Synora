'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ShoppingBagIcon, 
  HeartIcon, 
  ShieldCheckIcon, 
  TruckIcon, 
  StarIcon,
  UsersIcon,
  TrophyIcon,   // ✅ Use this instead of AwardIcon
  ClockIcon
} from '@heroicons/react/24/outline';

const AboutSection = () => {
  const stats = [
    { number: '50K+', label: 'Happy Customers', icon: UsersIcon },
    { number: '10K+', label: 'Products Sold', icon: ShoppingBagIcon },
    { number: '4.8', label: 'Average Rating', icon: StarIcon },
    { number: '3+', label: 'Years Experience', icon: ClockIcon }
  ];

  const features = [
    {
      icon: HeartIcon,
      title: 'Curated with Care',
      description: 'Every product is handpicked by our team of experts who understand quality and style.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Quality Guaranteed',
      description: 'We stand behind every item with our comprehensive quality assurance and return policy.'
    },
    {
      icon: TruckIcon,
      title: 'Fast & Secure Delivery',
      description: 'Lightning-fast shipping with secure packaging to ensure your products arrive safely.'
    },
    {
      icon: TrophyIcon,
      title: 'Award-Winning Service',
      description: 'Recognized for excellence in customer service and innovative shopping experiences.'
    }
  ];

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

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-slate-600 rounded-full blur-3xl"></div>
      </div>

      <motion.div 
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div 
            className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4"
            variants={itemVariants}
          >
            <ShoppingBagIcon className="w-4 h-4 mr-2" />
            About Our Shop
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
            variants={itemVariants}
          >
            Your Trusted Shopping 
            <span className="text-blue-600"> Destination</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            We're more than just an online store. We're your partners in discovering amazing products that enhance your lifestyle and bring joy to your everyday moments.
          </motion.p>
        </div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              className="text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{stat.number}</div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Left Content */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Built on Trust, Driven by Excellence
            </h3>
            
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Founded with a simple mission: to make online shopping a delightful experience for everyone. We believe that great products should be accessible, affordable, and delivered with exceptional service.
              </p>
              
              <p>
                Our journey began three years ago when we recognized the gap between what customers wanted and what was available in the market. Today, we've grown into a trusted platform serving over 50,000 satisfied customers across the country.
              </p>
              
              <p>
                From the latest electronics and gadgets to stylish fashion and home décor, we curate every item in our collection with the same care and attention you'd expect from your most trusted friend.
              </p>
            </div>

            {/* CTA Button */}
            <motion.div 
              className="mt-8"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group"
              >
                Know More About Us
                <motion.svg 
                  className="ml-2 w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image/Visual */}
          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            <div className="relative bg-gradient-to-br from-blue-600 to-slate-700 rounded-3xl p-8 shadow-2xl">
              {/* Placeholder for actual image - replace with your shop image */}
              <div className="aspect-square bg-gradient-to-br from-white/10 to-white/5 rounded-2xl flex items-center justify-center mb-6">
                <div className="text-center">
                  <ShoppingBagIcon className="w-24 h-24 text-white/80 mx-auto mb-4" />
                  <div className="text-white/90 text-lg font-semibold">Your Shop Image</div>
                  <div className="text-white/70 text-sm">Replace with actual photo</div>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div 
                className="absolute -top-4 -right-4 bg-yellow-400 text-slate-900 text-sm font-bold px-4 py-2 rounded-full shadow-lg"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                ⭐ Top Rated
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -left-4 bg-green-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg"
                animate={{ 
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                🚀 Fast Growing
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-xl mb-4">
                <feature.icon className="w-6 h-6" />
              </div>
              
              <h4 className="text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h4>
              
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div 
          className="mt-20 text-center bg-gradient-to-r from-blue-600 to-slate-700 rounded-3xl p-12 text-white"
          variants={itemVariants}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Shopping?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers and discover why we're the preferred choice for online shopping.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/products"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors duration-300"
              >
                Explore Products
                <ShoppingBagIcon className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Contact Us
                <HeartIcon className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
