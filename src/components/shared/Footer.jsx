"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const footerLinks = [
    {
      title: "Company",
      links: [
        { label: "About", href: "/#about" },
        { label: "Services", href: "/services" },
        { label: "Careers", href: "/careers" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "/help" },
        { label: "Safety", href: "/safety" },
        { label: "Contact", href: "/#contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
        { label: "Compliance", href: "/compliance" },
      ],
    },
    {
      title: "Social",
      links: [
        { label: "Instagram", href: "#" },
        { label: "LinkedIn", href: "#" },
        { label: "Twitter", href: "#" },
      ],
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-white border-t border-gray-100">
      {/* Soft Background Accents */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-emerald-50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-50 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-5 sm:px-8">
        {/* Top: Brand & Newsletter */}
        <div className="py-12 sm:py-20 border-b border-gray-50 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-5">
            <Link href="/" className="inline-block">
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-gray-900">
                Care<span className="text-emerald-500">.xyz</span>
              </h3>
            </Link>
            <p className="text-sm sm:text-base text-gray-500 max-w-sm leading-relaxed">
              Premium caregiving solutions for the modern family. Trusted by 10,000+ homes worldwide.
            </p>
            <div className="flex gap-3">
              {["🌐", "📱", "💬"].map((icon, i) => (
                <button key={i} className="w-9 h-9 flex items-center justify-center rounded-xl bg-gray-50 hover:bg-emerald-50 hover:text-emerald-600 transition-colors text-lg">
                  {icon}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 bg-gray-50/50 p-6 sm:p-8 rounded-3xl border border-gray-100">
            <h4 className="text-sm sm:text-lg font-bold text-gray-900 mb-2">Subscribe to our Newsletter</h4>
            <p className="text-xs sm:text-sm text-gray-500 mb-5">Weekly care tips and safety updates.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
              />
              <button className="px-6 py-3 bg-gray-900 text-white rounded-xl text-sm font-bold hover:bg-gray-800 transition-all active:scale-95">
                Join Now
              </button>
            </form>
          </div>
        </div>

        {/* Middle: Links Grid (2 columns on mobile) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-12 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {footerLinks.map((section, idx) => (
            <motion.div key={idx} variants={itemVariants} className="space-y-4">
              <h5 className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-gray-400">
                {section.title}
              </h5>
              <ul className="space-y-2">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <Link href={link.href} className="text-sm text-gray-600 hover:text-emerald-600 transition-colors font-medium">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom: Trust & Legal */}
        <div className="pb-10 pt-4 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-gray-50 pt-10">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
             {[
                { icon: "✓", text: "Verified" },
                { icon: "🔒", text: "Secure" },
                { icon: "⭐", text: "Top Rated" },
              ].map((badge, idx) => (
                <div key={idx} className="flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-tight">
                  <span className="text-emerald-500 text-sm">{badge.icon}</span>
                  {badge.text}
                </div>
              ))}
          </div>

          <div className="text-center md:text-right">
            <p className="text-[10px] sm:text-xs text-gray-400 font-medium uppercase tracking-widest">
              © {currentYear} Care.xyz — All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;