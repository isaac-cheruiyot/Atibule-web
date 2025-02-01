import React from "react";

const courses = [
  { title: "Coding for Kids", description: "Fun and easy coding lessons.", icon: "💻" },
  { title: "Art & Creativity", description: "Explore artistic skills.", icon: "🎨" },
  { title: "Math Adventures", description: "Math games and puzzles.", icon: "🧮" },
];

const KidsCourses = () => {
  return (
    <div className="py-10">
      <h2 className="text-3xl font-bold text-center">Courses for Kids</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 px-6">
        {courses.map((course, index) => (
          <div key={index} className="border p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold">{course.icon} {course.title}</h3>
            <p className="text-gray-600 mt-2">{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KidsCourses;
