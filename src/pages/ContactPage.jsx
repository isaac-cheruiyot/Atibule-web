import React from 'react'
import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa'
const ContactPage = () => {
  return (
    <div >
      <div style={{ backgroundImage: `url(${"/images/mary.jpeg"})` }} className='w-full bg-cover bg-center bg-no-repeat'>
      <div className='w-full h-[70vh] bg-black/50 grid place-items-center'>
      <div className='w-11/12 md:w-3/4 max-w-3xl flex flex-col gap-4 items-center'>
            <h1 className='text-4xl font-bold text-white'>Contact Us</h1>
            <p className='text-white text-center'>Let’s get this conversation started. Tell us a bit about yourself and we’ll get in touch as soon as we can.</p>
        </div>
      </div>
      </div>
      <div className='w-11/12 md:w-3/4 mx-auto rounded-lg flex bg-white p-8 shadow-custom -translate-y-[20vh] justify-center items-center'>
        <form className='w-full max-w-3xl flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
              <label htmlFor="name" className='text-gray-500'>Name</label>
              <input type="text" required placeholder='Name' className='w-full p-2 rounded-md border border-gray-300' />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="email" className='text-gray-500'>Email</label>
              <input type="email" required placeholder='Email' className='w-full p-2 rounded-md border border-gray-300' />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="message" className='text-gray-500'>Message</label>
              <textarea type="text" rows={5} required placeholder='Message' className='w-full p-2 rounded-md border border-gray-300' />
            </div>
            <button type="submit" className='w-1/4 p-2 rounded-md bg-[#365314] text-white'>Submit</button>
        </form>
      </div>

      {/* contact info */}
      <div className='w-11/12 mt-8 md:w-3/4 mx-auto rounded-lg flex bg-white p-8 shadow-custom -translate-y-[20vh] justify-center items-center'>
        <div className='w-full max-w-3xl flex flex-col gap-4'>
          <h2 className='text-4xl font-serif'>Contact Information</h2>
          <div className='flex flex-col gap-2 md:grid md:grid-cols-3'>
            <p className='text-gray-500 flex items-center md:border-b-2 md:border-gray-300 gap-2'><FaEnvelope /> Email: <span className='text-gray-500'>info@atibule.com</span></p>
            <p className='text-gray-500 flex items-center md:border-b-2 md:border-gray-300  gap-2'><FaPhone /> Phone: <span className='text-gray-500'>+254 114266430</span></p>
            <p className='text-gray-500  flex items-center md:border-b-2 md:border-gray-300 gap-2'><FaWhatsapp /> Whatsapp: <span className='text-gray-500'>+254 114266430</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
