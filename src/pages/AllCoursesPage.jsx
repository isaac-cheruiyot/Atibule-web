import React, { useState, useEffect } from 'react'
import FetchCourses from '../components/fetchCourses'

const AllCoursesPage = () => {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    // Simulate fetching courses (Replace with actual API call)
    const fetchCourses = async () => {
      const data = await FetchCourses() // Ensure FetchCourses returns data
      setCourses(data)
    }
    
    fetchCourses()
  }, [])

  return (
    <div>
      <div className='w-full h-20 bg-lime-900'></div>
      <div className='w-4/5 mx-auto h-full py-8'>
        <h2 className='text-lg mb-4 font-bold'> Courses for You</h2>
        <FetchCourses />
      </div>
    </div>
  )
}

export default AllCoursesPage
