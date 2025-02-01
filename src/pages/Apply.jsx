import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase'; // Assuming you've already set up Firebase
import { doc, getDoc } from 'firebase/firestore';

const Apply = () => {
  const { id } = useParams(); // Get course ID from URL params
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch course data from Firebase based on course ID
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setLoading(true);
        setError(null);

        const courseRef = doc(db, 'courses', id);
        const courseSnap = await getDoc(courseRef);

        if (courseSnap.exists()) {
          setCourse({ id: courseSnap.id, ...courseSnap.data() });
        } else {
          setError('Course not found');
        }
      } catch (err) {
        console.error('Error fetching course:', err);
        setError('Failed to load course details. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  // If loading, show loading state
  if (loading) return <div className='h-screen bg-teal-900 w-full items-center'>Loading...</div>;

  // If there's an error, show the error message
  if (error) return <div className='h-screen bg-teal-900 w-full grid items-center'>{error}</div>;

  // Dynamically create the Google Form URL with the course title
  const googleFormUrl = `https://docs.google.com/forms/d/e/1FAIpQLSc-Ipv9RccGHUQvDZA6xZep1U57VVdV2bXjx3L7HNEt6bfH3g/viewform?usp=pp_url&entry.605644268=${encodeURIComponent(course.title)}`;

  return (
    <div style={{ backgroundImage: `url(${course.image})` }} className=' pt-40 bg-cover bg-center bg-no-repeat relative'>
      {/* The dark background with black overlay */}
      <div className='bg-black absolute top-0 left-0 w-full h-full opacity-50 z-0'></div>

      {/* Main content with z-50 to ensure it's above the black background */}
      <div className=' z-5 relative rounded-2xl w-5/6 mx-auto bg-teal-900 grid grid-cols-1 sm:grid-cols-2 gap-8'>
        <div className="py-16 text-white px-8">
          <h1 className="text-4xl font-bold text-center mb-8">Apply for {course.title}</h1>

          <p className="text-lg mb-6">
            Fill in the form below to apply for the course. You can also download the course brochure for more information.
          </p>
          
          {/* Optional: Button to download course brochure */}
          <div className="flex  justify-center">
            <button
              className="bg-lime-500 text-white px-6 py-3 rounded-lg hover:bg-lime-700 transition"
            >
              Download Brochure
            </button>
          </div>
        </div>

        <div className="p-2 rounded-2xl">
          {/* Embed Google Form */}
          <iframe
            src={googleFormUrl}
            width="400"
            height="1250"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            className='rounded-2xl w-full'
            title="Course Application Form"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default Apply;
