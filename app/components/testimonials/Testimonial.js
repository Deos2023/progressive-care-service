"use client";
import { FaStar, FaQuoteLeft, FaUser } from "react-icons/fa";
import React from "react";

const Testimonial = () => {
  const testimonials = [
    {
      quote:
        "Progressive Care Service (Pest Control) eliminated our ant problem completely. Their service was professional and the technicians were very knowledgeable.",
      author: "Taniya Biswas",
      location: "Shyambazar",
    },
    {
      quote:
        "We've been using Progressive Care Service for our restaurant for 3 years now. They keep our establishment pest-free and always work around our schedule.",
      author: "Mehebub Saikh",
      location: "Rajabazar",
    },
    {
      quote:
        "I was worried about using pesticides with my newborn in the house, but Progressive Care Service used safe, eco-friendly products that worked perfectly.",
      author: "Puja Ghosh",
      location: "Hatibagan",
    },
  ];
  return (
    <div>
      <section className="py-10 sm:py-14 md:py-16 bg-gray-100">
        <div className="container mx-auto px-2 sm:px-4 max-w-6xl">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              What Our Customers Say
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl sm:max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied
              customers across the region.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-md flex flex-col h-full"
              >
                <div className="flex mb-2 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className="text-yellow-500 text-base sm:text-lg"
                    />
                  ))}
                </div>
                <FaQuoteLeft className="text-green-600 text-xl sm:text-2xl mb-2 sm:mb-4" />
                <p className="text-gray-600 italic mb-4 sm:mb-6 text-sm sm:text-base">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center mt-auto">
                  <div className="bg-green-600 rounded-full p-1.5 sm:p-2 mr-2 sm:mr-3">
                    <FaUser className="text-white text-base sm:text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                      {testimonial.author}
                    </h4>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
