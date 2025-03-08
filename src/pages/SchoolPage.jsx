import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { doc, getDoc, collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase"; // Ensure Firebase is correctly imported
import Modules from "../components/Modules";

const SchoolPage = () => {
    const { id } = useParams(); // Extract 'id' from URL parameters
    const [school, setSchool] = useState(null);
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch school data
    useEffect(() => {
        const fetchSchool = async () => {
            try {
                const docRef = doc(db, "schools", id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setSchool({ id: docSnap.id, ...docSnap.data() }); // Include document ID
                } else {
                    setError("School not found");
                }
            } catch (error) {
                console.error("Error fetching school data:", error);
                setError("Failed to load school details.");
            } finally {
                setLoading(false);
            }
        };

        if (id) fetchSchool();
    }, [id]);

    // Fetch all courses where category = school.shortcode
    useEffect(() => {
        const fetchCourses = async () => {
            try {
                if (!school || !school.shortcode) return; // Ensure school data is available

                setError(null);
                setLoading(true);

                console.log("Fetching courses for category:", school.shortcode); // Debugging log

                const coursesQuery = query(collection(db, "courses"), where("shortcode", "==", school.shortcode));
                const querySnapshot = await getDocs(coursesQuery);

                if (!querySnapshot.empty) {
                    setCourses(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
                } else {
                    setCourses([]); // No courses found
                }
            } catch (err) {
                console.error("Error fetching courses:", err);
                setError("Failed to load course details.");
            } finally {
                setLoading(false);
            }
        };

        fetchCourses();
        window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top when school changes
    }, [school]); // Runs only when `school` is set

    return (
        <div className="min-h-[80vh]  ">
            <div className="h-20 bg-[#088080]"></div>
            {loading ? (
                <p className="text-xl p-4">Loading...</p>
            ) : error ? (
                <p className="text-xl p-4 text-red-600">{error}</p>
            ) : school ? (
                <div className="p-8">
                    <h1 className="text-3xl font-bold">School: {school.name}</h1>
                    <p className="text-lg mt-2">Shortcode: {school.shortcode}</p>
                    <p className="text-lg mt-2">Established: {school.established}</p>

                    {courses.length > 0 ? (
                        <div>
                            <h2 className="text-2xl font-bold mt-4">Courses Offered</h2>
                            <ul className="grid grid-cols-3 gap-8 py-8">
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
                        <Link to={`/courses/${course.category}/${course.id}/#course-top`} className='bg-black hover:bg-cyan-800 w-full text-white px-4 py-2 rounded-lg text-center block'>
                        View Course
                        </Link>
                    </div>
                    ))}
                            </ul>
                        </div>
                    ) : (
                        <p className="text-lg mt-2 text-gray-700">No courses found for this school.</p>
                    )}
                </div>
            ) : (
                <p className="text-xl p-4">School not found.</p>
            )}
        </div>
    );
};

export default SchoolPage;
