"use client";
import { useState, useRef } from "react";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCheckCircle,
  FaPhone,
  FaClock,
  FaShieldAlt,
  FaLeaf,
  FaUsers,
  FaArrowDown,
  FaChevronRight,
} from "react-icons/fa";

const ServicesPage = () => {
  const [expandedService, setExpandedService] = useState(null);
  const [activeTab, setActiveTab] = useState("");
  const servicesRef = useRef(null);

  const services = [
    {
      id: 1,
      title: "Termite Management Service",
      icon: "🐜",
      description:
        "Complete protection against destructive termites with advanced baiting and treatment systems.",
      details:
        "Our termite management service includes thorough inspection, soil treatment, baiting systems, and wood treatment to protect your property from structural damage. We offer both preventive and curative solutions.",
      features: [
        "Advanced detection technology",
        "Non-repellent termiticides",
        "10-year warranty",
        "Free follow-up inspections",
      ],
      image: "/images/service1.jpg",
      color: "from-amber-500 to-amber-700",
    },
    {
      id: 2,
      title: "Cockroach Management Service",
      icon: "🪳",
      description:
        "Effective elimination of cockroach infestations using targeted gel baits and insect growth regulators.",
      details:
        "We use specialized gel baits that attract and eliminate entire cockroach colonies. Our treatment focuses on harborage areas with minimal disruption to your daily activities.",
      features: [
        "Gel bait technology",
        "IGR treatment",
        "Residual spraying",
        "Sanitation recommendations",
      ],
      image: "/images/cockroach-service.jpg",
      color: "from-red-500 to-red-700",
    },
    {
      id: 3,
      title: "Mosquito Management Service",
      icon: "🦟",
      description:
        "Reduce mosquito populations and protect your family from mosquito-borne diseases.",
      details:
        "Our mosquito management includes source reduction, larvicidal treatment, and barrier spraying to create a mosquito-free environment in your outdoor spaces.",
      features: [
        "Larval control",
        "Adult mosquito control",
        "Breeding site identification",
        "Long-lasting formulations",
      ],
      image: "/images/mosquito-service.jpg",
      color: "from-blue-500 to-blue-700",
    },
    {
      id: 4,
      title: "Rodent Management Service",
      icon: "🐭",
      description:
        "Comprehensive rodent control using traps, baits, and exclusion techniques.",
      details:
        "We implement integrated rodent management that includes inspection, sanitation recommendations, trapping, baiting, and exclusion to prevent future infestations.",
      features: [
        "Multi-catch traps",
        "Tamper-proof bait stations",
        "Exclusion techniques",
        "Follow-up monitoring",
      ],
      image: "/images/rodent-service.jpg",
      color: "from-gray-500 to-gray-700",
    },
    {
      id: 5,
      title: "Fly Management Service",
      icon: "🪰",
      description:
        "Control fly populations with targeted treatments and sanitation improvements.",
      details:
        "Our fly management program includes identification of fly species, source elimination, and application of residual insecticides and baits specific to the type of flies present.",
      features: [
        "Fly light traps",
        "Residual sprays",
        "Larvicidal treatment",
        "Sanitation guidance",
      ],
      image: "/images/fly-service.jpg",
      color: "from-purple-500 to-purple-700",
    },
    {
      id: 6,
      title: "Bed Bugs Management Service",
      icon: "🛏️",
      description:
        "Complete eradication of bed bugs using heat treatment and targeted insecticides.",
      details:
        "We use a combination of heat treatment and insecticide application to eliminate all life stages of bed bugs. Our treatment includes pre-treatment preparation guidance and post-treatment verification.",
      features: [
        "Heat treatment",
        "Steam application",
        "Residual insecticides",
        "Follow-up inspection",
      ],
      image: "/images/bedbug-service.jpg",
      color: "from-rose-500 to-rose-700",
    },
    {
      id: 7,
      title: "Ants Management Service",
      icon: "🐜",
      description:
        "Targeted ant control that eliminates colonies at the source.",
      details:
        "Our ant management service includes identification of ant species, locating nests, and applying targeted baits and treatments that eliminate the entire colony, not just the foraging ants.",
      features: [
        "Baiting systems",
        "Nest elimination",
        "Barrier treatment",
        "Species identification",
      ],
      image: "/images/ant-service.jpg",
      color: "from-orange-500 to-orange-700",
    },
    {
      id: 8,
      title: "Bird Management Service",
      icon: "🐦",
      description:
        "Humane bird control solutions to protect your property from bird-related damage.",
      details:
        "Our progressive bird management service includes assessment, installation of deterrent systems, and ongoing maintenance to keep birds from roosting and nesting on your property.",
      features: [
        "Bird netting installation",
        "Bird spiking",
        "Visual deterrents",
        "Humane solutions",
      ],
      image: "/images/bird-service.jpg",
      color: "from-teal-500 to-teal-700",
    },
  ];

  const toggleService = (id) => {
    if (expandedService === id) {
      setExpandedService(null);
    } else {
      setExpandedService(id);
      // Scroll to the service if it's being expanded
      setTimeout(() => {
        document.getElementById(`service-${id}`)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  const slideIn = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen">
      <Head>
        <title>Pest Control Services | Progressive Care Service</title>
        <meta
          name="description"
          content="Professional pest control services for residential and commercial properties. Termite, cockroach, mosquito, rodent, and bird control services."
        />
      </Head>

      {/* Hero Section with Premium Animation */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative bg-gradient-to-br from-green-700 to-green-900 text-white py-12 sm:py-16 md:py-24 overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-green-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-2 sm:px-4 text-center relative z-10 max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-green-200"
          >
            Our Pest Control Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-xl md:text-2xl max-w-2xl sm:max-w-3xl mx-auto mb-6 sm:mb-8"
          >
            Comprehensive pest management solutions tailored to your specific
            needs
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="animate-bounce mt-12"
          >
            <FaArrowDown className="text-2xl mx-auto" />
          </motion.div>
        </div>
      </motion.section>

      {/* Services List */}
      <section ref={servicesRef} className="py-10 sm:py-14 md:py-20 bg-gray-50">
        <div className="container mx-auto px-2 sm:px-4 max-w-5xl">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-2 sm:mb-4">
              Professional Pest Management
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto">
              We use safe, effective methods to eliminate pests and prevent
              future infestations
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 gap-6 sm:gap-10"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                id={`service-${service.id}`}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl"
              >
                <div
                  className="p-4 sm:p-8 cursor-pointer flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0"
                  onClick={() => toggleService(service.id)}
                >
                  <div className="flex items-center">
                    <motion.span
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="text-2xl sm:text-4xl mr-3 sm:mr-6"
                    >
                      {service.icon}
                    </motion.span>
                    <div>
                      <h3 className="text-base sm:text-2xl font-semibold text-gray-800">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-base text-gray-600 mt-1 sm:mt-2">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`bg-gradient-to-r ${service.color} text-white font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-full transition-all flex items-center space-x-2 text-xs sm:text-base`}
                  >
                    <span>
                      {expandedService === service.id
                        ? "Show Less"
                        : "Learn More"}
                    </span>
                    <motion.span
                      animate={{
                        rotate: expandedService === service.id ? 90 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaChevronRight />
                    </motion.span>
                  </motion.button>
                </div>

                <AnimatePresence>
                  {expandedService === service.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-8 pb-4 sm:pb-8 border-t border-gray-100">
                        <div className="flex flex-col lg:flex-row gap-4 sm:gap-8 mt-4 sm:mt-8">
                          <div className="lg:w-2/3">
                            <motion.h4
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.2 }}
                              className="text-base sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-4"
                            >
                              Service Details
                            </motion.h4>
                            <motion.p
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.3 }}
                              className="text-xs sm:text-base text-gray-600 mb-4 sm:mb-8 leading-relaxed"
                            >
                              {service.details}
                            </motion.p>

                            <motion.h4
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.4 }}
                              className="text-base sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-4"
                            >
                              Service Includes
                            </motion.h4>
                            <motion.ul
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.5 }}
                              className="space-y-2 sm:space-y-3 mb-4 sm:mb-8"
                            >
                              {service.features.map((feature, idx) => (
                                <motion.li
                                  key={idx}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.5 + idx * 0.1 }}
                                  className="flex items-start"
                                >
                                  <FaCheckCircle className="text-green-500 mt-1 mr-2 sm:mr-3 flex-shrink-0 text-base sm:text-lg" />
                                  <span className="text-xs sm:text-base text-gray-700">
                                    {feature}
                                  </span>
                                </motion.li>
                              ))}
                            </motion.ul>

                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className={`bg-gradient-to-r ${service.color} hover:shadow-lg text-white font-semibold py-2 sm:py-3 px-4 sm:px-8 rounded-full transition-all text-xs sm:text-base`}
                            >
                              Schedule This Service
                            </motion.button>
                          </div>
                          <div className="lg:w-1/3">
                            <motion.div
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.6 }}
                              className="bg-gradient-to-br from-gray-100 to-gray-200 h-32 sm:h-48 md:h-64 rounded-xl flex items-center justify-center shadow-inner"
                            >
                              <span className="text-gray-400 text-xs sm:text-base">
                                Service Visualization
                              </span>
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Specialized Bird Management Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="py-10 sm:py-14 md:py-20 bg-white"
      >
        <div className="container mx-auto px-2 sm:px-4 max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-800 mb-12 text-center"
          >
            Progressive Bird Care Service
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-teal-50 p-4 sm:p-10 rounded-2xl shadow-lg border border-green-100"
            >
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="text-base sm:text-2xl font-semibold text-gray-800 mb-2 sm:mb-6 flex items-center"
              >
                <FaShieldAlt className="text-green-600 mr-3" />
                Bird Netting Solutions
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="text-xs sm:text-base text-gray-700 mb-2 sm:mb-6 leading-relaxed"
              >
                Professional installation of bird netting to prevent pigeons,
                sparrows, and other birds from accessing unwanted areas. Our
                netting is UV-resistant and virtually invisible.
              </motion.p>
              <motion.ul
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-2 sm:space-y-3 mb-4 sm:mb-8"
              >
                {[
                  "Pigeon control netting",
                  "Sparrow prevention systems",
                  "Custom installation for all building types",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </motion.ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-600 to-teal-600 hover:shadow-lg text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-full transition-all text-xs sm:text-base"
              >
                Get Bird Netting Quote
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 sm:p-10 rounded-2xl shadow-lg border border-blue-100"
            >
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="text-base sm:text-2xl font-semibold text-gray-800 mb-2 sm:mb-6 flex items-center"
              >
                <FaShieldAlt className="text-blue-600 mr-3" />
                Bird Spiking Systems
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="text-xs sm:text-base text-gray-700 mb-2 sm:mb-6 leading-relaxed"
              >
                Effective bird spiking solutions that create an uncomfortable
                landing surface for all types of birds without harming them.
                Ideal for ledges, signs, and other flat surfaces.
              </motion.p>
              <motion.ul
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-2 sm:space-y-3 mb-4 sm:mb-8"
              >
                {[
                  "Stainless steel spikes",
                  "Polycarbonate systems for sensitive areas",
                  "Humane and effective for all bird species",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <FaCheckCircle className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </motion.ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:shadow-lg text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-full transition-all text-xs sm:text-base"
              >
                Get Bird Spiking Quote
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Why Choose Our Services */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="py-10 sm:py-14 md:py-20 bg-gradient-to-br from-gray-50 to-gray-100"
      >
        <div className="container mx-auto px-2 sm:px-4 max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-800 mb-16 text-center"
          >
            Why Choose Our Pest Control Services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
            {[
              {
                icon: <FaLeaf className="text-3xl text-green-600" />,
                title: "Eco-Friendly Solutions",
                description:
                  "We prioritize environmentally responsible products that are safe for your family, pets, and the ecosystem.",
              },
              {
                icon: <FaUsers className="text-3xl text-blue-600" />,
                title: "Certified Experts",
                description:
                  "Our technicians are licensed, certified, and receive ongoing training in the latest pest control methods.",
              },
              {
                icon: <FaClock className="text-3xl text-purple-600" />,
                title: "24/7 Emergency Service",
                description:
                  "Available round the clock for urgent pest problems that can't wait for regular business hours.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white p-4 sm:p-8 rounded-2xl shadow-lg text-center border border-gray-100 hover:shadow-xl transition-all"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2 + 0.2,
                    type: "spring",
                  }}
                  viewport={{ once: true }}
                  className="bg-green-50 w-12 h-12 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-6"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-base sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-4">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="py-10 sm:py-14 md:py-20 bg-gradient-to-r from-green-600 to-green-800 text-white"
      >
        <div className="container mx-auto px-2 sm:px-4 text-center max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6"
          >
            Ready to Solve Your Pest Problems?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base sm:text-xl mb-6 sm:mb-10 max-w-2xl sm:max-w-3xl mx-auto"
          >
            Get professional pest control services tailored to your specific
            needs
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="bg-white text-green-700 hover:bg-gray-100 font-bold py-2 sm:py-4 px-6 sm:px-10 rounded-full transition-all shadow-lg hover:shadow-xl flex items-center justify-center text-xs sm:text-base"
            >
              Request Free Inspection
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:9831679025"
              className="border-2 border-white text-white hover:bg-white hover:text-green-700 font-bold py-2 sm:py-4 px-6 sm:px-10 rounded-full transition-all shadow-lg hover:shadow-xl flex items-center justify-center text-xs sm:text-base"
            >
              <FaPhone className="mr-2 sm:mr-3" />
              Call Now: 9831679025
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default ServicesPage;
