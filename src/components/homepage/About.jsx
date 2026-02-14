"use client";
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const values = [
    {
      title: "Trust & Security",
      description: "Thoroughly verified caregivers for your peace of mind.",
      icon: "🔒",
      color: "from-blue-50 to-cyan-50",
    },
    {
      title: "Quality Care",
      description: "Professional training ensuring high standards.",
      icon: "⭐",
      color: "from-emerald-50 to-teal-50",
    },
    {
      title: "24/7 Support",
      description: "Dedicated team available to assist you anytime.",
      icon: "🤝",
      color: "from-pink-50 to-rose-50",
    },
    {
      title: "Fair Pricing",
      description: "Transparent rates without breaking the bank.",
      icon: "💰",
      color: "from-orange-50 to-amber-50",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-20 lg:py-28">
      {/* Background Blurs - Scaled down for mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-200 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-200 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-12 sm:mb-16"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="px-3 py-1 text-[10px] sm:text-xs font-bold tracking-widest text-emerald-700 uppercase bg-emerald-100 rounded-full border border-emerald-200">
              About Our Mission
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-4xl font-black text-gray-900 mb-4 leading-tight"
          >
            Redefining Care for <br />
            <span className="text-emerald-600">Modern Families</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-gray-600 leading-relaxed px-2"
          >
            We connect families with verified, compassionate caregivers who treat your loved ones like family.
          </motion.p>
        </motion.div>

        {/* Story & Stats - Tighter for Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <motion.h3 variants={itemVariants} className="text-xl font-bold text-gray-900 mb-4">
              Our Story
            </motion.h3>
            
            <motion.p variants={itemVariants} className="text-sm text-gray-700 mb-6 leading-relaxed">
              Founded in 2015, Care.xyz was born from a simple belief: every family deserves access to reliable care. Today, we've served over 10,000 families with professional excellence.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 border-t border-gray-100 pt-6"
            >
              {[
                { number: "10k+", label: "Served" },
                { number: "500+", label: "Staff" },
                { number: "9yr", label: "Exp" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-lg font-black text-emerald-600">{stat.number}</div>
                  <div className="text-[10px] uppercase tracking-wide text-gray-500 font-bold">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Small Floating Card Visual for Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="order-1 lg:order-2 relative h-48 sm:h-64 lg:h-80 w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-50 to-blue-50 rounded-2xl border border-gray-100 flex items-center justify-center p-6 text-center shadow-inner">
               <div className="space-y-3">
                  <div className="w-12 h-12 bg-white rounded-full mx-auto flex items-center justify-center shadow-sm text-xl">🏠</div>
                  <h4 className="text-sm font-bold text-gray-800">Quality Care at Home</h4>
                  <p className="text-[12px] text-gray-500 leading-tight">Verified caregivers ready to assist your family 24/7.</p>
               </div>
            </div>
          </motion.div>
        </div>

        {/* Values Grid - Compact 2x2 on Mobile */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`p-4 sm:p-6 rounded-xl bg-gradient-to-br ${value.color} border border-white shadow-sm`}
            >
              <div className="text-2xl sm:text-3xl mb-2">{value.icon}</div>
              <h4 className="text-xs sm:text-sm font-bold text-gray-900 mb-1">
                {value.title}
              </h4>
              <p className="text-[10px] sm:text-xs text-gray-600 leading-tight">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;