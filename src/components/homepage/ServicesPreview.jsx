"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ServicesPreview = () => {
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
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const services = [
    {
      id: 1,
      title: "Childcare",
      fullTitle: "Childcare & Babysitting",
      description: "Bubbly, trained sitters for your kids.",
      icon: "👶",
      gradient: "from-rose-50 to-pink-50",
      borderColor: "border-rose-100",
      iconBg: "bg-rose-100/50",
    },
    {
      id: 2,
      title: "Elderly",
      fullTitle: "Elderly Care Specialists",
      description: "Compassionate support for seniors.",
      icon: "👴",
      gradient: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-100",
      iconBg: "bg-blue-100/50",
    },
    {
      id: 3,
      title: "Household",
      fullTitle: "Household Management",
      description: "Help with cleaning and cooking.",
      icon: "🏠",
      gradient: "from-emerald-50 to-teal-50",
      borderColor: "border-emerald-100",
      iconBg: "bg-emerald-100/50",
    },
    {
      id: 4,
      title: "Special",
      fullTitle: "Special Needs Care",
      description: "Expert care for unique needs.",
      icon: "❤️",
      gradient: "from-amber-50 to-orange-50",
      borderColor: "border-amber-100",
      iconBg: "bg-amber-100/50",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-24">
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl pointer-events-none opacity-40">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-50 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-10 sm:mb-20"
        >
          <motion.div variants={itemVariants} className="mb-3">
            <span className="px-3 py-1 text-[10px] sm:text-xs font-bold tracking-widest text-emerald-700 uppercase bg-emerald-50 rounded-full border border-emerald-100">
              Our Expertise
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight"
          >
            Care Tailored to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
              Your Family
            </span>
          </motion.h2>
        </motion.div>

        {/* Services Grid - 2 columns on mobile! */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-10"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div
                className={`h-full rounded-2xl border ${service.borderColor} bg-gradient-to-br ${service.gradient} p-4 sm:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-gray-100 hover:bg-white`}
              >
                {/* Icon Wrapper */}
                <div className={`w-10 h-10 sm:w-16 sm:h-16 ${service.iconBg} rounded-xl flex items-center justify-center text-2xl sm:text-4xl mb-4 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>

                {/* Mobile Title (Short) vs Desktop (Full) */}
                <h3 className="text-sm sm:text-xl font-bold text-gray-900 mb-1 sm:mb-3 leading-tight">
                  <span className="sm:hidden">{service.title}</span>
                  <span className="hidden sm:inline">{service.fullTitle}</span>
                </h3>

                {/* Description - Hidden or smaller on mobile */}
                <p className="text-[10px] sm:text-sm text-gray-600 leading-relaxed line-clamp-2 sm:line-clamp-none">
                  {service.description}
                </p>
                
                {/* Action - App Style */}
                <div className="mt-4 flex items-center gap-1 text-[10px] sm:text-xs font-bold text-emerald-600 uppercase tracking-wider">
                  Details 
                  <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gray-900 text-white rounded-xl font-bold text-sm hover:bg-gray-800 transition-all active:scale-95 shadow-lg shadow-gray-200"
          >
            Explore All Services
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;