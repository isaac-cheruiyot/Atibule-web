import React from 'react'
import Blog from './Blog'
import { Link } from 'react-router-dom'

const BlogSection = () => {
  return (
    <div className='w-screen overflow-x-'>
        <div className='w-5/6  py-20 mx-auto'>
      <div className='flex  gap-4 items-center justify-between'>
        <h1 className='md:text-4xl text-xl font-semibold  md:text-center'>Personalized Learning, the way you want</h1>
        <button className='border-lime-950 text-lime-950 border-2 px-4 py-2 rounded-md'>
          <Link to={"/blog"}> View All Resources</Link>
        </button>
      </div>
      <div className='mt-10'>
        <Blog />
      </div>
    </div>
    </div>
  )
}

export default BlogSection
