import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { Link } from 'react-router-dom';
import { IoArrowForwardOutline } from 'react-icons/io5';

const SchoolsSection = () => {
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Fetch schools from Firebase
  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'schools'));
        const schoolList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSchools(schoolList);
      } catch (error) {
        console.error('Error fetching schools:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSchools();
  }, []);

  return (
    <div className="p-6 w-11/12">
      <h2 className="text-2xl font-bold mb-4">Schools</h2>

      {loading ? (
        <p>Loading schools...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schools.length > 0 ? (
            schools.map((school, index) => (
              <div key={school.id} className="relative p-8 pb-12 border rounded-lg shadow-md">
                <p className="text-sm font-bold text-gray-600 border-b pb-2 border-gray-300">{school.shortcode}</p>
                <h3 className="text-lg font-semibold mt-2">{school.name}</h3>
                <p className="text-sm">{school.description}</p>

                <div className='absolute bottom-2 right-2'>
                  <Link to={`/schools/${school.id}`}>
                    <button 
                      onMouseEnter={() => setHoveredIndex(index)} 
                      onMouseLeave={() => setHoveredIndex(null)} 
                      className='hover:bg-lime-400 transition-all duration-800 bg-lime-900 text-white px-4 py-2 rounded-full flex items-center gap-2'
                    >
                      {hoveredIndex === index ? (
                        <>
                          <span className='text-sm'>View Courses</span> 
                          <IoArrowForwardOutline size={20}/>
                        </>
                      ) : (
                        <IoArrowForwardOutline size={20}/>
                      )}
                    </button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p>No schools found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SchoolsSection;
