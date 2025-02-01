import React from 'react'
import CTA from '../components/CTA'

const AboutPage = () => {
  return (
    <div>
      {/* Background Hero Section */}
      <div className='min-h-[120vh] w-screen bg-cover bg-gra bg-center' style={{ backgroundImage: `url('/about-bg.svg')` }}>
        <div className='w-full h-full bg-gradient-to-b from-black/50 via-transparent to-transparent  absolute top-0 left-0'></div>
        <div className='w-5/6 mx-auto flex flex-col items-center pt-40 py-8 space-y-10 h-full'>
          <h2 className='text-white text-center text-4xl md:text-6xl font-bold'>
            We're Transforming the Future of Learning and Careers
          </h2>
          <p className='text-white/80 text-center text-lg max-w-3xl'>
            At Atibule, we are committed to ensuring that learners and professionals have access to high-quality education and opportunities, no matter where they are. Our innovative training programs empower individuals with in-demand skills, shaping their career paths and improving their quality of life. At the same time, businesses and industries benefit from a skilled workforce that is diverse, adaptable, and ready to drive growth with efficiency and flexibility.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div 
        className='w-5/6 rounded-xl overflow-hidden relative -translate-y-3/4 mx-auto z-10 lg:h-[60vh] h-[40vh] bg-cover bg-center' 
        style={{ backgroundImage: `url('/images/daniel.jpeg')` }} >
        {/* <div className='w-full z-0 h-full bg-gradient-to-b from-black/80 via-transparent to-black/50 absolute top-0 left-0'></div> */}
        {/* <div className='w-full z-2 h-full bg-gradient-to-rb from-black/80 via-transparent to-black/20 absolute top-0 left-0'></div> */}
        <img src="/quote02.png" alt="" className='md:w-40  object-cover absolute top-2 left-4' />
        <div className='grid  md:grid-cols-3 gap-4 p-4 h-full'>
            <div className='md:col-span-2 flex flex-col justify-around items-start'></div>
          <div className='bg-black/50 md:flex flex-col justify-start  items-center  hidden md:col-span-1 space-y-4 leading-snug z-10 text-white w-full rounded-xl h-full p-4'>
            <h3 className='text-3xl font-bold'>Our Mission</h3>
            <p className=' text-xl text-center'>At Atibule, we are dedicated to providing high-quality education and training programs that empower individuals to achieve their career goals and improve their quality of life.</p>
          </div>
        </div>
        </div>

        {/* CTA Section */}
        <CTA />
    </div>
  )
}

export default AboutPage
