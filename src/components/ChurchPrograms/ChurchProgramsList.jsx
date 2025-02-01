import React from "react";

const programs = [
  { title: "Church Leadership Training", description: "Develop strong leaders for your church community.", icon: "📖" },
  { title: "Youth & Worship Ministry", description: "Empower the next generation in worship and service.", icon: "🎶" },
  { title: "Church Finance & Management", description: "Learn financial stewardship and church budgeting.", icon: "💰" },
  { title: "Community Outreach & Evangelism", description: "Train your church to impact lives beyond the walls.", icon: "🤝" },
];

const ChurchProgramsList = () => {
  return (
    <div className="py-10">
      <h2 className="text-3xl font-bold text-center">Programs We Offer</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 px-6">
        {programs.map((program, index) => (
          <div key={index} className="border p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold">{program.icon} {program.title}</h3>
            <p className="text-gray-600 mt-2">{program.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChurchProgramsList;
