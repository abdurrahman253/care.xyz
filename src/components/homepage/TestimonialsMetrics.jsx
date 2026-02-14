"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const TestimonialsMetrics = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [counters, setCounters] = useState({
    families: 0,
    caregivers: 0,
    satisfaction: 0,
    years: 0,
  });

  // Auto-Slider Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Animated counter effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCounters(prev => ({
        families: prev.families < 10000 ? prev.families + 200 : 10000,
        caregivers: prev.caregivers < 500 ? prev.caregivers + 10 : 500,
        satisfaction: prev.satisfaction < 98 ? prev.satisfaction + 2 : 98,
        years: prev.years < 9 ? prev.years + 0.2 : 9,
      }));
    }, 50);
    return () => clearInterval(interval);
  }, []);

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

  const successMetrics = [
    { label: "Families", value: Math.round(counters.families), icon: "👨‍👩‍👧", color: "from-emerald-50 to-cyan-50", textColor: "text-emerald-600" },
    { label: "Caregivers", value: Math.round(counters.caregivers), icon: "💼", color: "from-blue-50 to-indigo-50", textColor: "text-blue-600" },
    { label: "Rating", value: Math.round(counters.satisfaction), suffix: "%", icon: "⭐", color: "from-amber-50 to-orange-50", textColor: "text-amber-600" },
    { label: "Experience", value: counters.years.toFixed(1), icon: "🏆", color: "from-rose-50 to-pink-50", textColor: "text-rose-600" },
  ];

  const testimonials = [
    { id: 1, name: "Sarah J.", role: "Parent", image: "https://i.pravatar.cc/150?img=1", quote: "Care.xyz found us the perfect nanny. The vetting process was thorough and safe.", highlight: "Professional", color: "from-emerald-50 to-teal-50" },
    { id: 2, name: "Robert C.", role: "Family", image: "https://i.pravatar.cc/150?img=2", quote: "Finding care for my mother was easy. Our caregiver is truly compassionate.", highlight: "Peace of Mind", color: "from-blue-50 to-cyan-50" },
    { id: 3, name: "Emily R.", role: "Caregiver", image: "https://i.pravatar.cc/150?img=3", quote: "They truly value professionals. The platform is incredibly user-friendly.", highlight: "Great Support", color: "from-purple-50 to-pink-50" },
  ];

  const quickStats = [
    { metric: "95%", label: "Success", icon: "🎯" },
    { metric: "24/7", label: "Support", icon: "📞" },
    { metric: "4.9/5", label: "Rating", icon: "⭐" },
    { metric: "100%", label: "Verified", icon: "✓" },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-24 lg:py-32">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-30">
        <div className="absolute top-10 left-10 w-64 h-64 bg-emerald-200 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-200 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
          <motion.span 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-[0.2em] text-emerald-700 uppercase bg-emerald-50 rounded-full border border-emerald-100"
          >
            Our Impact
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-4"
          >
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">Thousands</span>
          </motion.h2>
        </div>

        {/* Main Metrics - Swiper-like on mobile */}
        <div className="flex overflow-x-auto pb-6 sm:pb-0 sm:grid sm:grid-cols-4 gap-4 no-scrollbar -mx-5 px-5 sm:mx-0 sm:px-0">
          {successMetrics.map((metric, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="min-w-[160px] flex-shrink-0 sm:min-w-0"
            >
              <div className={`rounded-2xl bg-gradient-to-br ${metric.color} border border-white p-5 text-center shadow-sm hover:shadow-md transition-shadow`}>
                <div className="text-3xl mb-2">{metric.icon}</div>
                <div className={`text-xl sm:text-2xl font-black ${metric.textColor}`}>
                  {metric.value.toLocaleString()}{metric.suffix}
                </div>
                <p className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-tighter">{metric.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Auto-Slider */}
        <div className="my-12 sm:my-20 max-w-4xl mx-auto relative px-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className={`relative rounded-3xl bg-gradient-to-br ${testimonials[activeTestimonial].color} p-6 sm:p-12 border border-white shadow-xl overflow-hidden`}
            >
              {/* Background Quote Mark */}
              <div className="absolute -top-4 -right-2 text-9xl text-black/5 font-serif pointer-events-none">“</div>
              
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 relative z-10">
                <img 
                  src={testimonials[activeTestimonial].image} 
                  className="w-16 h-16 sm:w-24 sm:h-24 rounded-2xl object-cover border-4 border-white shadow-md"
                  alt="Avatar"
                />
                <div className="text-center sm:text-left flex-1">
                  <div className="mb-4">
                    <span className="text-xs font-black px-2 py-1 bg-white/60 rounded text-emerald-700 uppercase">{testimonials[activeTestimonial].highlight}</span>
                  </div>
                  <p className="text-base sm:text-xl text-gray-800 leading-relaxed font-medium italic mb-6">
                    "{testimonials[activeTestimonial].quote}"
                  </p>
                  <h4 className="font-bold text-gray-900">{testimonials[activeTestimonial].name}</h4>
                  <p className="text-xs text-gray-500">{testimonials[activeTestimonial].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider Pagination */}
          <div className="flex gap-2 justify-center mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                className={`h-1.5 transition-all duration-300 rounded-full ${idx === activeTestimonial ? 'w-8 bg-emerald-500' : 'w-2 bg-gray-200'}`}
              />
            ))}
          </div>
        </div>

        {/* Compact Quick Stats - 2x2 on small mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-16">
          {quickStats.map((stat, idx) => (
            <div key={idx} className="bg-white border border-gray-100 p-4 rounded-xl flex items-center gap-3 shadow-sm">
              <span className="text-xl">{stat.icon}</span>
              <div>
                <div className="text-sm font-black text-gray-900">{stat.metric}</div>
                <div className="text-[10px] text-gray-500 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Refined CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gray-900 rounded-[2.5rem] p-8 sm:p-12 text-center text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20 pointer-events-none" />
          <h3 className="text-xl sm:text-3xl font-bold mb-6 relative z-10">Start your care journey today.</h3>
          <div className="flex flex-col sm:flex-row gap-3 justify-center relative z-10">
            <Link href="/services" className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white rounded-2xl font-bold text-sm transition-all shadow-lg shadow-emerald-500/20 active:scale-95">
              Find a Caregiver
            </Link>
            <Link href="/register" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-2xl font-bold text-sm transition-all active:scale-95">
              Apply to Work
            </Link>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default TestimonialsMetrics;