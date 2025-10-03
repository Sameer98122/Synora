'use client';

import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, Loader2, Sparkles } from 'lucide-react';

export default function AnimatedLoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Login:', { email, password });
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-cyan-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-64 h-64 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-300/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-cyan-200/30 rounded-full animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-white/30 rounded-full animate-bounce" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
      </div>

      {/* Login Card */}
      <div className="relative w-full max-w-md">
        {/* Glow effect behind card */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
        
        <div className="relative bg-white rounded-3xl shadow-2xl p-8 backdrop-blur-xl border border-white/20">
          {/* Header with sparkle */}
          <div className="text-center mb-8 relative">
            <div className="absolute -top-2 -right-2 text-yellow-400 animate-pulse">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="inline-block p-5 bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-500 rounded-2xl mb-4 transform transition-all duration-500 hover:rotate-12 hover:scale-110 shadow-lg shadow-blue-500/50">
              <Lock className="w-10 h-10 text-white animate-pulse" style={{ animationDuration: '2s' }} />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 bg-clip-text text-transparent mb-2 tracking-tight">
              Welcome Back
            </h1>
            <p className="text-gray-600 font-medium">Sign in to continue your journey</p>
          </div>

          {/* Form */}
          <div className="space-y-5">
            {/* Email Field */}
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative group">
                <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${
                  focusedField === 'email' ? 'text-blue-600 scale-125 rotate-12' : 'text-gray-400'
                }`}>
                  <Mail className="w-5 h-5" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl transition-all duration-300 outline-none font-medium ${
                    focusedField === 'email'
                      ? 'border-blue-500 bg-blue-50 shadow-xl shadow-blue-200 scale-[1.02]'
                      : 'border-gray-200 bg-gray-50 hover:border-blue-300'
                  }`}
                  placeholder="Enter your email"
                />
                {focusedField === 'email' && (
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-10 pointer-events-none"></div>
                )}
              </div>
            </div>

            {/* Password Field */}
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative group">
                <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${
                  focusedField === 'password' ? 'text-blue-600 scale-125 rotate-12' : 'text-gray-400'
                }`}>
                  <Lock className="w-5 h-5" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setFocusedField('password')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full pl-12 pr-12 py-4 border-2 rounded-xl transition-all duration-300 outline-none font-medium ${
                    focusedField === 'password'
                      ? 'border-blue-500 bg-blue-50 shadow-xl shadow-blue-200 scale-[1.02]'
                      : 'border-gray-200 bg-gray-50 hover:border-blue-300'
                  }`}
                  placeholder="Enter your password"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-all duration-300 hover:scale-125 hover:rotate-12"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
                {focusedField === 'password' && (
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-10 pointer-events-none"></div>
                )}
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between pt-2">
              <label className="flex items-center group cursor-pointer">
                <input
                  type="checkbox"
                  className="w-5 h-5 text-blue-600 border-2 border-gray-300 rounded focus:ring-blue-500 transition-all duration-200 cursor-pointer hover:scale-110"
                />
                <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                  Remember me
                </span>
              </label>
              <button className="text-sm text-blue-600 hover:text-blue-700 font-semibold transition-all duration-300 hover:underline hover:scale-105">
                Forgot password?
              </button>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-blue-500/50 hover:shadow-2xl hover:shadow-blue-600/60 transform transition-all duration-300 hover:scale-[1.03] active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-6 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center gap-2">
                {isLoading ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  'Sign In'
                )}
              </span>
            </button>
          </div>

          {/* Divider */}
          <div className="relative my-7">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t-2 border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500 font-semibold">Or continue with</span>
            </div>
          </div>

          {/* Social Login */}
          <div className="w-full">
            <button className="w-full flex items-center justify-center gap-3 px-4 py-4 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-md hover:shadow-xl group">
              <svg className="w-7 h-7 transition-transform duration-300 group-hover:rotate-12" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="font-bold text-gray-700 text-base">Continue with Google</span>
            </button>
          </div>

          {/* Sign Up Link */}
          <p className="text-center mt-7 text-sm text-gray-600 font-medium">
            Don't have an account?{' '}
            <button className="text-blue-600 hover:text-blue-700 font-bold transition-all duration-300 hover:underline hover:scale-105 inline-block">
              Sign up now
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}