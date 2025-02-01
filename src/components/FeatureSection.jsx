import React from 'react';
import { MdPlayArrow } from 'react-icons/md';

const FeatureSection = () => {
  return (
    <div className='w-full px-4'>
      <div className="w-[95%] mx-auto overflow-hidden rounded-2xl bg-lime-300 grid grid-cols-1 md:grid-cols-2 md:h-[85vh]">
        
        {/* Left Side - Video/Image Section */}
        <div className='overflow-hidden md:h-full h-[50vh]'>
          <div 
            style={{
              backgroundImage: "url('/images/daniel.jpeg')",
              position: "relative"
            }} 
            className='hover:scale-105 w-full h-full transition-all duration-500 overflow-hidden flex items-center justify-center bg-cover bg-center bg-no-repeat'
          >
            <div className='bg-white rounded-full p-2'>
              <MdPlayArrow size={80} className='text-lime-950' />
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
            <div className='border-l-4 border-lime-950 pl-4'>
              <h1 className='md:text-4xl text-2xl font-bold text-lime-950'>95%</h1>
              <p className='text-lg text-gray-800'>Job Readiness</p>
            </div>
            <div className='border-l-4 border-lime-950 pl-4'>
              <h1 className='md:text-4xl text-2xl font-bold text-lime-950'>24/7</h1>
              <p className='md:text-lg text-sm   text-gray-800'>Learning Access</p>
            </div>
            <div className='border-l-4 border-lime-950 pl-4'>
              <h1 className='md:text-4xl text-2xl font-bold text-lime-950'>50+</h1>
                <p className='md:text-lg text-sm   text-gray-800'>Courses & certfications</p>
            </div>
            <div className='border-l-4 border-lime-950 pl-4'>
              <h1 className='md:text-4xl text-2xl font-bold text-lime-950'>90%</h1>
              <p className='md:text-lg text-sm   text-gray-800'>Certification Success</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default FeatureSection;
