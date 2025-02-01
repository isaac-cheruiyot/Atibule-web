import React from 'react'

const CTA = () => {
  return (
    <div className='h-[40vh] bg-lime-900 relative'>
        <div  style={{ backgroundImage: `url('/images/stripped.png')`, opacity:'20%' }} className='absolute top-0 left-0 w-full z-5 h-full bg-cover bg-center'></div>
        <div     className='w-full grid z-10 items-center bg-opacity-20 h-full relative bg-cover bg-center'>
        <div className='w-5/6 mx-auto r flex flex-col items-center space-y-4'>
            <h2 className='text-white text-center text-4xl md:text-6xl font-bold'>
                Ready to get started?
            </h2>
            <p className='text-white/80 text-center text-lg max-w-3xl'>
                Join our community and start your journey to success today!
            </p>
            <button className='bg-white text-black px-4 py-2 rounded-md'>Get Started</button>
        </div>
    </div>
    </div>
  )
}

export default CTA