import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { FaBook, FaClock, FaDownload, FaPercent, FaStar } from 'react-icons/fa6';
import { FaPercentage } from 'react-icons/fa';
import { GoArrowDown, GoArrowDownLeft } from 'react-icons/go';
import Modules from '../components/Modules';
import { BsGraphUpArrow, BsPercent } from "react-icons/bs";
import { IoBookOutline } from 'react-icons/io5';
import { CiClock2 } from 'react-icons/ci';


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
    <div id='course-top pt-20'>
      <div style={{ backgroundImage: `url(${course.image})` }} className="relative h-[70vh]  mx-auto mt-20  overflow-hidden bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
     
     <div className='absolute w-1/2 text-white space-y-8 p-8 left-8 bottom-10'>
      <h1 className="text-4xl  font-bold">{course.title}</h1>
      <p className="text-lg">{course.description}</p>

      <div className='flex gap-8 items-center'>
      <h2 className='text-3xl font-bold'><span className='text-orange-500'> Kes {formattedPrice}</span></h2>
      <Link to={`/apply/${course.id}`}>
      <button className="bg-[#84cc16] hover:bg-[#4d7c0f] transition text-xl text-white px-6 py-3 rounded-sm w-full md:w-auto">
      Enroll Now
      </button>
      </Link>
      </div>
      </div>

      
      </div>

      {/* card for basic info */}
      <div className='bg-lime-100'>
        <div className="grid grid-cols-4 shadow gap-4 items-center border border-gray-300 rounded-lg h-20 mx-4 -translate-y-1/2 bg-white">
  <h2 className="flex justify-center py-2 text-xl font-light items-center gap-2 border-r border-gray-300">
    <IoBookOutline className="text-gray-500" /> 
    <span className="text-gray-600">{course.modeOfLearning}</span>
  </h2>
  <h2 className="flex items-center gap-2 border-r py-2 border-gray-300">
  <CiClock2 size={20}  className="text-gray-500" /> 
    <span className="text-gray-600">{course.duration}</span>
  </h2>
  <h2 className="flex items-center gap-2 border-r py-2 border-gray-300">
    <BsGraphUpArrow  className="text-gray-500" /> 
    <span className="text-gray-600">{course.level}</span>
  </h2>
  <h2 className="flex items-center gap-2 py-2">
  <BsPercent  className="text-gray-500" /> 
    <span className="text-gray-600">Self Paced</span>
  </h2>
</div>
</div>

{/* collumn of skills and requirements */}
 <div className='bg-lime-100 py-4  gap-8 '>
    <div className='w-11/12 mx-auto grid grid-cols-2 py-8'>
    {/* skill learned */}
    <div>
      <h2>Skills you'll learn:</h2>
      <ul className='flex flex-wrap'>
        <li></li>
      </ul>
    </div>
    {/* prerequisites */}
    <div>
      <h2>Requirements:</h2>
      <ul className='flex flex-wrap'>
        <li></li>
      </ul>
    </div>
    </div>
 </div>

     

      <hr className='w-full bg-[#787878]'/>
      
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
