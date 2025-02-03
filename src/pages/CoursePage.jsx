import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { FaBook, FaClock, FaDownload, FaPercent, FaStar } from 'react-icons/fa6';
import { FaPercentage } from 'react-icons/fa';
import { GoArrowDown, GoArrowDownLeft } from 'react-icons/go';
import Modules from '../components/Modules';

const CoursePage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setLoading(true);
        setError(null);
  
        const courseRef = doc(db, "courses", id);
        const courseSnap = await getDoc(courseRef);
  
        if (courseSnap.exists()) {
          setCourse({ id: courseSnap.id, ...courseSnap.data() });
        } else {
          setError("Course not found");
        }
      } catch (err) {
        console.error("Error fetching course:", err);
        setError("Failed to load course details. Please try again.");
      } finally {
        setLoading(false);
      }
    };
  
    fetchCourse();
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top on component mount
  }, [id]);
  

  if (loading) return <div className="text-center grid items-center bg-gray-500 h-screen mb-10">
    <p className='font-bold text-white'>Loading course...</p></div>;
  if (error) return <div className="text-center mt-40 mb-10 text-red-500">{error}</div>;

// Format price with commas and two decimal places
const formattedPrice = course.price
? new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(course.price)
: "Not Available";
  return (
    <div id='course-top'>
        <div style={{ backgroundImage: `url(${course.image})` }} className="relative min-h-screen bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative w-11/12 md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-40 text-white">
        {/* Left Side - Course Details */}
        <div className="flex flex-col justify-start space-y-4">
          <h1 className="text-4xl font-bold">{course.title}</h1>
          <p className="text-lg">{course.description}</p>
          <h2 className='text-4xl font-bold'><span className='text-orange-500'> KES {formattedPrice}</span></h2>

          <div className='flex flex-col space-y-4'>
            <h2 className=' flex items-center gap-2'><FaBook /> <span className='text-orange-500'>{course.modeOfLearning}</span></h2>
            <h2 className=' flex items-center gap-2 '><FaClock /> <span className='text-orange-500'>{course.duration}</span></h2>
            <h2 className=' flex items-center gap-2 '><FaStar /> <span className='text-orange-500'>{course.level}</span></h2>
            <h2 className=' flex items-center gap-2 '><FaPercentage /> <span className='text-orange-500'>Self Paced</span></h2>
          </div>
        </div>

        {/* Right Side - Buttons */}
        <div className="grid md:grid-cols-2 items-start  md:py-20 gap-4">
          <Link to={`/apply/${course.id}`}>
          <button className="bg-[#84cc16] hover:bg-[#4d7c0f] transition text-xl text-white px-6 py-4 rounded-lg w-full md:w-auto">
            Enroll Now
          </button>
          </Link>
          <button className="bg-white text-[#365314] border border-[#365314] text-xl hover:bg-gray-200 transition px-6 py-4 rounded-lg w-full md:w-auto">
            Download Brochure
          </button>
        </div>
      </div>
      </div>
      
      <div className='py-20 px-4 md:px-0'> 
        <div className=' bg-[#84cc16] rounded-2xl md:w-11/12  mx-auto md:h-[60vh] px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-20 '>
        <div className='md:col-span-2 space-y-8'>
        <h1 className='md:text-4xl text-2xl text-white tracking-wider  leading-snug font-bold'>Why learn {course.title}  at ATIBULE?</h1>  
        <p className='text-md text-white/90'>Join the leader in Online TVET technology education in Africa and join the largest community of experts.
        </p>
        <button className='bg-white justify-center flex items-center gap-2 w-full md:w-3/4 text-[#365314] border border-[#365314] text-md hover:bg-gray-200 transition px-6 py-2 rounded-lg  '>
            Download Brochure <GoArrowDown />
        </button>
        </div>

        <div className='col-span-1 grid md:flex gap-4 text-white  items-center md:items-start flex-col justify-center md:justify-between'>
            <div id='1' className='border-b md:border-none'>
                <h2 className='text-5xl font-bold'>#1</h2>
                <p> Online Digital TVET in Africa </p>
            </div>
            <div id='2' className='border-b md:border-none'>
                <h2 className='text-5xl font-bold'>85%</h2>
                <p> Employment and Startup rate upon completing a ATIBULE</p>
            </div>
            <div id='3' className='border-b md:border-none'>
                <h2 className='text-5xl font-bold'>5+</h2>
                <p> Internationally Recognized Certification </p>
            </div>
        </div>
        </div>
      </div>
      <Modules course={course}/>
    </div>
  );
};

export default CoursePage;
