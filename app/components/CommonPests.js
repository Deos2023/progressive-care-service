'use client';
import React from "react";

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
  return (
    <div>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Pests We Eliminate
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We specialize in eliminating all types of common household and
              commercial pests.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {pests.map((pest, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-3xl mb-3">{pest.icon}</div>
                <h3 className="font-semibold text-gray-800">{pest.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommonPests;
