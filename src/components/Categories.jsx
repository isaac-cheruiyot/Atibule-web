import React from "react";
import { FaChild, FaChurch, FaLaptopCode, FaMoneyBill, FaPeopleGroup } from "react-icons/fa6";
import { GoClock, GoGlobe, GoVideo } from "react-icons/go";
import { TbBusinessplan } from "react-icons/tb";

const Categories = ({ selectedCategory, onCategorySelect }) => {
  const categories = [
    {
      title: "business", // Changed to lowercase
      icon: <TbBusinessplan />,
      description:
        "Learn essential skills in business management, entrepreneurship, and financial planning with expertly curated courses from Atibule.",
    },
    {
      title: "leadership", // Changed to lowercase
      icon: <FaPeopleGroup />,
      description:
        "Enhance your leadership abilities and create meaningful change in your workplace or community through our tailored programs.",
    },
    {
      title: "technology", // Changed to lowercase
      icon: <FaLaptopCode />,
      description:
        "Equip yourself with the tools to succeed in the digital age, focusing on IT skills and innovative digital solutions.",
    },
    {
      title: "financial education", // Changed to lowercase
      icon: <FaMoneyBill />,
      description:
        "Equip yourself with the tools to succeed in the digital age, focusing on IT skills and innovative digital solutions.",
    },
    {
      title: "church", // Changed to lowercase
      icon: <FaChurch />,
      description:
        "Equip yourself with the tools to succeed in the digital age, focusing on IT skills and innovative digital solutions.",
    },
    {
      title: "For kids", // Changed to lowercase
      icon: <FaChild />,
      description:
        "Equip yourself with the tools to succeed in the digital age, focusing on IT skills and innovative digital solutions.",
    },
  ];

  return (
    <div className="bg-white text-gray-800 pt-12">
      {/* Introductory Text */}
      <div className="text-center md:w-5/6 mx-auto mb-8">
        <h2 className="text-xl md:text-3xl font-bold mb-4">
          Find the course that fits your goals
        </h2>
        <p className="text-sm md:w-3/4 px-4 mx-auto text-start md:text-base text-gray-600 leading-relaxed">
          Whether you're looking to master fundamental skills, advance your
          career with internationally recognized certifications, or pivot to a
          new field, we offer the perfect program for you.
        </p>
        <div className="flex md:flex-row md:w-3/4 mx-auto flex-col md:justify-center justify-start items-start md:items-center md:gap-12 gap-2 mt-4">
          <span className="text-sm md:text-base md:border px-4 py-2 border-lime-800 rounded-md text-lime-800 flex items-center gap-2">
            <GoClock size={16} /> 4 Weeks to 12 Months
          </span>
          <span className="text-sm md:text-base md:border px-4 py-2 border-orange-500 rounded-md text-orange-500 flex items-center gap-2">
            <GoVideo size={16} /> Live classes
          </span>
          <span className="text-sm md:text-base md:border px-4 py-2 border-black rounded-md text-black flex items-center gap-2">
            <GoGlobe size={16} /> Available online
          </span>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="flex justify-center flex-wrap items-center gap-4 md:w-5/6 mx-auto p-4 rounded-md">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`flex  gap-2 items-center border rounded-md px-2 py-1 cursor-pointer ${
              category.title === selectedCategory
                ? "bg-lime-500 text-white"
                : "bg-white text-gray-800"
            }`}
            onClick={() => onCategorySelect(category.title)} // Trigger the onCategorySelect function passed from Home
          >
            {category.icon}
            <h3 className="text-lg font-bold">{category.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
