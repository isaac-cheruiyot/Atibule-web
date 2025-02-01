import React, { useState, useEffect } from 'react';
import { MdClose, MdMenu, MdSearch } from 'react-icons/md';
import { GoArrowUpRight, GoChevronDown } from 'react-icons/go';
import { Link, Links } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'Why Atibule?', link: '/about' },
    { name: 'Courses', link: '/courses', dropdown: ['Business', 'Leadership', 'IT and Digital Inclusion'] },
    { name: 'Categories', link: '/categories', dropdown: ['For Kids', 'Church', 'Financial Education'] },
    { name: 'For Kids', link: '/kids' },
    { name: 'For Churches', link: '/church' },
    { name: 'News', link: '/news' },
  ];

  // Detect scroll to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 border-b  px-8 w-full z-50 ${scrolling ? 'bg-white text-lime-900 border-b  border-lime-400 shadow' : 'border-white/50'}`}>
      <div className="md:w-full mx-auto flex justify-between items-center py-4">
        {/* Logo and Navigation */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4">
            <img
              src={(scrolling ? '/atibule-fd-mn.png' : '/atibule-fl-mn.png')}
              alt="Company Logo"
              className="h-10 md:h-12 object-contain"
            />
            <hr className={`w-[1px] h-12 ${scrolling ? 'bg-lime-200 ' : 'bg-white/50'}`} />
          </div>
          <div className="hidden md:flex items-center gap-8 relative">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <Link
                  to={item.link}
                  className={`text-sm md:text-md font-semibold ${scrolling ? 'text-lime-900' : 'text-white'} hover:text-yellow-500 transition-colors flex items-center gap-2`}>
                  {item.name}
                  {item.dropdown && <GoChevronDown className={`${scrolling ? 'text-lime-900' : 'text-white'}`} size={16} />}
                </Link>
                {/* Mega Menu for Courses Dropdown */}
                {item.dropdown && (
                  <div className="absolute hidden group-hover:block bg-white text-black shadow-md py-2 px-4 mt-2 rounded-md w-48">
                    {item.dropdown.map((course, i) => (
                      <Link
                        to={`/${course.toLowerCase().replace(/ /g, '-')}`}
                        key={i}
                        className="block py-2 px-4 hover:bg-gray-100 transition-colors"
                      >
                        {course}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Search and Apply Now */}
        <div className="flex items-center gap-4">
          <button
            aria-label="Search"
            className={`text-md font-semibold ${scrolling ? 'text-lime-900' : 'text-white'} hover:text-yellow-500`}
          >
            <MdSearch size={28} />
          </button>
          <Link to="/apply" className={`text-sm  hidden   md:flex ${scrolling ? 'bg-lime-900 hover:text-yellow-500' : 'hover:bg-white hover:text-lime-900'} items-center gap-2 border-2 border-white px-4 py-2 rounded-md md:text-md font-semibold text-white transition-colors`}>
            Apply Now
            <GoArrowUpRight size={16} />
          </Link>
          {/* Mobile Menu Toggle Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden block text-white transition-colors">
            <MdMenu size={32} className={`${scrolling ? 'text-black' : 'text-white'}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-0 h-screen left-0 w-full bg-white text-lime-900 shadow-lg ">
            <div className="flex justify-between items-center border-b border-lime-400 pb-4 p-6">
              <img src="/atibule-fd-mn.png" alt="Company Logo" className="h-6 md:h-10 object-contain" />
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-white transition-colors">
                <MdClose size={32} className='text-lime-900' />
              </button>
            </div>
            <div className='h-8 border-b border-lime-400'></div>
            <div className="flex flex-col items-start gap-4 ">
              {navItems.map((item, index) => (
                <div className='w-full border-b border-lime-400' key={index}>
                  {item.dropdown ? (
                    <div className="relative border-b  border-lime-400 w-full text-center">
                      <button className="text-lg font-semibold">{item.name}</button>
                      <div className="bg-gray-100 p-2 rounded-md mt-2">
                        {item.dropdown.map((course, i) => (
                          <Link
                            to={`/${course.toLowerCase().replace(/ /g, '-')}`}
                            key={i}
                            className="block py-2 px-4 hover:bg-gray-200 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {course}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link to={item.link} className="text-lg font-semibold" onClick={() => setIsMobileMenuOpen(false)}>
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
