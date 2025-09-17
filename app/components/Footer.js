import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const socialVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  // Use intersection observer for animations
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <footer className="bg-gray-900 text-white overflow-hidden">
      {/* Main Footer Content */}
      <motion.div 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-4 py-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl font-bold mb-4 flex items-center"
            >
              <span className="text-green-500 mr-2">Progressive </span> Care
              Service.
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-300 mb-4"
            >
              Providing professional pest control services with safe, effective,
              and eco-friendly solutions for homes and businesses.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex space-x-4"
            >
              {[
                { icon: <FaFacebookF />, href: "#" },
                { icon: <FaTwitter />, href: "#" },
                { icon: <FaInstagram />, href: "#" },
                { icon: <FaLinkedinIn />, href: "#" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  variants={socialVariants}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-800 hover:bg-green-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <motion.h4 
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg font-semibold mb-4 pb-2 border-b border-gray-700"
            >
              Quick Links
            </motion.h4>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Gallery", href: "/gallery" },
                { name: "Contact Us", href: "/contact" },
                { name: "Blog", href: "/blog" }
              ].map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-green-400 transition-colors block py-1"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <motion.h4 
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg font-semibold mb-4 pb-2 border-b border-gray-700"
            >
              Our Services
            </motion.h4>
            <ul className="space-y-2">
              {[
                { name: "Termite Management", href: "/services/termite" },
                { name: "Cockroach Management", href: "/services/cockroach" },
                { name: "Mosquito Management", href: "/services/mosquito" },
                { name: "Rodent Management", href: "/services/rodent" },
                { name: "Bed Bugs Management", href: "/services/bedbugs" },
                { name: "Bird Management", href: "/services/bird" }
              ].map((service, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                >
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-green-400 transition-colors block py-1"
                  >
                    {service.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <motion.h4 
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-lg font-semibold mb-4 pb-2 border-b border-gray-700"
            >
              Contact Info
            </motion.h4>
            <ul className="space-y-4">
              {[
                { 
                  icon: <FaMapMarkerAlt className="text-green-500 mt-1 mr-3" />, 
                  content: <span className="text-gray-300">123 Pest Control Ave, City, State 12345</span> 
                },
                { 
                  icon: <FaPhone className="text-green-500 mt-1 mr-3" />, 
                  content: (
                    <div>
                      <a href="tel:03379664262" className="text-gray-300 hover:text-green-400 transition-colors block">
                        03379664262
                      </a>
                      <a href="tel:9831679025" className="text-gray-300 hover:text-green-400 transition-colors block">
                        9831679025
                      </a>
                    </div>
                  ) 
                },
                { 
                  icon: <FaEnvelope className="text-green-500 mt-1 mr-3" />, 
                  content: (
                    <a href="mailto:somu.progressive76@gmail.com" className="text-gray-300 hover:text-green-400 transition-colors">
                      somu.progressive76@gmail.com
                    </a>
                  ) 
                },
                { 
                  icon: <FaClock className="text-green-500 mt-1 mr-3" />, 
                  content: (
                    <div>
                      <p className="text-gray-300">Mon-Fri: 8:00 AM - 6:00 PM</p>
                      <p className="text-gray-300">Sat: 9:00 AM - 4:00 PM</p>
                      <p className="text-gray-300">Sun: Emergency Services Only</p>
                    </div>
                  ) 
                }
              ].map((contact, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="flex items-start"
                >
                  {contact.icon}
                  {contact.content}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Emergency Service Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-green-700 rounded-lg p-6 mt-10 flex flex-col md:flex-row items-center justify-between"
        >
          <div className="flex items-center mb-4 md:mb-0">
            <motion.div 
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
              className="bg-white rounded-full p-3 mr-4"
            >
              <FaPhone className="text-green-700 text-xl" />
            </motion.div>
            <div>
              <h4 className="text-xl font-bold">24/7 Emergency Pest Control</h4>
              <p className="text-green-100">
                Immediate response for urgent pest problems
              </p>
            </div>
          </div>
          <motion.a
            href="tel:9831679025"
            initial={{ scale: 0.8 }}
            animate={inView ? { scale: 1 } : {}}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, delay: 0.9 }}
            className="bg-white text-green-700 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition-colors whitespace-nowrap shadow-md hover:shadow-lg"
          >
            Call Now: 9831679025, 7439839760, 9804046058
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Copyright Bar */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 1 }}
        className="border-t border-gray-800"
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="text-gray-400 text-sm mb-3 md:mb-0"
            >
              © {new Date().getFullYear()} Progressive Pest Control. All rights
              reserved.Website Developed and Maintained by Digital Exposure Online
              Services
            </motion.p>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="flex space-x-6"
            >
              {[
                { name: "Privacy Policy", href: "/privacy-policy" },
                { name: "Terms of Service", href: "/terms" },
                { name: "Sitemap", href: "/sitemap" }
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-green-400 text-sm transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;