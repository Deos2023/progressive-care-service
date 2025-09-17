"use client";
import { FaCheckCircle } from "react-icons/fa";
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

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Why Choose Progressive Care Service?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We provide reliable service to our customers since 2004. Our
              motive is to provide a safe and healthy environment to our customers. With over 20 years of
              experience, we've developed the most effective pest control
              strategies that prioritize your safety and deliver lasting
              results.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <FaCheckCircle className="text-green-600 text-xl mt-1 mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-1/2 md:pl-12">
            <div className="bg-green-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Schedule a Free Inspection
              </h3>
              <p className="text-gray-600 mb-6">
                Contact us today to schedule a free pest inspection and get a
                customized treatment plan.
              </p>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-800 placeholder-gray-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-800 placeholder-gray-500"
                />
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-800 placeholder-gray-500"
                />
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300"
                >
                  Request Free Inspection
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhyChooseUs;
