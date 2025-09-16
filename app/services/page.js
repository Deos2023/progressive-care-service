"use client"
import { useState } from 'react';
import Head from 'next/head';
import { FaCheckCircle, FaPhone, FaClock, FaShieldAlt, FaLeaf, FaUsers } from 'react-icons/fa';

const ServicesPage = () => {
  const [expandedService, setExpandedService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Termite Management Service",
      icon: "🐜",
      description: "Complete protection against destructive termites with advanced baiting and treatment systems.",
      details: "Our termite management service includes thorough inspection, soil treatment, baiting systems, and wood treatment to protect your property from structural damage. We offer both preventive and curative solutions.",
      features: ["Advanced detection technology", "Non-repellent termiticides", "10-year warranty", "Free follow-up inspections"],
      image: "/images/new2.JPG"
    },
    {
      id: 2,
      title: "Cockroach Management Service",
      icon: "🪳",
      description: "Effective elimination of cockroach infestations using targeted gel baits and insect growth regulators.",
      details: "We use specialized gel baits that attract and eliminate entire cockroach colonies. Our treatment focuses on harborage areas with minimal disruption to your daily activities.",
      features: ["Gel bait technology", "IGR treatment", "Residual spraying", "Sanitation recommendations"],
      image: "/images/cockroach-service.jpg"
    },
    {
      id: 3,
      title: "Mosquito Management Service",
      icon: "🦟",
      description: "Reduce mosquito populations and protect your family from mosquito-borne diseases.",
      details: "Our mosquito management includes source reduction, larvicidal treatment, and barrier spraying to create a mosquito-free environment in your outdoor spaces.",
      features: ["Larval control", "Adult mosquito control", "Breeding site identification", "Long-lasting formulations"],
      image: "/images/mosquito-service.jpg"
    },
    {
      id: 4,
      title: "Rodent Management Service",
      icon: "🐭",
      description: "Comprehensive rodent control using traps, baits, and exclusion techniques.",
      details: "We implement integrated rodent management that includes inspection, sanitation recommendations, trapping, baiting, and exclusion to prevent future infestations.",
      features: ["Multi-catch traps", "Tamper-proof bait stations", "Exclusion techniques", "Follow-up monitoring"],
      image: "/images/rodent-service.jpg"
    },
    {
      id: 5,
      title: "Fly Management Service",
      icon: "🪰",
      description: "Control fly populations with targeted treatments and sanitation improvements.",
      details: "Our fly management program includes identification of fly species, source elimination, and application of residual insecticides and baits specific to the type of flies present.",
      features: ["Fly light traps", "Residual sprays", "Larvicidal treatment", "Sanitation guidance"],
      image: "/images/fly-service.jpg"
    },
    {
      id: 6,
      title: "Bed Bugs Management Service",
      icon: "🛏️",
      description: "Complete eradication of bed bugs using heat treatment and targeted insecticides.",
      details: "We use a combination of heat treatment and insecticide application to eliminate all life stages of bed bugs. Our treatment includes pre-treatment preparation guidance and post-treatment verification.",
      features: ["Heat treatment", "Steam application", "Residual insecticides", "Follow-up inspection"],
      image: "/images/bedbug-service.jpg"
    },
    {
      id: 7,
      title: "Ants Management Service",
      icon: "🐜",
      description: "Targeted ant control that eliminates colonies at the source.",
      details: "Our ant management service includes identification of ant species, locating nests, and applying targeted baits and treatments that eliminate the entire colony, not just the foraging ants.",
      features: ["Baiting systems", "Nest elimination", "Barrier treatment", "Species identification"],
      image: "/images/ant-service.jpg"
    },
    {
      id: 8,
      title: "Bird Management Service",
      icon: "🐦",
      description: "Humane bird control solutions to protect your property from bird-related damage.",
      details: "Our progressive bird management service includes assessment, installation of deterrent systems, and ongoing maintenance to keep birds from roosting and nesting on your property.",
      features: ["Bird netting installation", "Bird spiking", "Visual deterrents", "Humane solutions"],
      image: "/images/bird-service.jpg"
    }
  ];

  const toggleService = (id) => {
    if (expandedService === id) {
      setExpandedService(null);
    } else {
      setExpandedService(id);
    }
  };

  return (
    <div className="min-h-screen">
      <Head>
        <title>Pest Control Services | Progressive Care Service </title>
        <meta name="description" content="Professional pest control services for residential and commercial properties. Termite, cockroach, mosquito, rodent, and bird control services." />
      </Head>

      {/* Hero Section */}
      <section className="bg-green-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Pest Control Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive pest management solutions tailored to your specific needs
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Professional Pest Management</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We use safe, effective methods to eliminate pests and prevent future infestations
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <div 
                  className="p-6 cursor-pointer flex justify-between items-center"
                  onClick={() => toggleService(service.id)}
                >
                  <div className="flex items-center">
                    <span className="text-3xl mr-4">{service.icon}</span>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                  <button className="bg-green-100 text-green-700 hover:bg-green-200 font-medium py-2 px-4 rounded-lg transition-colors">
                    {expandedService === service.id ? 'Show Less' : 'Learn More'}
                  </button>
                </div>
                
                {expandedService === service.id && (
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <div className="flex flex-col md:flex-row gap-6 mt-6">
                      <div className="md:w-2/3">
                        <h4 className="font-semibold text-gray-800 mb-2">Service Details:</h4>
                        <p className="text-gray-600 mb-6">{service.details}</p>
                        
                        <h4 className="font-semibold text-gray-800 mb-2">Service Includes:</h4>
                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <FaCheckCircle className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                              <span className="text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
                          Schedule This Service
                        </button>
                      </div>
                      <div className="md:w-1/3">
                        <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center text-gray-400">
                          Service Image
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Bird Management Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Progressive Bird Care Service</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <FaShieldAlt className="text-green-600 mr-2" />
                Bird Netting Solutions
              </h3>
              <p className="text-gray-600 mb-4">
                Professional installation of bird netting to prevent pigeons, sparrows, and other birds from accessing unwanted areas. Our netting is UV-resistant and virtually invisible.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Pigeon control netting</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Sparrow prevention systems</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Custom installation for all building types</span>
                </li>
              </ul>
              <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
                Get Bird Netting Quote
              </button>
            </div>
            
            <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <FaShieldAlt className="text-green-600 mr-2" />
                Bird Spiking Systems
              </h3>
              <p className="text-gray-600 mb-4">
                Effective bird spiking solutions that create an uncomfortable landing surface for all types of birds without harming them. Ideal for ledges, signs, and other flat surfaces.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Stainless steel spikes</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Polycarbonate systems for sensitive areas</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Humane and effective for all bird species</span>
                </li>
              </ul>
              <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
                Get Bird Spiking Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Why Choose Our Pest Control Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaLeaf className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Eco-Friendly Solutions</h3>
              <p className="text-gray-600">
                We prioritize environmentally responsible products that are safe for your family, pets, and the ecosystem.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Certified Experts</h3>
              <p className="text-gray-600">
                Our technicians are licensed, certified, and receive ongoing training in the latest pest control methods.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaClock className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">24/7 Emergency Service</h3>
              <p className="text-gray-600">
                Available round the clock for urgent pest problems that can't wait for regular business hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Solve Your Pest Problems?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get professional pest control services tailored to your specific needs
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/contact" 
              className="bg-white text-green-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Request Free Inspection
            </a>
            <a 
              href="tel:1355555555" 
              className="border-2 border-white text-white hover:bg-white hover:text-green-700 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              <FaPhone className="inline mr-2" />
              Call Now: (355) 555-5555
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;