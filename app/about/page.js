"use client";
import Image from 'next/image';
import { FaCheckCircle, FaUsers, FaShieldAlt, FaAward, FaLeaf } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Anona Pest Control</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Protecting homes and businesses with trusted pest control solutions since 2005
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2005, Anona Pest Control began as a small family business with a mission to provide 
                effective, safe pest control solutions to our local community. What started as a single truck 
                operation has grown into one of the region's most trusted pest management companies.
              </p>
              <p className="text-gray-600 mb-4">
                Our founder, John Anona, recognized the need for pest control services that prioritize both 
                effectiveness and environmental responsibility. This vision continues to guide our company 
                today as we serve thousands of satisfied customers across the state.
              </p>
              <p className="text-gray-600">
                Over the years, we've expanded our services, trained expert technicians, and invested in 
                the latest pest control technologies, but our commitment to exceptional service and customer 
                satisfaction remains unchanged.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/2.jpg"
                  alt="Anona Pest Control Team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission & Values</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Everything we do is guided by our core values and commitment to excellence in pest management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Protection</h3>
              <p className="text-gray-600">
                We protect what matters most to you - your home, your business, and your family's health.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaLeaf className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Eco-Friendly Approach</h3>
              <p className="text-gray-600">
                We use environmentally responsible methods that are safe for your family and pets.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Customer Focus</h3>
              <p className="text-gray-600">
                Your satisfaction is our top priority. We're not happy until you're completely satisfied.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Why Choose Anona Pest Control</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <div className="flex items-start mb-6">
                <FaCheckCircle className="text-green-600 text-xl mt-1 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Certified Experts</h3>
                  <p className="text-gray-600">
                    Our technicians are licensed, certified, and receive ongoing training in the latest pest control methods.
                  </p>
                </div>
              </div>

              <div className="flex items-start mb-6">
                <FaCheckCircle className="text-green-600 text-xl mt-1 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Advanced Technology</h3>
                  <p className="text-gray-600">
                    We use state-of-the-art equipment and the most effective products available for lasting results.
                  </p>
                </div>
              </div>

              <div className="flex items-start mb-6">
                <FaCheckCircle className="text-green-600 text-xl mt-1 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Guaranteed Results</h3>
                  <p className="text-gray-600">
                    We stand behind our work with satisfaction guarantees and follow-up services if needed.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start mb-6">
                <FaCheckCircle className="text-green-600 text-xl mt-1 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Emergency Services</h3>
                  <p className="text-gray-600">
                    Available 24/7 for urgent pest problems that can't wait for regular business hours.
                  </p>
                </div>
              </div>

              <div className="flex items-start mb-6">
                <FaCheckCircle className="text-green-600 text-xl mt-1 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Custom Solutions</h3>
                  <p className="text-gray-600">
                    We develop tailored treatment plans based on your specific pest problem and property type.
                  </p>
                </div>
              </div>

              <div className="flex items-start mb-6">
                <FaCheckCircle className="text-green-600 text-xl mt-1 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Local Expertise</h3>
                  <p className="text-gray-600">
                    As a locally owned business, we understand the specific pest challenges in our region.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">18+</div>
              <div className="text-lg">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15,000+</div>
              <div className="text-lg">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-lg">Satisfaction Guarantee</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-lg">Emergency Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Meet Our Leadership Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md text-center">
              <div className="relative h-72">
                <Image
                  src="/images/new2.JPG"
                  alt="John Anona - Founder & CEO"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">John Anona</h3>
                <p className="text-green-600 mb-3">Founder & CEO</p>
                <p className="text-gray-600">
                  With over 20 years in the pest control industry, John founded Anona with a vision for safer, 
                  more effective pest management.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md text-center">
              <div className="relative h-72">
                <Image
                  src="/images/3.jpg"
                  alt="Sarah Johnson - Operations Manager"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">Sarah Johnson</h3>
                <p className="text-green-600 mb-3">Operations Manager</p>
                <p className="text-gray-600">
                  Sarah ensures our operations run smoothly and that every customer receives exceptional service 
                  from initial contact to job completion.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md text-center">
              <div className="relative h-72">
                <Image
                  src="/images/4.webp"
                  alt="Michael Chen - Head Technician"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">Michael Chen</h3>
                <p className="text-green-600 mb-3">Head Technician</p>
                <p className="text-gray-600">
                  Michael leads our team of technicians with expertise in integrated pest management and 
                  eco-friendly treatment solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Protect Your Property?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied customers who trust Anona Pest Control with their homes and businesses.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/contact" 
              className="bg-white text-green-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Get Free Inspection
            </a>
            <a 
              href="tel:1355555555" 
              className="border-2 border-white text-white hover:bg-white hover:text-green-700 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Call Now: (355) 555-5555
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;