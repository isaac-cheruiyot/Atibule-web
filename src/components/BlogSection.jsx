import React from 'react'
import BlogPage from './Blog'

const BlogSection = () => {
  return (
    <div className='w-screen overflow-x-'>
        <div className='w-5/6  py-20 mx-auto'>
      <div className='flex  gap-4 items-center justify-between'>
        <h1 className='md:text-4xl text-xl font-semibold  md:text-center'>Personalized Learning, the way you want</h1>
        <button className='border-lime-950 text-lime-950 border-2 px-4 py-2 rounded-md'>View All Resources</button>
      </div>
      <div className='mt-10'>
        <BlogPage />
      </div>
    </div>
    </div>
  )
}

export default BlogSection
