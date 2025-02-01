import React from "react";

const testimonials = [
  { name: "Pastor John K.", review: "Atibule's leadership training transformed our ministry. Highly recommended!" },
  { name: "Rev. Mary W.", review: "Our church has grown tremendously after applying the financial management lessons." },
];

const ChurchProgramsTestimonials = () => {
  return (
    <div className="py-10 px-6">
      <h2 className="text-3xl font-bold text-center">What Churches Say</h2>
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

export default ChurchProgramsTestimonials;
