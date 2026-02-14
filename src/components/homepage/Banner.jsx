"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Banner = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-emerald-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute top-1/2 -right-20 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="relative z-10 container mx-auto px-5 sm:px-6 lg:px-8 pt-4 sm:pt-8 lg:pt-16 pb-12 lg:pb-24">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 order-1 lg:order-2"
          >
            <div className="relative aspect-[4/3] sm:aspect-video lg:aspect-[4/3] w-full max-w-[500px] mx-auto">
              <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="/assets/img/banner_care_xyz.jpg"
                  alt="Professional Care"
                  width={800}  
                  height={600} 
                  priority
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 left-4 right-4 sm:left-10 sm:right-10 bg-white/90 backdrop-blur-md p-3 sm:p-4 rounded-xl shadow-lg border border-white/50 flex items-center gap-3"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] sm:text-xs font-bold text-gray-900 uppercase tracking-wider">Verified Professional</p>
                  <p className="text-[10px] sm:text-xs text-gray-500 line-clamp-1">All staff are NID verified</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-block px-3 py-1 text-[10px] sm:text-xs font-bold tracking-widest text-emerald-700 uppercase bg-emerald-50 rounded-full border border-emerald-100">
                Trusted Caregiving Services
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-3xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-4"
            >
              Expert Care for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
                Your Loved Ones
              </span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              From bubbly babysitters to compassionate elderly care. Secure, reliable, and verified caregivers at your doorstep.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3"
            >
              <Link href="/services" className="w-full sm:w-auto px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-sm transition-all shadow-lg shadow-emerald-200 active:scale-95">
                Explore Services
              </Link>
              <Link href="/register" className="w-full sm:w-auto px-8 py-3.5 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold text-sm hover:bg-gray-50 transition-all active:scale-95">
                Join as Caretaker
              </Link>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="mt-10 flex items-center justify-center lg:justify-start gap-6 border-t border-gray-100 pt-8"
            >
              <div className="text-center lg:text-left">
                <p className="text-lg font-black text-gray-900">10k+</p>
                <p className="text-[10px] uppercase font-bold text-gray-400">Families</p>
              </div>
              <div className="h-8 w-px bg-gray-100" />
              <div className="text-center lg:text-left">
                <p className="text-lg font-black text-gray-900">4.9/5</p>
                <p className="text-[10px] uppercase font-bold text-gray-400">Rating</p>
              </div>
              <div className="h-8 w-px bg-gray-100" />
              <div className="text-center lg:text-left">
                <p className="text-lg font-black text-gray-900">100%</p>
                <p className="text-[10px] uppercase font-bold text-gray-400">Verified</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;