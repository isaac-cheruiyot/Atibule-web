import React, { useState, useEffect } from 'react';
import { MdClose, MdMenu, MdSearch } from 'react-icons/md';
import { GoArrowUpRight, GoChevronDown } from 'react-icons/go';
import { Link } from 'react-router-dom';


const PageNav = ({toggleHovered, hoveredIndex}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

 

  const navItems = [
    { name: 'Home', link: '/' },
    { 
      name: 'Why Atibule?', 
      link: '/about', 
      desc: 'Atibule is a trusted hub for education, innovation, and personal growth, dedicated to equipping individuals with the skills and knowledge they need to excel in business, leadership, IT, and digital inclusion.'
    },
    { 
      name: 'Courses', 
      link: '/courses', 
      desc: 'Explore our comprehensive range of courses designed to empower you with the knowledge and skills you need to succeed in business, leadership, technology, and digital inclusion.',
      dropdown: [
        { link: '/courses/business', title: "Business" }, 
        { link: '/courses/leadership', title: 'Leadership' }, 
        { link: '/courses/technology', title: 'Technology' }
      ]
    },
    
    { name: 'For Kids', link: '/kids', desc: 'Atibule offers a wide range of educational programs designed to inspire and engage children, from early childhood to adolescence, fostering their intellectual, emotional, and social development.' },
    { name: 'For Churches', link: '/church-programs', desc: 'Atibule provides a variety of resources and programs designed to support and enhance the spiritual growth of church communities, including Bible studies, leadership training, and community outreach initiatives.' },
    { name: 'Resources' ,
      desc: 'Stay updated with the latest news and events from Atibule, including new course offerings, community events, and educational resources.' ,
      dropdown:[
        { link: '/resources/news', title: 'News' },
        { link: '/resources/events', title: 'Events' },
        { link: '/resources/resources', title: 'Resources' },
        { link: '/resources/blog', title: 'Blog' },
        {link: '/contact', title: 'Contact Us'}
      ]
    },
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
    <div  className={"fixed top-0 left-0 border-b px-8 w-full z-50 bg-white text-[#365314] border-[#a3e635 shadow"} >
      <div  className="md:w-full onMouseLeave={()=>setHoveredIndex(null)} relative mx-auto flex justify-between items-center py-4">
        {/* Logo and Navigation */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4">
            <Link to="/">
              <img
                src={'/atibule-fd-mn.png' }
                alt="Company Logo"
                className="h-10 md:h-12 object-contain"
              />
            </Link>
            <hr className={`w-[1px] h-12 ${scrolling ? 'bg-[#d9f99d]' : 'bg-white/50'}`} />
          </div>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <div key={index} onMouseEnter={() => setHoveredIndex(index)} className="group ">
                <Link
                  to={item.link}
                  onClick={()=>toggleHovered(index)}
                  className={`text-sm md:text-md font-semibold text-[#365314]  hover:text-yellow-500 transition-colors flex items-center gap-2`}
                >
                  {item.name}
                </Link>

                {/* hovered effect */}
                {hoveredIndex === index && index > 0 && (
                  <div className={`${item.dropdown ? "grid-cols-3": "grid-cols-2"} shadow-custom flex absolute rounded-2xl p-8 md:grid  mt-8 w-full top-full bg-white left-0 flex-col gap-2 ${index === 1 ? 'border-r border-[#a3e635' : ''}`}>
                    
                   
                  <div className='flex flex-col gap-2 border-r p-4 border-[#a3e635'>
                    <h2 className='text-3xl font-semibold'>{item.name}</h2>
                    <p className='text-sm'>{item.desc}</p>
                  </div>
                
                {/* Show dropdown when hovered */}
                
                {item.dropdown && item.dropdown.length > 0 && (
                  <div className="hidden group-hover:block p-4 bg-white text-black  py-4 px-6 mt-2 rounded-md">
                    <div className="grid gap-4 grid-cols-2">
                      {item.dropdown.map((dropdownItem, i) => {
                        const link =
                          typeof dropdownItem === 'object'
                            ? dropdownItem.link
                            : `/${dropdownItem.toLowerCase().replace(/ /g, '-')}`;
                        const title =
                          typeof dropdownItem === 'object'
                            ? dropdownItem.title
                            : dropdownItem;
                        return (
                          <Link
                            to={link}
                            key={i}
                            onClick={()=>toggleHovered(index)}
                            className=" border-l items-start flex justify-start border-gradient-to-b from-[#a3e635 to-[#365314] py-2 px-4 hover:bg-gray-100 transition-colors"
                          >
                            {title}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* colum 3 */}
                <div className='bg-[#a3e635 h-full w-full'>

                </div>
                  </div>
                )}



                <div>

                {/* Show dropdown when hovered */}
                
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Search and Apply Now */}
        <div className="flex items-center gap-4">
          <button
            aria-label="Search"
            className={`text-md font-semibold 'text-[#365314]'  hover:text-yellow-500`}
          >
            <MdSearch size={28} />
          </button>
          <Link
            to="/general/apply"
            className={`text-sm hidden md:flex bg-[#365314] hover:text-yellow-500' : 'hover:bg-white hover:text-[#365314]'} items-center gap-2 border-2 border-white px-4 py-2 rounded-md md:text-md font-semibold text-white transition-colors`}
          >
            Apply Now
            <GoArrowUpRight size={16} />
          </Link>
          {/* Mobile Menu Toggle Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden block text-white transition-colors">
            <MdMenu size={32} className={`${scrolling ? 'text-black' : 'text-white'}`} />
          </button>
        </div>

        
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
          <div className="md:hidden absolute top-0 h-screen left-0 w-full bg-white text-[#365314] shadow-lg">
            <div className="flex justify-between items-center border-b border-[#a3e635 pb-4 p-6">
              <img src="/atibule-fd-mn.png" alt="Company Logo" className="h-6 md:h-10 object-contain" />
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-white transition-colors">
                <MdClose size={32} className="text-[#365314]" />
              </button>
            </div>
            <div className="h-8 border-b border-[#a3e635"></div>
            <div className="flex flex-col items-start gap-4">
              {navItems.map((item, index) => (
                <div key={index} className="w-full border-b border-[#a3e635">
                  {item.dropdown ? (
                    <div className="w-full">
                      <button
                        onClick={() => toggleDropdown(index)}
                        className="w-full text-lg font-semibold flex justify-between items-center px-4 py-2"
                      >
                        {item.name}
                        <GoChevronDown size={16} />
                      </button>
                      {openDropdown === index && (
                        <div className="bg-gray-100 rounded-md mt-2">
                          {item.dropdown.map((dropdownItem, i) => {
                            const link =
                              typeof dropdownItem === 'object'
                                ? dropdownItem.link
                                : `/${dropdownItem.toLowerCase().replace(/ /g, '-')}`;
                            const title =
                              typeof dropdownItem === 'object'
                                ? dropdownItem.title
                                : dropdownItem;
                            return (
                              <Link
                                to={link}
                                key={i}
                                className="block py-2 px-4 hover:bg-gray-200 transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {title}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.link}
                      className="text-lg font-semibold px-4 py-2 block"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
    </div>
  );
};

export default PageNav;
