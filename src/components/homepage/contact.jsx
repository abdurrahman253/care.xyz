"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const contactMethods = [
    { title: "Phone", value: "+1 (555) 123", icon: "📞", color: "from-blue-50 to-cyan-50" },
    { title: "Email", value: "support@care.com", icon: "✉️", color: "from-emerald-50 to-teal-50" },
    { title: "Address", value: "123 Care St.", icon: "📍", color: "from-pink-50 to-rose-50" },
    { title: "Hours", value: "24/7 Service", icon: "🕐", color: "from-orange-50 to-amber-50" },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-20 lg:py-28">
      {/* Subtle Background Blurs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute -top-20 left-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 right-0 w-64 h-64 bg-emerald-100 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Header - Compact for Mobile */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-10 sm:mb-16"
        >
          <motion.div variants={itemVariants} className="mb-3">
            <span className="px-3 py-1 text-[10px] sm:text-xs font-bold tracking-widest text-emerald-700 uppercase bg-emerald-50 rounded-full border border-emerald-100">
              Contact Us
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-4xl font-black text-gray-900 mb-3 leading-tight"
          >
            Find Your <span className="text-emerald-600">Perfect Caregiver</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xs sm:text-base text-gray-600 px-4"
          >
            We're here to help. Reach out and find the right care solution for your family.
          </motion.p>
        </motion.div>

        {/* Contact Quick Cards - 2x2 Grid on Mobile */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-12"
        >
          {contactMethods.map((method, idx) => (
            <motion.div key={idx} variants={itemVariants} className="h-full">
              <div className={`rounded-xl bg-gradient-to-br ${method.color} p-4 border border-white shadow-sm text-center h-full`}>
                <div className="text-2xl mb-2">{method.icon}</div>
                <h3 className="text-[11px] sm:text-sm font-bold text-gray-900 uppercase tracking-wide">{method.title}</h3>
                <p className="text-[10px] sm:text-xs text-gray-600 font-medium truncate">{method.value}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Form - Tightened for Mobile */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-10 shadow-sm"
          >
            <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-gray-500 uppercase ml-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-emerald-500 outline-none transition-all bg-gray-50/50"
                    placeholder="Full Name"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-gray-500 uppercase ml-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-emerald-500 outline-none transition-all bg-gray-50/50"
                    placeholder="Email Address"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold text-gray-500 uppercase ml-1">Service Type</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-emerald-500 outline-none transition-all bg-gray-50/50 appearance-none"
                >
                  <option value="">Select Service</option>
                  <option value="childcare">Childcare</option>
                  <option value="elderly">Elderly Care</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold text-gray-500 uppercase ml-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-emerald-500 outline-none transition-all bg-gray-50/50 resize-none"
                  placeholder="How can we help?"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-emerald-600 text-white rounded-xl font-bold text-sm hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100 active:scale-[0.98]"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Right Side Info */}
          <div className="space-y-6">
            <div className="bg-emerald-50/50 rounded-2xl p-6 border border-emerald-100">
              <h4 className="font-bold text-gray-900 mb-4 text-sm sm:text-base">Why choose our support?</h4>
              <ul className="space-y-3">
                {["Personalized care matching", "2-hour average response time", "Verified safety protocols"].map((text, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs sm:text-sm text-gray-600">
                    <span className="text-emerald-500 font-bold">✓</span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/services"
              className="block w-full py-4 text-center bg-gray-900 text-white rounded-xl font-bold text-sm hover:bg-gray-800 transition-all shadow-xl"
            >
              Browse All Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;