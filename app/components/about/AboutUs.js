"use client";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRef } from "react";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Eco-Friendly Solutions",
      description:
        "We use environmentally responsible products that are safe for your family and pets.",
    },
    {
      title: "Certified Technicians",
      description:
        "Our team consists of highly trained and certified pest control experts.",
    },
    {
      title: "Guaranteed Results",
      description:
        "We stand behind our work with satisfaction guarantees on all our services.",
    },
    {
      title: "Free Inspections",
      description:
        "Get a comprehensive pest assessment with our complimentary inspection service.",
    },
  ];
  const nameRef = useRef("");
  const emailRef = useRef("");
  const phoneRef = useRef("");
  const handleFreeSubmit = (e) => {
    e.preventDefault();
    const userMsg = `Name: ${nameRef.current.value}\nEmail: ${emailRef.current.value}\nPhone: ${phoneRef.current.value}\nRequesting a Free Inspection.`;
    const encodedMsg = encodeURIComponent(userMsg);
    window.open(`https://wa.me/9831679025?text=${encodedMsg}`, "_blank");
  };
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-10 sm:py-14 md:py-16 bg-white">
      <div className="container mx-auto px-2 sm:px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-8 md:gap-12">
          {/* Left Side */}
          <motion.div
            className="w-full md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              Why Choose Progressive Care Service?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
              We provide reliable service to our customers since 2004. Our
              motive is to provide a safe and healthy environment to our
              customers. With over 20 years of experience, we've developed the
              most effective pest control strategies that prioritize your safety
              and deliver lasting results.
            </p>

            <motion.div
              className="space-y-3 sm:space-y-4"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="flex items-start"
                >
                  <FaCheckCircle className="text-green-600 text-lg sm:text-xl mt-1 mr-2 sm:mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side (Form) */}
          <motion.div
            className="w-full md:w-1/2 md:pl-8"
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="bg-green-100 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg h-full flex flex-col justify-center">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                Schedule a Free Inspection
              </h3>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                Contact us today to schedule a free pest inspection and get a
                customized treatment plan.
              </p>
              <form className="space-y-3 sm:space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-800 placeholder-gray-500 text-sm sm:text-base"
                  ref={nameRef}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  ref={emailRef}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-800 placeholder-gray-500 text-sm sm:text-base"
                />
                <input
                  type="tel"
                  placeholder="Your Phone"
                  ref={phoneRef}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-800 placeholder-gray-500 text-sm sm:text-base"
                />
                <motion.button
                  type="submit"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 sm:py-3 px-4 rounded-lg transition-colors duration-300 text-sm sm:text-base"
                  onClick={handleFreeSubmit}
                >
                  Request Free Inspection via WhatsApp
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
