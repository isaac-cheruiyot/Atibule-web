import { db } from '../firebase'; // Firebase setup file
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { FaBook } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const FetchCourses = ({ category }) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoursesByCategory = async () => {
      try {
        setLoading(true);
        setError(null); // Reset error before fetching

        const coursesCollectionRef = collection(db, "courses");

        const coursesQuery = category
          ? query(coursesCollectionRef, where("category", "==", category))
          : coursesCollectionRef;

        const querySnapshot = await getDocs(coursesQuery);

        const coursesList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        setCourses(coursesList);
      } catch (error) {
        console.error("Error fetching courses:", error);
        setError("Failed to load courses. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchCoursesByCategory();
  }, [category]);

  if (loading) return <div className="text-center my-10">Loading...</div>;
  if (error) return <div className="text-center my-10 text-red-500">{error}</div>;
  if (courses.length === 0) return <div className="text-center my-10">No courses found for this category</div>;

  return (
    <div className="courses-list w-full mx-auto">
      {/* <h1 className='text-start text-lg flex items-center gap-2 justify-start mb-4 font-bold'><FaBook/> / Courses in {category}</h1> */}
      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {courses.map(course => (
          <div className='border space-y-4 border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-lg transition' key={course.id}>
            <img
              src={course.image } // Default image if link is broken
              alt={course.title}
              className='w-full rounded-lg overflow-hidden h-36 object-cover'
              loading="lazy"
              onError={(e) => e.target.src = "https://via.placeholder.com/300"} // Replace broken images
            />
            <h2 className='text-lg font-bold'>{course.title}</h2>
            <span className='flex items-center gap-2'>
              <h2 className='text-xs border border-gray-300 px-2 py-1 rounded-lg text-gray-500'>{course.duration}</h2> /
              <h2 className='text-xs border border-gray-300 px-2 py-1 rounded-lg text-gray-500'>{course.level}</h2>
            </span>
            <p className='text-sm line-clamp-5 text-gray-500'>{course.description}</p>
            <Link to={`/courses/${course.id}`} className='bg-black hover:bg-cyan-800 w-full text-white px-4 py-2 rounded-lg text-center block'>
              View Course
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default FetchCourses;
