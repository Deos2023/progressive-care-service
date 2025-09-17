"use client";
import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaClock, FaUsers, FaStar, FaPhone } from 'react-icons/fa';

const CountUp = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const stats = [
    { id: 1, icon: <FaClock />, end: 20, suffix: '+', text: 'Years Experience' },
    { id: 2, icon: <FaUsers />, end: 15000, suffix: '+', text: 'Happy Customers' },
    { id: 3, icon: <FaStar />, end: 100, suffix: '%', text: 'Satisfaction Guarantee' },
    { id: 4, icon: <FaPhone />, end: 24, suffix: '/7', text: 'Emergency Service' }
  ];

  return (
    <section ref={ref} className="py-20 bg-green-700 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Why Choose Our Services?
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.id}
              stat={stat}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ stat, index, isInView }) => {
  const [count, setCount] = useState(0);
  const duration = 2;

  useEffect(() => {
    if (isInView) {
      let startTimestamp;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);

        setCount(Math.floor(progress * stat.end));

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    }
  }, [isInView, stat.end]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/10 shadow-lg hover:shadow-xl transition-all"
    >
      {/* Icon with circular background */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={isInView ? { scale: 1, rotate: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.2, type: "spring" }}
        className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6"
      >
        <div className="text-2xl text-white">
          {stat.icon}
        </div>
      </motion.div>

      {/* Animated number */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.4, type: "spring" }}
        className="text-5xl md:text-6xl font-bold mb-2 text-white"
      >
        {count}
        <span className="text-3xl md:text-4xl">{stat.suffix}</span>
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
        className="text-lg font-medium text-white/90"
      >
        {stat.text}
      </motion.p>
    </motion.div>
  );
};

export default CountUp;
