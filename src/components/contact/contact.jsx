"use client";

import { useState, useEffect } from 'react';
import { Mail, MapPin, Phone, Clock, Headphones, ShoppingBag, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '../layout/navbar';
import Footer from '../footer/footer';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Card animation variants for staggered animations
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.2 + i * 0.15 },
    }),
  };

  return (
    <>
      {/* Header Section */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative mt-15">
        <Navbar />
<<<<<<< HEAD
        
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8"
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
              <ShoppingBag className="w-4 h-4 mr-2" />
              Customer Support
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              We're Here to
              <span className="block text-blue-400 mt-2">Help You Shop</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Have questions about products, orders, or returns? Our dedicated support team is ready to assist you with any inquiries.
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Cards Section */}
      <section className="relative bg-white overflow-hidden min-h-screen">
        <div className="relative container mx-auto px-6 lg:px-8 py-20 lg:py-28 z-10">
=======
        {/* Main content container */}
        <div className="relative container mx-auto px-6 lg:px-8 py-20 lg:py-28 z-10 ">
>>>>>>> ece991d4e8c23db29b6ce87870778866724f2116
          <div className="max-w-7xl mx-auto">
            {/* Contact cards grid */}
            <motion.div
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } },
              }}
            >
              {/* Email card */}
              <motion.div
                custom={0}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                className="group relative backdrop-blur-lg border border-blue-200 rounded-3xl p-8 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/60 transition-all duration-500 cursor-pointer hover:scale-105 mb-8 overflow-hidden shadow-xl"
              >
                {/* Animated background shimmer */}
                <div className="absolute inset-0 from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 pointer-events-none"></div>
                <div className="relative flex flex-col items-center justify-center gap-4">
                  <div className="w-16 h-16 bg-blue-100 group-hover:bg-white rounded-2xl flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:shadow-blue-300/50">
                    <Mail className="w-8 h-8 text-blue-600 transition-colors" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-bold text-blue-700 group-hover:text-blue-400 text-lg mb-3 group-hover:scale-105 transition-all duration-300">Email Support</h3>
                    <a
                      href="mailto:coalesceglobal523@gmail.com"
                      className="inline-block text-2xl md:text-3xl font-bold text-blue-700 group-hover:text-blue-300 transition-all duration-300 underline decoration-blue-200 group-hover:decoration-blue-400 decoration-4 underline-offset-4 group-hover:tracking-wider"
                    >
                      coalesceglobal523@gmail.com
                    </a>
                    <p className="text-blue-600 group-hover:text-blue-300 text-sm mt-2 transition-colors duration-300">We'll respond within 24 hours</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Other cards in grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-16">
                {/* Phone card */}
                <motion.div
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  className="group relative backdrop-blur-lg border border-blue-200 rounded-2xl p-6 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-600/60 transition-all duration-500 cursor-pointer hover:scale-105 overflow-hidden shadow-md"
                >
                  <div className="absolute inset-0 from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 pointer-events-none"></div>
                  <div className="relative flex flex-col items-center justify-center gap-3 text-center">
                    <div className="flex-shrink-0 w-14 h-14 bg-blue-100 group-hover:bg-white rounded-xl flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-md group-hover:shadow-xl group-hover:shadow-blue-300/50">
                      <Phone className="w-7 h-7 text-blue-600 transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-bold text-blue-700 group-hover:text-blue-400 mb-2 text-lg group-hover:scale-105 transition-all duration-300">Call Us</h3>
                      <a href="tel:+919167839090" className="text-base md:text-lg text-blue-700 group-hover:text-blue-300 font-bold transition-all duration-300 underline decoration-blue-200 group-hover:decoration-blue-400 decoration-2 underline-offset-2 group-hover:tracking-wide">
                        +91 9167839090 / 9167729090
                      </a>
                      <p className="text-blue-600 group-hover:text-blue-300 text-xs mt-1 transition-colors duration-300">Toll-Free</p>
                    </div>
                  </div>
                </motion.div>
                
                {/* Store Location card */}
                <motion.div
                  custom={2}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  className="group relative backdrop-blur-lg border border-blue-200 rounded-2xl p-6 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-600/60 transition-all duration-500 cursor-pointer hover:scale-105 overflow-hidden shadow-md"
                >
                  <div className="absolute inset-0 from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 pointer-events-none"></div>
                  <div className="relative flex flex-col items-center justify-center gap-3 text-center">
                    <div className="flex-shrink-0 w-14 h-14 bg-blue-100 group-hover:bg-white rounded-xl flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-md group-hover:shadow-xl group-hover:shadow-blue-300/50">
                      <MapPin className="w-7 h-7 text-blue-600 transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-bold text-blue-700 group-hover:text-blue-400 mb-2 text-lg group-hover:scale-105 transition-all duration-300">Visit Store</h3>
                      <p className="text-base md:text-lg text-blue-700 group-hover:text-blue-300 font-bold group-hover:tracking-wide transition-all duration-300">
                        Kalyan, Maharashtra
                      </p>
                      <p className="text-blue-600 group-hover:text-blue-300 text-xs mt-1 transition-colors duration-300">Showroom Open</p>
                    </div>
                  </div>
                </motion.div>
                
                {/* Business Hours card */}
                <motion.div
                  custom={3}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  className="group relative backdrop-blur-lg border border-blue-200 rounded-2xl p-6 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-600/60 transition-all duration-500 cursor-pointer hover:scale-105 overflow-hidden shadow-md"
                >
                  <div className="absolute inset-0 from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 pointer-events-none"></div>
                  <div className="relative flex flex-col items-center justify-center gap-3 text-center">
                    <div className="flex-shrink-0 w-14 h-14 bg-blue-100 group-hover:bg-white rounded-xl flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-md group-hover:shadow-xl group-hover:shadow-blue-300/50">
                      <Clock className="w-7 h-7 text-blue-600 transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-bold text-blue-700 group-hover:text-blue-400 mb-2 text-lg group-hover:scale-105 transition-all duration-300">Business Hours</h3>
                      <p className="text-base md:text-lg text-blue-700 group-hover:text-blue-300 font-bold group-hover:tracking-wide transition-all duration-300">
                        Mon-Sat: 9AM-8PM
                      </p>
                      <p className="text-blue-600 group-hover:text-blue-300 text-xs mt-1 transition-colors duration-300">Sunday: 10AM-6PM</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Feature boxes */}
            <motion.div
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.4 } },
              }}
              className="grid md:grid-cols-3 gap-8 mt-16"
            >
              {/* Order Support */}
              <div className="group text-center p-8 rounded-2xl border border-blue-100 shadow-sm hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-600/60 transition-all duration-500 cursor-pointer hover:scale-105 overflow-hidden relative">
                <div className="absolute inset-0 from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 pointer-events-none"></div>
                <div className="relative inline-flex items-center justify-center w-16 h-16 bg-blue-600 group-hover:bg-white rounded-2xl mb-4 shadow-lg shadow-blue-600/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <ShoppingBag className="w-8 h-8 text-white group-hover:text-blue-600 transition-colors duration-300" />
                </div>
                <h3 className="relative text-xl font-bold text-gray-900 group-hover:text-blue-400 mb-2 transition-colors duration-300">Order Assistance</h3>
                <p className="relative text-gray-600 group-hover:text-blue-200 transition-colors duration-300">Track orders, manage returns, and get shipping updates instantly</p>
              </div>
              
              {/* Live Chat */}
              <div className="group text-center p-8 rounded-2xl border border-blue-100 shadow-sm hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-600/60 transition-all duration-500 cursor-pointer hover:scale-105 overflow-hidden relative">
                <div className="absolute inset-0 from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 pointer-events-none"></div>
                <div className="relative inline-flex items-center justify-center w-16 h-16 bg-blue-600 group-hover:bg-white rounded-2xl mb-4 shadow-lg shadow-blue-600/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <MessageCircle className="w-8 h-8 text-white group-hover:text-blue-600 transition-colors duration-300" />
                </div>
                <h3 className="relative text-xl font-bold text-gray-900 group-hover:text-blue-400 mb-2 transition-colors duration-300">Live Chat</h3>
                <p className="relative text-gray-600 group-hover:text-blue-200 transition-colors duration-300">Connect instantly with our support team for quick assistance</p>
              </div>
              
              {/* 24/7 Support */}
              <div className="group text-center p-8 rounded-2xl border border-blue-100 shadow-sm hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-600/60 transition-all duration-500 cursor-pointer hover:scale-105 overflow-hidden relative">
                <div className="absolute inset-0 from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 pointer-events-none"></div>
                <div className="relative inline-flex items-center justify-center w-16 h-16 bg-blue-600 group-hover:bg-white rounded-2xl mb-4 shadow-lg shadow-blue-600/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Headphones className="w-8 h-8 text-white group-hover:text-blue-600 transition-colors duration-300" />
                </div>
                <h3 className="relative text-xl font-bold text-gray-900 group-hover:text-blue-400 mb-2 transition-colors duration-300">24/7 Available</h3>
                <p className="relative text-gray-600 group-hover:text-blue-200 transition-colors duration-300">Round-the-clock support for all your shopping needs</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
