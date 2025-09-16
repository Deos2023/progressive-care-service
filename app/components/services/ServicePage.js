'use client';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaShieldAlt, FaCheckCircle } from 'react-icons/fa';

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [expandedService, setExpandedService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Termite Management Service",
      icon: "🐜",
      description: "Complete protection against destructive termites with advanced baiting and treatment systems.",
      details: "Our termite management service includes thorough inspection, soil treatment, baiting systems, and wood treatment to protect your property from structural damage. We offer both preventive and curative solutions.",
      features: ["Advanced detection technology", "Non-repellent termiticides", "10-year warranty", "Free follow-up inspections"]
    },
    {
      id: 2,
      title: "Cockroach Management Service",
      icon: "🪳",
      description: "Effective elimination of cockroach infestations using targeted gel baits and insect growth regulators.",
      details: "We use specialized gel baits that attract and eliminate entire cockroach colonies. Our treatment focuses on harborage areas with minimal disruption to your daily activities.",
      features: ["Gel bait technology", "IGR treatment", "Residual spraying", "Sanitation recommendations"]
    },
    {
      id: 3,
      title: "Mosquito Management Service",
      icon: "🦟",
      description: "Reduce mosquito populations and protect your family from mosquito-borne diseases.",
      details: "Our mosquito management includes source reduction, larvicidal treatment, and barrier spraying to create a mosquito-free environment in your outdoor spaces.",
      features: ["Larval control", "Adult mosquito control", "Breeding site identification", "Long-lasting formulations"]
    },
    {
      id: 4,
      title: "Rodent Management Service",
      icon: "🐭",
      description: "Comprehensive rodent control using traps, baits, and exclusion techniques.",
      details: "We implement integrated rodent management that includes inspection, sanitation recommendations, trapping, baiting, and exclusion to prevent future infestations.",
      features: ["Multi-catch traps", "Tamper-proof bait stations", "Exclusion techniques", "Follow-up monitoring"]
    },
    {
      id: 5,
      title: "Fly Management Service",
      icon: "🪰",
      description: "Control fly populations with targeted treatments and sanitation improvements.",
      details: "Our fly management program includes identification of fly species, source elimination, and application of residual insecticides and baits specific to the type of flies present.",
      features: ["Fly light traps", "Residual sprays", "Larvicidal treatment", "Sanitation guidance"]
    },
    {
      id: 6,
      title: "Bed Bugs Management Service",
      icon: "🛏️",
      description: "Complete eradication of bed bugs using heat treatment and targeted insecticides.",
      details: "We use a combination of heat treatment and insecticide application to eliminate all life stages of bed bugs. Our treatment includes pre-treatment preparation guidance and post-treatment verification.",
      features: ["Heat treatment", "Steam application", "Residual insecticides", "Follow-up inspection"]
    },
    {
      id: 7,
      title: "Ants Management Service",
      icon: "🐜",
      description: "Targeted ant control that eliminates colonies at the source.",
      details: "Our ant management service includes identification of ant species, locating nests, and applying targeted baits and treatments that eliminate the entire colony, not just the foraging ants.",
      features: ["Baiting systems", "Nest elimination", "Barrier treatment", "Species identification"]
    },
    {
      id: 8,
      title: "Bird Management Service",
      icon: "🐦",
      description: "Humane bird control solutions to protect your property from bird-related damage.",
      details: "Our progressive bird management service includes assessment, installation of deterrent systems, and ongoing maintenance to keep birds from roosting and nesting on your property.",
      features: ["Bird netting installation", "Bird spiking", "Visual deterrents", "Humane solutions"]
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
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Professional Pest Management Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive pest control solutions tailored to your specific needs. We use safe, effective methods to eliminate pests and prevent future infestations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ${expandedService === service.id ? 'shadow-lg' : 'hover:shadow-lg'}`}
            >
              <div 
                className="p-6 cursor-pointer flex justify-between items-center"
                onClick={() => toggleService(service.id)}
              >
                <div className="flex items-center">
                  <span className="text-2xl mr-4">{service.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                </div>
                {expandedService === service.id ? (
                  <FaChevronUp className="text-green-600" />
                ) : (
                  <FaChevronDown className="text-gray-400" />
                )}
              </div>
              
              {expandedService === service.id && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 mb-4">{service.details}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Service Includes:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <FaCheckCircle className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300">
                    Schedule This Service
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Specialized Bird Management Section */}
        <div className="mt-16 bg-green-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Progressive Bird Care Service</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <FaShieldAlt className="text-green-600 mr-2" />
                Bird Netting Solutions
              </h4>
              <p className="text-gray-600 mb-4">
                Professional installation of bird netting to prevent pigeons, sparrows, and other birds from accessing unwanted areas. Our netting is UV-resistant and virtually invisible.
              </p>
              <ul className="space-y-2">
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
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <FaShieldAlt className="text-green-600 mr-2" />
                Bird Spiking Systems
              </h4>
              <p className="text-gray-600 mb-4">
                Effective bird spiking solutions that create an uncomfortable landing surface for all types of birds without harming them. Ideal for ledges, signs, and other flat surfaces.
              </p>
              <ul className="space-y-2">
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
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Get Free Inspection for All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;