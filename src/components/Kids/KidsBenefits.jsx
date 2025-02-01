import React from "react";
import { Link } from "react-router-dom";

const benefits = [
  "Interactive learning with games and activities.",
  "Expert instructors with child-friendly lessons.",
  "Flexible online access anytime, anywhere.",
];

const KidsBenefits = () => {
  return (
    <div className="p-10 h-[500px] bg-yellow-100 rounded-2xl overflow-hidden flex justify-between items-center w-11/12 mx-auto">
        <div className="w-full space-y-4  py-10 ">
      <h2 className="text-3xl font-bold text-start">Why Choose Atibule for Kids?</h2>
      <ul className="mt-6 text-lg list-disc list-inside">
        {benefits.map((benefit, index) => (
          <li key={index} className="text-gray-700">{benefit}</li>
        ))}
        </ul>
        <Link to={'/apply'} className="bg-yellow-500 mt-8 text-white px-4 py-2 rounded-md">Explore Course</Link>
    </div>
    <div className="w-full h-full">
        <img src={'/images/2ladies.jpeg'} alt="" className="w-full rounded-2xl h-full object-cover" />
    </div>
    </div>
  );
};

export default KidsBenefits;
