import React, { useState } from 'react';
import { MdPlayArrow } from 'react-icons/md';

const FeatureSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className='w-full px-4'>
      <div className="w-[95%] mx-auto overflow-hidden rounded-2xl bg-[#bef264] grid grid-cols-1 md:grid-cols-2 md:h-[85vh]">
        
        {/* Left Side - Video/Image Section */}
        <div className='overflow-hidden md:h-full h-[50vh] relative'>
          <div 
            style={{ backgroundImage: "url('/images/daniel.jpeg')" }}
            className='hover:scale-105 w-full h-full transition-all duration-500 bg-cover bg-center bg-no-repeat flex items-center justify-center'
          >
            {/* Play Button */}
            <div 
              className='bg-white rounded-full p-2 cursor-pointer'
              onClick={() => setShowVideo(true)} // Open modal on click
            >
              <MdPlayArrow size={80} className='text-[#1a2e05]' />
            </div>
          </div>
        </div>

        {/* Right Side - Text & Statistics */}
        <div className='flex flex-col space-y-8 justify-center items-start p-8'>
          <h1 className='md:text-4xl text-2xl font-serif text-black leading-tight'>
            Learn the Secrets to Life Success. These Experts Have the Key.
          </h1>
          <p className='md:text-lg text-sm text-gray-800'>
            Unlock the strategies, habits, and mindsets that have propelled successful individuals to greatness. 
            Gain insider knowledge, proven techniques, and practical wisdom from those who have mastered the art of achieving their goals. 
            Whether it’s career growth, financial success, personal development, or leadership, 
            discover the key principles that can transform your life.
          </p>

          {/* Stats Grid */}
          <div className='w-full grid grid-cols-2 gap-6'>
            {[
              { value: '95%', label: 'Job Readiness' },
              { value: '24/7', label: 'Learning Access' },
              { value: '50+', label: 'Courses & Certifications' },
              { value: '90%', label: 'Certification Success' }
            ].map((stat, index) => (
              <div key={index} className='border-l-4 border-[#1a2e05] pl-4'>
                <h1 className='md:text-4xl text-2xl font-bold text-[#1a2e05]'>{stat.value}</h1>
                <p className='md:text-lg text-sm text-gray-800'>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/50 backdrop-blur-sm bg-opacity-10 z-50">
          <button 
              className="absolute top-2 right-4 text-3xl font-bold text-white hover:text-red-500"
              onClick={() => setShowVideo(false)} // Close modal
            >
              &times;
            </button>
          <div className="relative w-[90%] md:w-[70%] border border-white overflow-hidden bg-white  rounded-lg">
            
            <video controls autoPlay className="w-full rounded-md">
              <source src="/video/atibule-vid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeatureSection;
