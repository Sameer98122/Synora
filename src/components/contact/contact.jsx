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
      <section className="relative bg-white overflow-hidden min-h-screen">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Animated SVG blobs */}
          <motion.div
            animate={{ scale: [1, 1.07, 1], rotate: [0, 12, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20 blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.04, 1], rotate: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-full opacity-20 blur-3xl"
          />
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `linear-gradient(#2563eb 1px, transparent 1px), linear-gradient(90deg, #2563eb 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        <Navbar />
        {/* Main content container */}
        <div className="relative container mx-auto px-6 lg:px-8 py-20 lg:py-28 z-10">
          <div className="max-w-7xl mx-auto">
            {/* Hero content */}
            <motion.div
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 1 } },
              }}
              className="text-center mb-16"
            >
              {/* Tag */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
                <ShoppingBag className="w-4 h-4 text-blue-600" />
                <span className="text-blue-700 text-sm font-semibold uppercase tracking-wide">Customer Support</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                We're Here to
                <span className="block text-blue-600">Help You Shop</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
                Have questions about products, orders, or returns? Our dedicated support team is ready to assist you with any inquiries.
              </p>
            </motion.div>
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
                className="group relative bg-white/30 backdrop-blur-lg border border-blue-500 rounded-3xl p-8 hover:from-blue-700 hover:via-blue-800 hover:to-blue-700 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/60 transition-all duration-500 cursor-pointer hover:scale-105 mb-8 overflow-hidden shadow-xl"
              >
                {/* Animated background shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 pointer-events-none"></div>
                <div className="relative flex flex-col items-center justify-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:shadow-blue-300/50">
                    <Mail className="w-8 h-8 text-blue-600 transition-colors" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-bold text-blue-700 text-lg mb-3 group-hover:scale-105 transition-transform duration-300">Email Support</h3>
                    <a
                      href="mailto:coalesceglobal523@gmail.com"
                      className="inline-block text-2xl md:text-3xl font-bold text-blue-700 hover:text-blue-900 transition-all duration-300 underline decoration-white/60 hover:decoration-white decoration-4 underline-offset-4 group-hover:tracking-wider"
                    >
                      coalesceglobal523@gmail.com
                    </a>
                    <p className="text-blue-500 text-sm mt-2">We'll respond within 24 hours</p>
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
                  className="group relative bg-white/30 backdrop-blur-lg border border-blue-500 rounded-2xl p-6 hover:from-blue-700 hover:via-blue-800 hover:to-blue-700 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-600/60 transition-all duration-500 cursor-pointer hover:scale-105 overflow-hidden shadow-md"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 pointer-events-none"></div>
                  <div className="relative flex flex-col items-center justify-center gap-3 text-center">
                    <div className="flex-shrink-0 w-14 h-14 bg-white rounded-xl flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-md group-hover:shadow-xl group-hover:shadow-blue-300/50">
                      <Phone className="w-7 h-7 text-blue-600 transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-bold text-blue-700 mb-2 text-lg group-hover:scale-105 transition-transform duration-300">Call Us</h3>
                      <a href="tel:+15551234567" className="text-base md:text-lg text-blue-700 font-bold hover:text-blue-900 transition-all duration-300 underline decoration-white/60 hover:decoration-white decoration-2 underline-offset-2 group-hover:tracking-wide">
                        +91 9167839090 / 9167729090
                      </a>
                      <p className="text-blue-500 text-xs mt-1">Toll-Free</p>
                    </div>
                  </div>
                </motion.div>
                {/* Store Location card */}
                <motion.div
                  custom={2}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  className="group relative bg-white/30 backdrop-blur-lg border border-blue-500 rounded-2xl p-6 hover:from-blue-700 hover:via-blue-800 hover:to-blue-700 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-600/60 transition-all duration-500 cursor-pointer hover:scale-105 overflow-hidden shadow-md"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 pointer-events-none"></div>
                  <div className="relative flex flex-col items-center justify-center gap-3 text-center">
                    <div className="flex-shrink-0 w-14 h-14 bg-white rounded-xl flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-md group-hover:shadow-xl group-hover:shadow-blue-300/50">
                      <MapPin className="w-7 h-7 text-blue-600 transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-bold text-blue-700 mb-2 text-lg group-hover:scale-105 transition-transform duration-300">Visit Store</h3>
                      <p className="text-base md:text-lg text-blue-700 font-bold group-hover:tracking-wide transition-all duration-300">
                        Kalyan, Maharashtra
                      </p>
                      <p className="text-blue-500 text-xs mt-1">Showroom Open</p>
                    </div>
                  </div>
                </motion.div>
                {/* Business Hours card */}
                <motion.div
                  custom={3}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  className="group relative bg-white/30 backdrop-blur-lg border border-blue-500 rounded-2xl p-6 hover:from-blue-700 hover:via-blue-800 hover:to-blue-700 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-600/60 transition-all duration-500 cursor-pointer hover:scale-105 overflow-hidden shadow-md"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 pointer-events-none"></div>
                  <div className="relative flex flex-col items-center justify-center gap-3 text-center">
                    <div className="flex-shrink-0 w-14 h-14 bg-white rounded-xl flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-md group-hover:shadow-xl group-hover:shadow-blue-300/50">
                      <Clock className="w-7 h-7 text-blue-600 transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-bold text-blue-700 mb-2 text-lg group-hover:scale-105 transition-transform duration-300">Business Hours</h3>
                      <p className="text-base md:text-lg text-blue-700 font-bold group-hover:tracking-wide transition-all duration-300">
                        Mon-Sat: 9AM-8PM
                      </p>
                      <p className="text-blue-500 text-xs mt-1">Sunday: 10AM-6PM</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            {/* Feature boxes for ecommerce */}
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
              <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 shadow-sm">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-4 shadow-lg shadow-blue-600/30">
                  <ShoppingBag className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Order Assistance</h3>
                <p className="text-gray-600">Track orders, manage returns, and get shipping updates instantly</p>
              </div>
              {/* Live Chat */}
              <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 shadow-sm">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-4 shadow-lg shadow-blue-600/30">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Live Chat</h3>
                <p className="text-gray-600">Chat with our team in real-time for instant product advice</p>
              </div>
              {/* 24/7 Support */}
              <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 shadow-sm">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-4 shadow-lg shadow-blue-600/30">
                  <Headphones className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Customer Care</h3>
                <p className="text-gray-600">Dedicated support team ready to help with any questions</p>
              </div>
            </motion.div>
          </div>
        </div>
        {/* Bottom wave decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-50 to-transparent"></div>
        <Footer />
      </section>
    </>
  );
}