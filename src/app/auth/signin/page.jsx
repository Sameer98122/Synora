'use client';

import { useState, useEffect } from 'react';
import { Mail, Lock, Eye, EyeOff, Loader2, Sparkles, User, Phone, ArrowRight, Chrome, Github, Shield, CheckCircle2 } from 'lucide-react';

export default function EnhancedSignupForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [passwordStrength, setPasswordStrength] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const strength = calculatePasswordStrength(formData.password);
    setPasswordStrength(strength);
  }, [formData.password]);

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (password.length >= 12) strength += 25;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength += 25;
    if (/[0-9]/.test(password) && /[^a-zA-Z0-9]/.test(password)) strength += 25;
    return strength;
  };

  const getStrengthColor = () => {
    if (passwordStrength <= 25) return 'bg-red-500';
    if (passwordStrength <= 50) return 'bg-orange-500';
    if (passwordStrength <= 75) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getStrengthText = () => {
    if (passwordStrength <= 25) return 'Weak';
    if (passwordStrength <= 50) return 'Fair';
    if (passwordStrength <= 75) return 'Good';
    return 'Strong';
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Signup:', formData);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 p-4 relative overflow-hidden">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-[800px] h-[800px] rounded-full blur-3xl opacity-30 transition-all duration-1000"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(147,197,253,0.2) 50%, transparent 100%)',
            left: `${mousePosition.x - 400}px`,
            top: `${mousePosition.y - 400}px`,
          }}
        ></div>
        
        {/* Animated orbs */}
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-blue-300/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-blue-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-80 h-80 top-1/3 right-1/4 bg-cyan-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/40 rounded-full animate-bounce"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 4}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          ></div>
        ))}

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]"></div>
      </div>

      {/* Signup Card */}
      <div className="relative w-full max-w-2xl my-8">
        {/* Glassmorphic glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 rounded-3xl blur-2xl opacity-40 animate-pulse"></div>
        
        <div className="relative bg-white/90 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 border border-blue-100">
          {/* Header */}
          <div className="text-center mb-6 relative">
            <div className="absolute -top-4 -right-4 animate-bounce">
              <Sparkles className="w-8 h-8 text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
            </div>
            <div className="absolute -top-4 -left-4 animate-bounce" style={{ animationDelay: '0.5s' }}>
              <Sparkles className="w-6 h-6 text-cyan-500 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
            </div>
            
            <div className="inline-block p-4 bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-500 rounded-2xl mb-4 transform transition-all duration-500 hover:rotate-[360deg] hover:scale-110 shadow-2xl shadow-blue-500/50 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-blue-600 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
              <User className="w-12 h-12 text-white relative z-10" />
            </div>
            
            <h1 className="text-5xl font-black bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 bg-clip-text text-transparent mb-3 tracking-tight drop-shadow-lg">
              Create Account
            </h1>
            <p className="text-blue-700 font-medium text-lg">Join us today and get started</p>
          </div>

          <div className="space-y-5">
            {/* Name and Email Row */}
            <div className="grid md:grid-cols-2 gap-5">
              {/* Full Name Field */}
              <div className="relative group">
                <label className="block text-sm font-bold text-blue-900 mb-2 ml-1">
                  Full Name
                </label>
                <div className="relative">
                  <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-500 ${
                    focusedField === 'fullName' ? 'text-blue-600 scale-125 rotate-[360deg]' : 'text-blue-400'
                  }`}>
                    <User className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleChange('fullName', e.target.value)}
                    onFocus={() => setFocusedField('fullName')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full pl-12 pr-4 py-3.5 bg-white border-2 rounded-2xl transition-all duration-500 outline-none font-medium text-blue-900 placeholder-blue-400 ${
                      focusedField === 'fullName'
                        ? 'border-blue-500 bg-blue-50 shadow-[0_0_30px_rgba(59,130,246,0.3)] scale-[1.02] translate-y-[-2px]'
                        : 'border-blue-200 hover:border-blue-300 hover:bg-blue-50/50'
                    }`}
                    placeholder="John Doe"
                  />
                  {focusedField === 'fullName' && (
                    <>
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 pointer-events-none animate-pulse"></div>
                      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-20 blur-lg pointer-events-none"></div>
                    </>
                  )}
                </div>
              </div>

              {/* Email Field */}
              <div className="relative group">
                <label className="block text-sm font-bold text-blue-900 mb-2 ml-1">
                  Email Address
                </label>
                <div className="relative">
                  <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-500 ${
                    focusedField === 'email' ? 'text-blue-600 scale-125 rotate-[360deg]' : 'text-blue-400'
                  }`}>
                    <Mail className="w-5 h-5" />
                  </div>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full pl-12 pr-4 py-3.5 bg-white border-2 rounded-2xl transition-all duration-500 outline-none font-medium text-blue-900 placeholder-blue-400 ${
                      focusedField === 'email'
                        ? 'border-blue-500 bg-blue-50 shadow-[0_0_30px_rgba(59,130,246,0.3)] scale-[1.02] translate-y-[-2px]'
                        : 'border-blue-200 hover:border-blue-300 hover:bg-blue-50/50'
                    }`}
                    placeholder="you@example.com"
                  />
                  {focusedField === 'email' && (
                    <>
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 pointer-events-none animate-pulse"></div>
                      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-20 blur-lg pointer-events-none"></div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Phone Field */}
            <div className="relative group">
              <label className="block text-sm font-bold text-blue-900 mb-2 ml-1">
                Phone Number
              </label>
              <div className="relative">
                <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-500 ${
                  focusedField === 'phone' ? 'text-blue-600 scale-125 rotate-[360deg]' : 'text-blue-400'
                }`}>
                  <Phone className="w-5 h-5" />
                </div>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  onFocus={() => setFocusedField('phone')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full pl-12 pr-4 py-3.5 bg-white border-2 rounded-2xl transition-all duration-500 outline-none font-medium text-blue-900 placeholder-blue-400 ${
                    focusedField === 'phone'
                      ? 'border-blue-500 bg-blue-50 shadow-[0_0_30px_rgba(59,130,246,0.3)] scale-[1.02] translate-y-[-2px]'
                      : 'border-blue-200 hover:border-blue-300 hover:bg-blue-50/50'
                  }`}
                  placeholder="+1 (555) 000-0000"
                />
                {focusedField === 'phone' && (
                  <>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 pointer-events-none animate-pulse"></div>
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-20 blur-lg pointer-events-none"></div>
                  </>
                )}
              </div>
            </div>

            {/* Password Fields Row */}
            <div className="grid md:grid-cols-2 gap-5">
              {/* Password Field */}
              <div className="relative group">
                <label className="block text-sm font-bold text-blue-900 mb-2 ml-1">
                  Password
                </label>
                <div className="relative">
                  <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-500 ${
                    focusedField === 'password' ? 'text-blue-600 scale-125 rotate-[360deg]' : 'text-blue-400'
                  }`}>
                    <Lock className="w-5 h-5" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => handleChange('password', e.target.value)}
                    onFocus={() => setFocusedField('password')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full pl-12 pr-14 py-3.5 bg-white border-2 rounded-2xl transition-all duration-500 outline-none font-medium text-blue-900 placeholder-blue-400 ${
                      focusedField === 'password'
                        ? 'border-blue-500 bg-blue-50 shadow-[0_0_30px_rgba(59,130,246,0.3)] scale-[1.02] translate-y-[-2px]'
                        : 'border-blue-200 hover:border-blue-300 hover:bg-blue-50/50'
                    }`}
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-400 hover:text-blue-600 transition-all duration-500 hover:scale-125 hover:rotate-[360deg] p-1"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                  {focusedField === 'password' && (
                    <>
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 pointer-events-none animate-pulse"></div>
                      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-20 blur-lg pointer-events-none"></div>
                    </>
                  )}
                </div>
                {formData.password && (
                  <div className="mt-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-semibold text-blue-700">Password Strength</span>
                      <span className={`text-xs font-bold ${passwordStrength > 75 ? 'text-green-600' : passwordStrength > 50 ? 'text-yellow-600' : 'text-red-600'}`}>
                        {getStrengthText()}
                      </span>
                    </div>
                    <div className="w-full bg-blue-100 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full ${getStrengthColor()} transition-all duration-500 rounded-full`}
                        style={{ width: `${passwordStrength}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>

              {/* Confirm Password Field */}
              <div className="relative group">
                <label className="block text-sm font-bold text-blue-900 mb-2 ml-1">
                  Confirm Password
                </label>
                <div className="relative">
                  <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-500 ${
                    focusedField === 'confirmPassword' ? 'text-blue-600 scale-125 rotate-[360deg]' : 'text-blue-400'
                  }`}>
                    <Shield className="w-5 h-5" />
                  </div>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={(e) => handleChange('confirmPassword', e.target.value)}
                    onFocus={() => setFocusedField('confirmPassword')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full pl-12 pr-14 py-3.5 bg-white border-2 rounded-2xl transition-all duration-500 outline-none font-medium text-blue-900 placeholder-blue-400 ${
                      focusedField === 'confirmPassword'
                        ? 'border-blue-500 bg-blue-50 shadow-[0_0_30px_rgba(59,130,246,0.3)] scale-[1.02] translate-y-[-2px]'
                        : 'border-blue-200 hover:border-blue-300 hover:bg-blue-50/50'
                    }`}
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-400 hover:text-blue-600 transition-all duration-500 hover:scale-125 hover:rotate-[360deg] p-1"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                  {focusedField === 'confirmPassword' && (
                    <>
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 pointer-events-none animate-pulse"></div>
                      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-20 blur-lg pointer-events-none"></div>
                    </>
                  )}
                </div>
                {formData.confirmPassword && formData.password === formData.confirmPassword && (
                  <div className="mt-2 flex items-center gap-1 text-green-600">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="text-xs font-semibold">Passwords match</span>
                  </div>
                )}
              </div>
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-start pt-2 bg-blue-50/50 p-4 rounded-2xl border border-blue-100">
              <input
                type="checkbox"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="w-5 h-5 text-blue-600 bg-white border-2 border-blue-300 rounded-lg focus:ring-blue-500 focus:ring-2 transition-all duration-300 cursor-pointer hover:scale-110 hover:border-blue-500 mt-0.5"
              />
              <label className="ml-3 text-sm text-blue-700 leading-relaxed">
                I agree to the{' '}
                <button type="button" className="text-blue-600 hover:text-blue-800 font-bold hover:underline transition-colors">
                  Terms and Conditions
                </button>
                {' '}and{' '}
                <button type="button" className="text-blue-600 hover:text-blue-800 font-bold hover:underline transition-colors">
                  Privacy Policy
                </button>
              </label>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={isLoading || !agreedToTerms}
              className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 text-white py-4 rounded-2xl font-bold text-lg shadow-2xl shadow-blue-500/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transform transition-all duration-500 hover:scale-[1.03] hover:translate-y-[-4px] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 mt-6 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-700 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-[shimmer_3s_linear_infinite] group-hover:animate-[shimmer_1s_linear_infinite]"></div>
              <span className="relative z-10 flex items-center gap-3">
                {isLoading ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin" />
                    <span>Creating your account...</span>
                  </>
                ) : (
                  <>
                    <span>Create Account</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </span>
            </button>
          </div>

          {/* Divider */}
          <div className="relative my-7">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t-2 border-blue-200"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-white text-blue-600 font-bold text-sm">Or sign up with</span>
            </div>
          </div>

          {/* Social Signup */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 px-4 py-4 bg-white border-2 border-blue-200 rounded-2xl hover:border-blue-400 hover:bg-blue-50 transition-all duration-500 hover:scale-105 hover:translate-y-[-2px] active:scale-95 shadow-lg hover:shadow-2xl hover:shadow-blue-200 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Chrome className="w-6 h-6 text-blue-600 relative z-10 group-hover:rotate-[360deg] transition-transform duration-700" />
              <span className="font-bold text-blue-700 text-sm relative z-10">Google</span>
            </button>
            
            <button className="flex items-center justify-center gap-2 px-4 py-4 bg-white border-2 border-blue-200 rounded-2xl hover:border-blue-400 hover:bg-blue-50 transition-all duration-500 hover:scale-105 hover:translate-y-[-2px] active:scale-95 shadow-lg hover:shadow-2xl hover:shadow-blue-200 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Github className="w-6 h-6 text-blue-600 relative z-10 group-hover:rotate-[360deg] transition-transform duration-700" />
              <span className="font-bold text-blue-700 text-sm relative z-10">Github</span>
            </button>
          </div>

          {/* Sign In Link */}
          <p className="text-center mt-7 text-sm text-blue-600 font-medium">
            Already have an account?{' '}
            <button type="button" className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text font-bold transition-all duration-300 hover:from-blue-700 hover:to-cyan-700 relative group">
              Sign in
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </button>
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -250% 0;
          }
          100% {
            background-position: 250% 0;
          }
        }
      `}</style>
    </div>
  );
}