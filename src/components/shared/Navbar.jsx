"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const Navbar = ({ user, handleLogout }) => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const isActive = (path) => pathname === path;
  
  const navLinks = (
    <>
      <li>
        <Link 
          href="/" 
          className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
            isActive('/') 
            ? "text-emerald-600 font-bold bg-emerald-100/60 backdrop-blur-sm" 
            : "text-gray-700 hover:text-emerald-600 hover:bg-emerald-50/50"
          }`}
        >
          Home
        </Link>
      </li>
      <li>
        <Link 
          href="/services" 
          className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
            isActive('/services') 
            ? "text-cyan-600 font-bold bg-cyan-100/60 backdrop-blur-sm" 
            : "text-gray-700 hover:text-cyan-600 hover:bg-cyan-50/50"
          }`}
        >
          Services
        </Link>
      </li>
      {user && (
        <li>
          <Link 
            href="/my-bookings" 
            className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
              isActive('/my-bookings') 
              ? "text-blue-600 font-bold bg-blue-100/60 backdrop-blur-sm" 
              : "text-gray-700 hover:text-blue-600 hover:bg-blue-50/50"
            }`}
          >
            My Bookings
          </Link>
        </li>
      )}
    </>
  );

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-2 z-50 mx-auto w-[95%] max-w-7xl my-2"
    >
      {/* Background gradient blur effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/20 via-cyan-100/20 to-blue-100/20 rounded-full blur-2xl -z-10" />
      
      <nav className="navbar px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/80 backdrop-blur-xl border border-white/60 shadow-xl ring-1 ring-black/5 hover:shadow-2xl transition-all duration-300">
        
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="dropdown lg:hidden">
            <motion.label 
              tabIndex={0} 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-ghost btn-circle text-gray-700 hover:bg-gradient-to-r hover:from-emerald-100 hover:to-cyan-100 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </motion.label>
            <motion.ul 
              tabIndex={0} 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-2xl bg-white/95 backdrop-blur-xl rounded-2xl w-52 border border-white/60 space-y-1"
            >
              {navLinks}
            </motion.ul>
          </div>
          
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="flex items-center gap-1 ml-2 lg:ml-0">
              <span className="text-xl sm:text-2xl font-black bg-gradient-to-r from-emerald-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent tracking-tight">
                Care<span className="text-cyan-500">.xyz</span>
              </span>
            </Link>
          </motion.div>
        </div>
        
        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex space-x-1 font-medium list-none px-1">
            {navLinks}
          </ul>
        </div>

        {/* Right Side - Auth/User */}
        <div className="navbar-end gap-2 sm:gap-3">
          {user ? (
            <div className="dropdown dropdown-end">
              <motion.label 
                tabIndex={0} 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-ghost btn-circle avatar border-2 border-gradient-to-r from-emerald-200 to-cyan-200 hover:border-blue-300 hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="w-10 rounded-full overflow-hidden ring-2 ring-gradient-to-r ring-emerald-200">
                  <img 
                    src={user?.photoURL || "https://i.ibb.co/mJR7z81/user-placeholder.png"} 
                    alt="profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.label>
              <motion.ul 
                tabIndex={0}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                className="mt-3 z-[1] p-3 shadow-2xl menu menu-sm dropdown-content bg-white/95 backdrop-blur-xl rounded-2xl w-52 border border-white/60"
              >
                <li className="px-4 py-2 font-semibold bg-gradient-to-r from-emerald-100 to-cyan-100 rounded-lg text-gray-900 mb-2">
                  {user?.displayName || 'User'}
                </li>
                <li>
                  <Link 
                    href="/my-bookings" 
                    className="hover:text-cyan-600 hover:bg-cyan-50/50 transition-all rounded-lg"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <button 
                    onClick={handleLogout}
                    className="text-red-500 hover:bg-red-50/60 hover:text-red-600 transition-all rounded-lg"
                  >
                    Logout
                  </button>
                </li>
              </motion.ul>
            </div>
          ) : (
            <>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/login" 
                  className="btn btn-ghost rounded-full text-gray-700 hidden sm:flex hover:bg-gradient-to-r hover:from-emerald-100 hover:to-cyan-100 hover:text-emerald-600 font-medium transition-all border-0"
                >
                  Login
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/register" 
                  className="btn rounded-full bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white border-0 px-6 sm:px-8 font-bold shadow-lg hover:shadow-xl transition-all"
                >
                  Join Now
                </Link>
              </motion.div>
            </>
          )}
        </div>

      </nav>
    </motion.div>
  );
};

export default Navbar;