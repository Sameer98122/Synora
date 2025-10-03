'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDownIcon, 
  Bars3Icon, 
  XMarkIcon,
  ShoppingBagIcon,
  SparklesIcon,
  UserCircleIcon
} from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  const productCategories = [
    { name: 'Home Decor', href: '/products/home-decor', icon: '🏠', description: 'Beautiful items for your home' },
    { name: 'Fashion & Clothes', href: '/products/fashion-clothes', icon: '👕', description: 'Latest trends in fashion' },
    { name: 'Accessories', href: '/products/accessories', icon: '👜', description: 'Stylish accessories' },
    { name: 'Electronics & Gadgets', href: '/products/electronics-gadgets', icon: '📱', description: 'Latest tech products' }
  ];

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-slate-200/50' 
          : 'bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 border-b border-blue-800/30'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link 
              href="/" 
              className={`flex items-center space-x-3 text-3xl font-bold transition-all duration-300 ${
                scrolled ? 'text-slate-900 hover:text-blue-600' : 'text-white hover:text-blue-300'
              }`}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <ShoppingBagIcon className="w-8 h-8" />
              </motion.div>
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                EasyShop
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {/* Home */}
            <Link href="/" className={`px-6 py-3 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 ${
              scrolled ? 'text-slate-700 hover:text-blue-600 hover:bg-blue-50' : 'text-slate-200 hover:text-white hover:bg-white/10'
            }`}>
              Home
            </Link>

            {/* About */}
            <Link href="/about" className={`px-6 py-3 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 ${
              scrolled ? 'text-slate-700 hover:text-blue-600 hover:bg-blue-50' : 'text-slate-200 hover:text-white hover:bg-white/10'
            }`}>
              About
            </Link>

            {/* Products */}
            <motion.div className="relative dropdown-container">
              <div className="flex items-center">
                {/* Main Products Link */}
                <Link
                  href="/products"
                  className={`flex items-center px-6 py-3 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 ${
                    scrolled ? 'text-slate-700 hover:text-blue-600 hover:bg-blue-50' : 'text-slate-200 hover:text-white hover:bg-white/10'
                  }`}
                  onClick={closeMenu}
                >
                  <SparklesIcon className="w-5 h-5 mr-2" />
                  Products
                </Link>

                {/* Dropdown Toggle */}
                <motion.button
                  onClick={toggleDropdown}
                  className={`ml-1 p-2 rounded-lg transition-all duration-300 ${
                    scrolled ? 'text-slate-700 hover:text-blue-600 hover:bg-blue-50' : 'text-slate-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <ChevronDownIcon className={`h-5 w-5 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </motion.button>
              </div>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div 
                    className="absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-200/50 py-2 z-50"
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    {productCategories.map((item, index) => (
                      <motion.div key={item.name} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }}>
                        <Link
                          href={item.href}
                          className="flex items-center px-6 py-4 text-slate-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 hover:text-blue-600 transition-all duration-300 group"
                          onClick={closeMenu}
                        >
                          <span className="text-2xl mr-4 group-hover:scale-110 transition-transform duration-200">{item.icon}</span>
                          <div>
                            <div className="font-semibold text-base">{item.name}</div>
                            <div className="text-sm text-slate-500 group-hover:text-blue-500">{item.description}</div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Contact */}
            <Link href="/contact" className={`px-6 py-3 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 ${
              scrolled ? 'text-slate-700 hover:text-blue-600 hover:bg-blue-50' : 'text-slate-200 hover:text-white hover:bg-white/10'
            }`}>
              Contact
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/login" className={`flex items-center px-6 py-3 rounded-xl text-lg font-semibold transition-all duration-300 border-2 ${
              scrolled ? 'text-slate-700 border-slate-300 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50' : 'text-white border-white/30 hover:border-white hover:bg-white/10'
            }`}>
              <UserCircleIcon className="w-5 h-5 mr-2" /> Login
            </Link>
            <Link href="/signup" className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-lg font-semibold rounded-xl transition-all duration-300 shadow-lg">
              <SparklesIcon className="w-5 h-5 mr-2" /> Sign Up
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <motion.button onClick={toggleMenu} className={`p-3 rounded-xl ${scrolled ? 'text-slate-700 hover:text-blue-600 hover:bg-blue-50' : 'text-white hover:bg-white/10'}`}>
              {isOpen ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="lg:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 pt-4 pb-6 space-y-2 bg-white/95 rounded-b-2xl shadow-xl">
                <Link href="/" className="block px-6 py-4 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl text-lg font-semibold" onClick={closeMenu}>Home</Link>
                <Link href="/about" className="block px-6 py-4 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl text-lg font-semibold" onClick={closeMenu}>About</Link>

                {/* Mobile Products with Link + Dropdown */}
                <div className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <Link
                      href="/products"
                      className="w-full flex items-center px-6 py-4 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl text-lg font-semibold"
                      onClick={closeMenu}
                    >
                      <SparklesIcon className="w-5 h-5 mr-3" /> Products
                    </Link>
                    <button onClick={toggleDropdown} className="p-2 text-slate-700">
                      <ChevronDownIcon className={`h-5 w-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                  </div>

                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div 
                        className="pl-6 pr-2 space-y-1 mt-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {productCategories.map((item, index) => (
                          <Link key={item.name} href={item.href} className="flex items-center px-4 py-3 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg" onClick={closeMenu}>
                            <span className="text-xl mr-3">{item.icon}</span>
                            <div>
                              <div className="font-medium">{item.name}</div>
                              <div className="text-xs text-slate-400">{item.description}</div>
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link href="/contact" className="block px-6 py-4 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl text-lg font-semibold" onClick={closeMenu}>Contact</Link>

                {/* Mobile Auth */}
                <Link href="/login" className="flex items-center justify-center w-full px-6 py-4 text-slate-700 border border-slate-200 rounded-xl font-semibold hover:text-blue-600 hover:bg-blue-50" onClick={closeMenu}><UserCircleIcon className="w-5 h-5 mr-2" /> Login</Link>
                <Link href="/signup" className="flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold" onClick={closeMenu}><SparklesIcon className="w-5 h-5 mr-2" /> Sign Up</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
