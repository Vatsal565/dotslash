'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, User, Calendar, Phone } from 'lucide-react';

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading] = useState(false);

  return (
    <div className="min-h-screen bg-level-1 flex items-center justify-center p-4">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,1),rgba(200,200,200,0.2))]" />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md relative"
      >
        <div className="absolute inset-0 bg-level-2 rounded-2xl blur-xl opacity-50 transform -rotate-2" />
        <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-level-2">
          <div className="p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center mb-8"
            >
              <div className="h-20 w-20 bg-level-4 rounded-2xl mx-auto flex items-center justify-center mb-6 shadow-lg">
                <span className="text-3xl font-bold text-white">AV</span>
              </div>
              <h1 className="text-3xl font-bold text-level-4">Join AstroVeda</h1>
              <p className="text-level-3 mt-2">Begin your spiritual journey with us</p>
            </motion.div>

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="text-sm font-medium text-level-4">First Name</label>
                  <div className="relative mt-1">
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-level-2 focus:border-level-4 focus:outline-none pl-12 transition-colors"
                      placeholder="John"
                    />
                    <User className="w-5 h-5 text-level-3 absolute left-4 top-1/2 -translate-y-1/2" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <label className="text-sm font-medium text-level-4">Last Name</label>
                  <div className="relative mt-1">
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-level-2 focus:border-level-4 focus:outline-none pl-12 transition-colors"
                      placeholder="Doe"
                    />
                    <User className="w-5 h-5 text-level-3 absolute left-4 top-1/2 -translate-y-1/2" />
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <label className="text-sm font-medium text-level-4">Email</label>
                <div className="relative mt-1">
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-level-2 focus:border-level-4 focus:outline-none pl-12 transition-colors"
                    placeholder="john@example.com"
                  />
                  <Mail className="w-5 h-5 text-level-3 absolute left-4 top-1/2 -translate-y-1/2" />
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <label className="text-sm font-medium text-level-4">Phone Number</label>
                <div className="relative mt-1">
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-level-2 focus:border-level-4 focus:outline-none pl-12 transition-colors"
                    placeholder="+1 (123) 456-7890"
                  />
                  <Phone className="w-5 h-5 text-level-3 absolute left-4 top-1/2 -translate-y-1/2" />
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <label className="text-sm font-medium text-level-4">Date of Birth</label>
                <div className="relative mt-1">
                  <input
                    type="date"
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-level-2 focus:border-level-4 focus:outline-none pl-12 transition-colors"
                  />
                  <Calendar className="w-5 h-5 text-level-3 absolute left-4 top-1/2 -translate-y-1/2" />
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <label className="text-sm font-medium text-level-4">Password</label>
                <div className="relative mt-1">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-level-2 focus:border-level-4 focus:outline-none pl-12 pr-12 transition-colors"
                    placeholder="Create a strong password"
                  />
                  <Lock className="w-5 h-5 text-level-3 absolute left-4 top-1/2 -translate-y-1/2" />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-level-3 hover:text-level-4"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
                className="w-full py-3 rounded-xl font-medium text-white bg-level-4 hover:opacity-90 transition-all disabled:opacity-50 shadow-lg mt-6"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span className="ml-2">Creating Account...</span>
                  </div>
                ) : (
                  "Create Account"
                )}
              </motion.button>
            </form>

            <div className="mt-6 text-center text-level-3">
              Already have an account?{' '}
              <Link href="/signin" className="text-level-4 font-medium hover:underline">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}