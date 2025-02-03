import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa6';

const testimonials = [
  {
    name: "Karol K",
    position: "Senior Manager",
    text: "Atibule has transformed my career! The courses are well-structured and very practical.",
    image: "/images/mary.jpeg",
  },
  {
    name: "Kelvin O",
    position: "Monitoring an evaluation",
    text: "The best learning experience I have ever had. Highly recommended for anyone looking to upskill.",
    image: "/images/kelvin.png",
  },
  {
    name: "Lydia K",
    position: "Software Engineer",
    text: "Amazing instructors and great content. The support team is always ready to help.",
    image: "/images/lydia.png",
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='py-20 relative '>
      <p className='text-center text-sm bg-[#bef264] font-bold w-36 py-1 rounded-2xl mx-auto'>Our Testimonials</p>
      <h2 className='text-4xl md:mb-4 mb-2  font-serif text-center'>What Our Students Are Saying?</h2>
      
      {/* Background */}
      <div className='h-[80vh] flex justify-center items-center relative'>
        <div 
          style={{ backgroundImage: "url('/images/world.svg')" }} 
          className='w-full h-full absolute bg-cover bg-center bg-no-repeat'
        ></div>

        {/* Overlay */}
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-black/30 to-transparent'></div>

        {/* Testimonial Card */}
        <motion.div 
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          exit={{ opacity: 0, y: -20 }} 
          transition={{ duration: 0.8 }}
          className='relative z-10 md:w-1/2 w-5/6 p-6 bg-white shadow-lg space-y-4 rounded-2xl text-center'
        >
          <img src="/quote02.png" alt="" className='w-12 h-10 mx-auto' />
          <div className='flex items-center text-yellow-500 justify-center gap-2'>
            <FaStar  size={16}/>  
            <FaStar  size={16}/>  
            <FaStar  size={16}/>  
            <FaStar  size={16}/>  
            <FaStar  size={16}/>  
          </div>
          <p className="text-gray-600 md:w-3/4 w-full mx-auto text-sm">{testimonials[currentIndex].text}</p>
          
          <div className='flex flex-col items-center justify-center'>
            <h1 className="text-xl font-bold">{testimonials[currentIndex].name}</h1>
            <p className='text-gray-600 text-sm'>{testimonials[currentIndex].position}</p>
          </div>

        </motion.div>

        {/* Profile Images - Animated One by One */}
        {testimonials.map((testimonial, index) => (
          <motion.img 
            key={index}
            src={testimonial.image} 
            alt={testimonial.name} 
            className="absolute object-cover md:h-20 md:w-20 h-10 w-10 rounded-full border border-white"
            initial={{ opacity: 0, scale: 0.5 }} 
            animate={{ opacity: index <= currentIndex ? 1 : 0.5, scale: index <= currentIndex ? 1.1 : 0.8 }} 
            transition={{ duration: 0.8, delay: index * 0.5 }}
            style={{
              top: index === 0 ? "md:8rem 4rem" : index === 1 ? "12rem" : "24rem",
              left: index === 0 ? "10rem" : index === 1 ? "auto" : "50%",
              right: index === 1 ? "10rem" : "auto",
              transform: index === 2 ? "translateX(-50%)" : "none"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
