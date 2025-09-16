'use client';
import {FaStar,FaQuoteLeft ,FaUser} from 'react-icons/fa';
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
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied
              customers across the region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500 text-lg" />
                  ))}
                </div>
                <FaQuoteLeft className="text-green-600 text-2xl mb-4" />
                <p className="text-gray-600 italic mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className="bg-green-600 rounded-full p-2 mr-3">
                    <FaUser className="text-white text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {testimonial.author}
                    </h4>
                    <p className="text-gray-600 text-sm">
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
