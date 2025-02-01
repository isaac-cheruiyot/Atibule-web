import React, { useState } from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import AboutSection from '../components/AboutSection';
import BlogSection from '../components/BlogSection';
import Features from '../components/FeatureSection';
import Testimonials from '../components/Testimonials';
import Accreditation from '../components/Accreditation';
import BlogPage from '../components/Blog';
import FetchCourses from '../components/FetchCourses';
import SchoolsSection from '../components/Schools/SchoolsSection';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("business"); // Default value is lowercase

  // Function to update selected category based on the category clicked
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className='w-screen'>
      <Hero />
      <Categories 
        selectedCategory={selectedCategory} // Pass the selected category
        onCategorySelect={handleCategoryChange} // Pass the function to handle category change
      />
      <div className='px-8 md:px-20'>
      <FetchCourses category={selectedCategory} /> {/* Pass selected category to FetchCourse */}
      </div>
      <SchoolsSection />
      <AboutSection />
      <Features />
      <Testimonials />
÷      <BlogSection />
    </div>
  );
};

export default Home;
