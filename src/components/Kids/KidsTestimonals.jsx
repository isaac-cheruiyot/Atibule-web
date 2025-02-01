import React from "react";

const testimonials = [
  { name: "Sarah", review: "My son loves the coding classes! The lessons are fun and easy to follow." },
  { name: "James", review: "Great experience! My daughter is excited to learn every day." },
];

const KidsTestimonials = () => {
  return (
    <div className="py-10 px-6">
      <h2 className="text-3xl font-bold text-center">What Parents Say</h2>
      <div className="mt-6 space-y-4">
        {testimonials.map((t, index) => (
          <div key={index} className="border p-4 rounded-md shadow-md">
            <p className="text-gray-600">"{t.review}"</p>
            <h4 className="mt-2 text-lg font-semibold text-blue-800">- {t.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KidsTestimonials;
