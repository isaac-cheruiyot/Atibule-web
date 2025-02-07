import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaArrowUp } from 'react-icons/fa';

const Layout = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [showScroll, setShowScroll] = useState(false);

  const toggleHovered = (index) => {
    setHoveredIndex(!index);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      onMouseEnter={() => setHoveredIndex(null)}
      onMouseLeave={() => setHoveredIndex(null)}
      className="relative"
    >
      <Navbar toggleHovered={toggleHovered} hoveredIndex={hoveredIndex} />
      <div className="">
        <Outlet />
      </div>
      <Footer />

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-[#a3e635] text-[#787878] p-3 rounded-full shadow-lg hover:bg-blue-800 transition-all"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default Layout;
