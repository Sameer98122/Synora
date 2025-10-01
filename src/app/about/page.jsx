'use client';

import Navbar from '@/components/layout/navbar';
import { useState, useEffect } from 'react';

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({...prev, [entry.target.id]: entry.isIntersecting}));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id^="section-"]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100"></div>
        <div 
          className="absolute top-0 -left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        ></div>
        <div 
          className="absolute top-1/4 -right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.2}px)`, animationDelay: '1s' }}
        ></div>
      </div>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}></div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="mb-8 inline-block">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
          </div>
          <h1 
            className="text-6xl sm:text-8xl font-black mb-6 text-white tracking-tight"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">Story</span>
          </h1>
          <p 
            className="text-xl sm:text-3xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-light"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          >
            Delivering quality products and exceptional shopping experiences since day one
          </p>
          <div className="mt-12">
            <button className="group relative px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <span className="relative z-10">Shop Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                Browse Products →
              </span>
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Our Mission */}
      <div id="section-mission" className="relative py-32 px-6">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible['section-mission'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-12 sm:p-16 border border-blue-100">
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full filter blur-2xl opacity-40"></div>
            
            <div className="relative">
              <span className="text-blue-600 font-bold text-sm uppercase tracking-wider">Our Mission</span>
              <h2 className="text-4xl sm:text-6xl font-black text-gray-900 mb-8 mt-4">
                Your Trusted
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400"> Shopping Partner</span>
              </h2>
                 <p className="text-xl text-gray-700 leading-relaxed mb-6">
                We believe shopping should be simple, enjoyable, and trustworthy. That's why we've built an e-commerce platform that puts you first—offering premium quality products, competitive prices, and an exceptional customer experience.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                From browsing to checkout, every step is designed to make your shopping journey smooth and satisfying. We're not just selling products; we're building lasting relationships with our customers.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Our dedicated team works tirelessly to source the finest products from trusted manufacturers and brands. We carefully curate our collection to ensure that every item meets our high standards of quality, durability, and value for money.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                We understand that shopping online requires trust, and we take that responsibility seriously. With transparent pricing, detailed product descriptions, genuine customer reviews, and responsive support, we strive to exceed your expectations at every touchpoint.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Shop With Us */}
      <div id="section-features" className="relative py-32 px-6 bg-gradient-to-b from-transparent to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible['section-features'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <h2 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6">
              Why Shop <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">With Us?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the best online shopping experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "🚚", title: "Free Shipping", desc: "Free delivery on orders above ₹499. Fast and reliable nationwide", color: "from-blue-500 to-blue-600" },
              { icon: "💳", title: "Secure Payments", desc: "100% secure transactions with multiple payment options", color: "from-blue-600 to-blue-700" },
              { icon: "↩️", title: "Easy Returns", desc: "30-day hassle-free returns and exchange policy", color: "from-blue-400 to-blue-500" },
              { icon: "⭐", title: "Premium Quality", desc: "Authentic products from trusted brands and sellers", color: "from-blue-500 to-blue-600" },
              { icon: "🎁", title: "Best Deals", desc: "Exclusive offers, discounts, and seasonal sales", color: "from-blue-600 to-blue-700" },
              { icon: "💬", title: "24/7 Support", desc: "Friendly customer service always ready to help", color: "from-blue-400 to-blue-500" }
            ].map((feature, i) => (
              <div
                key={i}
                className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 ${isVisible['section-features'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className="relative p-8">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div id="section-stats" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 ${isVisible['section-stats'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            {[
              { num: "50K+", label: "Happy Customers" },
              { num: "10K+", label: "Products" },
              { num: "4.8★", label: "Average Rating" },
              { num: "100+", label: "Cities Served" }
            ].map((stat, i) => (
              <div key={i} className="text-center p-8 bg-white rounded-2xl shadow-xl border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:scale-105">
                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 mb-2">
                  {stat.num}
                </div>
                <div className="text-gray-600 font-semibold text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div id="section-values" className="relative py-32 px-6 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className={`relative max-w-6xl mx-auto transition-all duration-1000 ${isVisible['section-values'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-black mb-6">
              Our <span className="text-blue-300">Core Values</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Quality First", desc: "We never compromise on product quality and authenticity" },
              { title: "Customer Trust", desc: "Building long-term relationships through transparency and reliability" },
              { title: "Fast Delivery", desc: "Getting your orders to you quickly and safely" }
            ].map((value, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-blue-100 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Customer Reviews Preview */}
      <div className="relative py-32 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6">
              What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Customers Say</span>
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Priya Sharma", rating: 5, text: "Amazing quality products and super fast delivery! Will definitely order again." },
              { name: "Rahul Verma", rating: 5, text: "Best shopping experience! Customer support was very helpful and responsive." },
              { name: "Anita Singh", rating: 5, text: "Great prices and authentic products. My go-to online store now!" }
            ].map((review, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100 hover:shadow-xl transition-all duration-300">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                <p className="font-bold text-gray-900">- {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Start Shopping?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Explore thousands of products at amazing prices
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <button className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
              <span className="relative z-10">Browse Products</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
            <button className="px-10 py-5 bg-white text-blue-600 rounded-full font-bold text-lg border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg">
              View Deals
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
    </>
  );
}