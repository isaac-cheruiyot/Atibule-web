import React, { useState } from 'react';
import FetchCourses from '../components/FetchCourses';

const AllCoursesPage = () => {
  // State to track the selected category; default "all" means no filtering.
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Handle change for the dropdown filter.
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div>
      <div className="w-full h-20 bg-lime-900"></div>
      <div className="w-4/5 mx-auto h-full py-8">
        <h2 className="text-lg mb-4 font-bold">Courses for You</h2>
        <div className="mb-6">
          <label htmlFor="category" className="mr-2 font-semibold">
            Filter by Category:
          </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="p-2 border rounded-md"
          >
            <option value="all">All</option>
            <option value="business">Business</option>
            <option value="leadership">Leadership</option>
            <option value="it-and-digital-inclusion">IT and Digital Inclusion</option>
            <option value="for-kids">For Kids</option>
            <option value="for-churches">For Churches</option>
            <option value="financial-education">Financial Education</option>
          </select>
        </div>

        {/* If "all" is selected, pass undefined to display all courses */}
        <FetchCourses category={selectedCategory !== "all" ? selectedCategory : undefined} />
      </div>
    </div>
  );
};

export default AllCoursesPage;
