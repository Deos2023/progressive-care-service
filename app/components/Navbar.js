"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaPhone,
  FaBars,
  FaTimes,
  FaBug,
  FaHome,
  FaInfoCircle,
  FaCogs,
  FaImages,
  FaEnvelope,
} from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set active page based on current URL
  useEffect(() => {
    const pathname = window.location.pathname;
    if (pathname === "/") setActivePage("Home");
    else if (pathname === "/about") setActivePage("About");
    else if (pathname === "/services") setActivePage("Services");
    else if (pathname === "/gallery") setActivePage("Gallery");
    else if (pathname === "/contact") setActivePage("Contact");
  }, []);

  const navItems = [
    { name: "Home", path: "/", icon: <FaHome className="mr-1" /> },
    { name: "About", path: "/about", icon: <FaInfoCircle className="mr-1" /> },
    { name: "Services", path: "/services", icon: <FaCogs className="mr-1" /> },
    { name: "Gallery", path: "/gallery", icon: <FaImages className="mr-1" /> },
    {
      name: "Contact",
      path: "/contact",
      icon: <FaEnvelope className="mr-1" />,
    },
  ];

  return (
    <div>
      {/* Top info bar */}
      <div className="bg-green-800 text-white text-xs sm:text-sm py-2 px-2 sm:px-4 flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-0">
        <div className="flex items-center">
          <FaPhone className="mr-1 sm:mr-2 text-xs" />
          <span>Call Us: 03379664262</span>
        </div>
        <div className="flex items-center">
          <span>Email: somu.progressive76@gmail.com</span>
        </div>
      </div>

      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-3 sm:py-4"
        }`}
      >
        <div className="container mx-auto px-2 sm:px-4 flex justify-between items-center max-w-7xl">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <div className="relative h-9 w-28 sm:h-12 sm:w-44 mr-2 sm:mr-4">
              <Image
                src="/images/logo.jpg"
                alt="Progressive Care Service"
                fill
                className={`object-contain transition-opacity duration-300 ${
                  isScrolled ? "opacity-100" : "opacity-90"
                }`}
              />
            </div>
            <h1
              className={`text-base sm:text-xl font-bold transition-colors duration-300 ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              Progressive Care Service
            </h1>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 lg:space-x-6">
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.path}
                className={`font-medium transition-colors duration-300 flex items-center ${
                  isScrolled
                    ? activePage === item.name
                      ? "text-green-600 border-b-2 border-green-600"
                      : "text-gray-800 hover:text-green-600"
                    : activePage === item.name
                    ? "text-green-300 border-b-2 border-green-300"
                    : "text-white hover:text-green-300"
                }`}
              >
                {item.icon}
                {item.name}
              </a>
            ))}
          </div>

          {/* Call Now Button (Desktop) */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <a
              href="tel:+9103379664262"
              className={`px-4 py-2 rounded-full flex items-center space-x-2 transition ${
                isScrolled
                  ? "bg-green-600 text-white hover:bg-green-700 shadow-md"
                  : "bg-white text-green-600 hover:bg-gray-100 shadow-md"
              }`}
            >
              <FaPhone className="text-sm" />
              <span>Call now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center ml-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`text-2xl focus:outline-none transition-colors duration-300 ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full px-3 py-3 space-y-2 z-40"
          >
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.path}
                className="block text-gray-800 hover:text-green-600 font-medium py-2 flex items-center border-b border-gray-100 text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.icon}
                {item.name}
              </a>
            ))}
            <a
              href="tel:1355555555"
              className="block bg-green-600 text-white px-3 py-2 rounded-lg text-center hover:bg-green-700 transition flex items-center justify-center mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaPhone className="mr-2" />
              Emergency Call
            </a>
          </motion.div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
