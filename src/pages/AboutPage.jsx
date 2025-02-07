import React from 'react'
import CTA from '../components/CTA'

const AboutPage = () => {
  return (
    <div>
      {/* Background Hero Section */}
      <div className='h-[120vh] w-screen bg-cover bg-gra bg-center' style={{ backgroundImage: `url('/about-bg.svg')` }}>
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

        <div className='w-5/6 border-l-4 my-4 rounded-r-xl opacity-80 -translate-y-1/2 md:-translate-y-full bg-[#9dcd5d] border-[#008800] px-4 py-4 mx-auto'>
            <h2 className='text-2xl font-bold'>Our Vision</h2>
            <p className='text-lg'>Our vision is to become the leading online educational platform in Africa, recognized for transforming lives through accessible, innovative, and accredited training programs. We strive to foster a community of forward-thinking professionals who drive economic and social progress across the continent and beyond.</p>
        </div>

        <div className='w-5/6 border-l-4 my-4 rounded-r-xl opacity-80 -translate-y-20 md:-translate-y-20 px-4 py-4 mx-auto'>
          <h2 className='text-2xl  font-bold'>Our Core Values</h2>
          <p className='text-lg'>
            <ul className='grid grid-cols-1 md:grid-cols-2 gap-4 list-inside'>
              <li className='text-lg bg-[#9dcd5d] rounded-xl p-4'>
                <h2 className='text-2xl font-bold'>1.Innovation</h2>
                <p className='text-lg'>We embrace new ideas and technologies to improve our services and meet the evolving needs of our learners.</p>
              </li>
              <li className='text-lg bg-[#9dcd5d] rounded-xl p-4'>
                <h2 className='text-2xl font-bold'>2. Excellence</h2>
                <p className='text-lg'>We are committed to delivering the highest standards of education and training, ensuring that our learners receive the best possible experience.</p>
              </li>
              <li className='text-lg bg-[#9dcd5d] rounded-xl p-4'>
                <h2 className='text-2xl font-bold'>3.Inclusivity</h2>
                <p className='text-lg'>We believe in the power of education to break down barriers and create opportunities for everyone.</p>
              </li>
            </ul>
          </p>
        </div>

        {/* CTA Section */}
        <CTA />
    </div>
  )
}

export default AboutPage
