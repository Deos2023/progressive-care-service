'use client';
import React from "react";
import { motion } from "framer-motion";

const CommonPests = () => {
  const pests = [
    { name: "Ants", icon: "🐜" },
    { name: "Spiders", icon: "🕷️" },
    { name: "Roaches", icon: "🐞" },
    { name: "Rodents", icon: "🐭" },
    { name: "Termites", icon: "🐜" },
    { name: "Mosquitoes", icon: "🦟" },
    { name: "Flies", icon: "🪰" },
    { name: "Bed Bugs", icon: "🛏️" },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading with luxury underline */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-block relative">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 relative z-10">
              Pests We Eliminate
            </h2>
            {/* animated underline */}
            <motion.div
              className="absolute left-0 right-0 bottom-1 h-1 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, #16a34a 0%, #22c55e 50%, #16a34a 100%)",
              }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>

          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto mt-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            We specialize in eliminating all types of common household and
            commercial pests.
          </motion.p>
        </motion.div>

        {/* Grid with floating cards */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {pests.map((pest, index) => (
            <motion.div
              key={index}
              variants={item}
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 4 + index * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.06,
                boxShadow: "0px 10px 25px rgba(0,0,0,0.1)",
              }}
              whileTap={{ scale: 0.97 }}
              className="bg-gray-50 p-6 rounded-lg text-center transition-all duration-300"
            >
              <div className="text-3xl mb-3">{pest.icon}</div>
              <h3 className="font-semibold text-gray-800">{pest.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CommonPests;
