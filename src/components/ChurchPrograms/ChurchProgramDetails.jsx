import React from "react";

const ChurchProgramsDetails = () => {
  return (
    <div className="bg-blue-100 py-10">
      <h2 className="text-3xl font-bold text-center">More About Our Programs</h2>
      <div className="mt-6 px-6 space-y-4">
        <div className="border p-4 rounded-md shadow-md bg-white">
          <h4 className="text-xl font-semibold text-blue-900">Church Leadership Training</h4>
          <p className="text-gray-600">Designed for pastors, elders, and ministry leaders to develop leadership skills and pastoral care abilities.</p>
        </div>
        <div className="border p-4 rounded-md shadow-md bg-white">
          <h4 className="text-xl font-semibold text-blue-900">Youth & Worship Ministry</h4>
          <p className="text-gray-600">A hands-on course focusing on leading worship, youth engagement, and building a dynamic ministry.</p>
        </div>
        <div className="border p-4 rounded-md shadow-md bg-white">
          <h4 className="text-xl font-semibold text-blue-900">Church Finance & Management</h4>
          <p className="text-gray-600">Equips church administrators and finance teams with proper budgeting and financial planning strategies.</p>
        </div>
        <div className="border p-4 rounded-md shadow-md bg-white">
          <h4 className="text-xl font-semibold text-blue-900">Community Outreach & Evangelism</h4>
          <p className="text-gray-600">Guides churches on how to effectively reach their communities through outreach, charity, and missions.</p>
        </div>
      </div>
    </div>
  );
};

export default ChurchProgramsDetails;
