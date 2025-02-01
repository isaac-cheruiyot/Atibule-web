import React from 'react'

const Modules = ({ course }) => {
  return (
    <div className="w-11/12 mx-auto py-12">
      {/* Course Title & Description */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <h2 className="text-4xl font-serif text-center md:text-left leading-tight">
          What you will learn during your {course.title}
        </h2>
        <p className="text-gray-700 line-clamp-4">{course.description}</p>
      </div>

      {/* Modules List */}
      <div className="mt-10 space-y-6">
        {course.modules.map((module, index) => (
          <div 
            key={index} 
            className="border-l-4 border-lime-900 pl-4 py-2 space-y-2"
          >
            <h3 className="text-2xl font-semibold">{module}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Modules;
