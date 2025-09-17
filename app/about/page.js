"use client";
import Image from "next/image";
import CountUp from "../components/CountUp";
import { FaCheckCircle, FaUsers, FaShieldAlt, FaLeaf } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.15 },
  }),
};

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            About progressive care service
          </motion.h1>
          <motion.p
            variants={fadeUp}
            custom={0.3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-xl max-w-3xl mx-auto"
          >
            Protecting homes and businesses with trusted pest control solutions
            since 2004
          </motion.p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <motion.div
              className="md:w-1/2"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">
                Founded in 2004, progressive care service began as a small
                family business with a mission to provide effective, safe pest
                control solutions to our local community…
              </p>
              <p className="text-gray-600 mb-4">
                To ensure quality and skilled service to our customers, we only
                ensure certified technicians…
              </p>
              <p className="text-gray-600">
                We validate our service with our quality assurance program…
              </p>
            </motion.div>
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/2.jpg"
                  alt="progressive care service Team"
                  fill
                  className="object-cover scale-105 hover:scale-110 transition-transform duration-500"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Mission & Values
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Everything we do is guided by our core values…
              We use product of Bayer, FMC, Sandhya Chemical, UPL.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaShieldAlt />,
                title: "Protection",
                text: "Guide lines followed…",
              },
              {
                icon: <FaLeaf />,
                title: "Eco-Friendly Approach",
                text: "We use eco-friendly…",
              },
              {
                icon: <FaUsers />,
                title: "Customer Focus",
                text: "Your satisfaction is…",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 12px 28px rgba(0,0,0,0.08)",
                }}
                className="bg-white p-8 rounded-lg shadow-md text-center transition-all duration-300"
              >
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600 text-2xl">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-gray-800 mb-12 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Why Choose progressive care service
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                title: "Certified Experts",
                desc: "Our technicians are licensed…",
              },
              {
                title: "Advanced Technology",
                desc: "We use state-of-the-art…",
              },
              {
                title: "Guaranteed Results",
                desc: "We stand behind our work…",
              },
              {
                title: "Emergency Services",
                desc: "Available 24/7 for urgent…",
              },
              { title: "Custom Solutions", desc: "We develop tailored…" },
              {
                title: "Local Expertise",
                desc: "As a locally owned business…",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex items-start mb-6"
                variants={fadeUp}
                custom={i * 0.2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <FaCheckCircle className="text-green-600 text-xl mt-1 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <CountUp />

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-gray-800 mb-12 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Meet Our Team
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                src: "/images/pest2.jpg",
                name: "Experienced Technician",
                role: "Senior Pest Control Specialist",
                text: "Over 20 years of field experience delivering top-notch pest control solutions.",
              },
              {
                src: "/images/3.jpg",
                name: "Operations Team",
                role: "Operations & Logistics",
                text: "Ensuring smooth service scheduling and customer support every day.",
              },
              {
                src: "/images/gallery/new1.jpg",
                name: "Technical Team",
                role: "Lead Service Crew",
                text: "Our highly trained staff providing on-site inspections and treatments.",
              },
            ].map((member, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 12px 28px rgba(0,0,0,0.1)" }}
                className="bg-white rounded-lg overflow-hidden shadow-md text-center transition-all duration-300"
              >
                <div className="relative h-72">
                  <Image
                    src={member.src}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-green-600 mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl font-bold mb-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Ready to Protect Your Property?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 max-w-3xl mx-auto"
            variants={fadeUp}
            custom={0.2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Join thousands of satisfied customers who trust progressive care
            service…
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            variants={fadeUp}
            custom={0.4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <a
              href="/contact"
              className="bg-white text-green-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors transform hover:scale-105"
            >
              Get Free Inspection
            </a>
            <a
              href="tel:03379664262"
              className="border-2 border-white text-white hover:bg-white hover:text-green-700 font-bold py-3 px-8 rounded-lg transition-colors transform hover:scale-105"
            >
              Call Now: 03379664262
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
