"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaUser,
  FaComment,
} from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    const userMsg = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService Interested In: ${formData.service}\nMessage: ${formData.message}`;
    const encodedMsg = encodeURIComponent(userMsg);
    window.open(`https://wa.me/9831679025?text=${encodedMsg}`, '_blank');
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", userMsg);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    }, 3000);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const mapVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Contact Us | Progressive care service</title>
        <meta
          name="description"
          content="Get in touch with Progressive care service for professional pest management services."
        />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 bg-green-700 text-white overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get in touch with our pest control experts for a free consultation
          </p>
        </motion.div>
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {/* Contact Form */}
            <motion.div
              variants={formVariants}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Send us a Message
              </h2>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, type: "spring" }}
                  className="bg-green-600 text-white px-6 py-5 rounded-xl text-center shadow-xl border border-green-700"
                >
                  <div className="flex flex-col items-center justify-center space-y-2">
                    {/* Icon */}
                    <svg
                      className="w-10 h-10 text-white animate-bounce"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>

                    {/* Text */}
                    <p className="text-xl font-bold">
                      Thank you for your message!
                    </p>
                    <p className="text-base opacity-90">
                      We’ll get back to you as soon as possible.
                    </p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Your Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaUser className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all text-gray-900 placeholder-gray-500 bg-white shadow-sm hover:border-gray-400"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaEnvelope className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all text-gray-900 placeholder-gray-500 bg-white shadow-sm hover:border-gray-400"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaPhone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all text-gray-900 placeholder-gray-500 bg-white shadow-sm hover:border-gray-400"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all text-gray-900 bg-white shadow-sm hover:border-gray-400 appearance-none"
                  >
                    <option value="">Select a service</option>
                    <option value="termite">Termite Control</option>
                    <option value="cockroach">Cockroach Control</option>
                    <option value="mosquito">Mosquito Control</option>
                    <option value="rodent">Rodent Control</option>
                    <option value="bedbug">Bed Bug Control</option>
                    <option value="ant">Ant Control</option>
                    <option value="bird">Bird Control</option>
                    <option value="fly">Fly Control</option>
                    <option value="other">Other Services</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <FaComment className="h-5 w-5 text-gray-400" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all text-gray-900 placeholder-gray-500 bg-white shadow-sm hover:border-gray-400 resize-none"
                      placeholder="Tell us about your pest problem or inquiry"
                    />
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
                >
                  <FaPaperPlane className="mr-2" />
                  Send Message via WhatsApp
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info & Map */}
            <motion.div variants={mapVariants} className="space-y-8">
              {/* Contact Information */}
              <motion.div
                variants={itemVariants}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Get in Touch
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <FaPhone className="text-green-600 text-lg" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        Phone Numbers
                      </h3>
                      <p className="text-gray-600">
                        <a
                          href="tel:1355555555"
                          className="hover:text-green-600 transition-colors"
                        >
                          03379664262
                        </a>
                      </p>
                      <p className="text-gray-600">
                        <a
                          href="tel:9804351651"
                          className="hover:text-green-600 transition-colors"
                        >
                          9831679025,7439839760
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <FaEnvelope className="text-green-600 text-lg" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        Email Address
                      </h3>
                      <p className="text-gray-600">
                        <a
                          href="mailto:info@condonai.com"
                          className="hover:text-green-600 transition-colors"
                        >
                          somu.progressive76@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <FaMapMarkerAlt className="text-green-600 text-lg" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        Office Location
                      </h3>
                      <p className="text-gray-600">
                        , 22/127 Raja Manindra Road Kolkata-700037
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <FaClock className="text-green-600 text-lg" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        Business Hours
                      </h3>
                      <p className="text-gray-600">
                        Monday - Friday: 8:00 AM - 6:00 PM
                      </p>
                      <p className="text-gray-600">
                        Saturday: 9:00 AM - 4:00 PM
                      </p>
                      <p className="text-gray-600">
                        Sunday: Emergency Services Only
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Map */}
              <motion.div
                variants={itemVariants}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.137318541873!2d88.3830626!3d22.611346800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027143f9477215%3A0xf133dfce402c3bfc!2sProgressive%20Care%20Service!5e0!3m2!1sen!2sin!4v1758026441210!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-64 lg:h-80"
                  title="Progressive care service Location"
                ></iframe>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800">Our Location</h3>
                  <p className="text-sm text-gray-600">
                    Find us easily with the map directions
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Emergency Contact Banner */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="py-12 bg-green-600 text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            24/7 Emergency Pest Control
          </h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto">
            Need immediate assistance with a pest emergency? We're available
            round the clock.
          </p>
          <a
            href="tel:1355555555"
            className="inline-block bg-white text-green-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors"
          >
            <FaPhone className="inline mr-2" />
            Call Now: 03379664262
          </a>
        </div>
      </motion.section>
    </div>
  );
};

export default ContactPage;
