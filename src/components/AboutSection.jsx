import React, { useState } from 'react';
import { GiTeacher } from 'react-icons/gi';
import { FaIndustry, FaGlobe, FaCheckCircle } from 'react-icons/fa';
import { image } from 'framer-motion/client';

const AboutSection = () => {
  const [active, setActive] = useState(0);

  const tabs = [
    { 
      title: "Personalized Learning", 
      icon: <GiTeacher />, 
      content: "Our courses are designed to be flexible and adaptable, allowing you to learn at your own pace and in a way that best suits your individual learning style. Whether you prefer video lessons, interactive exercises, or hands-on projects, our personalized approach ensures a seamless learning experience.",
      features: [
        "Self-paced learning options",
        "Interactive quizzes and assessments",
        "One-on-one mentorship and support",
        "Access to a resource library for additional learning"
      ],
      image:"/images/lydia.png"
    },
    { 
      title: "Industry-Aligned Programs", 
      icon: <FaIndustry />, 
      content: "We collaborate with industry leaders and subject matter experts to ensure our courses remain relevant to today’s job market. Our curriculum is continuously updated with real-world case studies, practical projects, and the latest industry trends, helping you stay ahead of the curve.",
      features: [
        "Curriculum developed by industry experts",
        "Practical, real-world case studies and projects",
        "Certification recognized by employers",
        "Internship and job placement opportunities"
      ],
      image:"/images/dan.jpeg"
    },
    { 
      title: "Global Learning Network", 
      icon: <FaGlobe />, 
      content: "Learning with us means joining a diverse and dynamic community of professionals and learners from around the world. Our global network allows you to exchange knowledge, gain international perspectives, and collaborate on innovative projects.",
      features: [
        "Access to a worldwide community of learners and professionals",
        "Networking events and collaborative projects",
        "Expert-led webinars and panel discussions",
        "Opportunities to work on global case studies and challenges"
      ],
      image:"/images/mary.jpeg"

    }
  ];

  return (
    <div className="my-20">
      <div className="w-5/6 mx-auto">
        {/* Heading */}
        <div className="grid grid-cols-1 mb-4 md:grid-cols-2">
          <h1 className="md:text-5xl text-2xl font-bold">Why Study With Us?</h1>
          <p className="md:text-lg text-sm font-serif text-gray-500">
          Gain the skills and knowledge needed to excel in your career and beyond. Our programs are designed to equip you with industry-relevant expertise, practical hands-on training, and globally recognized certifications.          </p>
        </div>

        {/* Tabs Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 h-full border-gray-300 border-t  border-l overflow-hidden rounded-t-2xl">
          {tabs.map((tab, index) => (
            <h2
              key={index}
              className={`text-xl p-2 border-r border-gray-300 text-center flex items-center gap-2 font-semibold cursor-pointer transition-all duration-300 
              ${active === index ? "bg-lime-900 text-white" : "text-gray-700"}`}
              onClick={() => setActive(index)}
            >
              <span className="md:text-md text-sm border border-white/80 rounded-full p-2">{tab.icon}</span>
              {tab.title}
            </h2>
          ))}
        </div>

        {/* Content Section */}
        <div className="md:h-[60vh] border grid md:grid-cols-2 border-gray-300 overflow-hidden rounded-b-2xl">
          <div className="p-4 space-y-4">
            <h2 className="text-2xl font-semibold">{tabs[active].title}</h2>
            <p className="text-md text-gray-500">{tabs[active].content}</p>
            <div className='flex flex-col gap-2'>
                {tabs[active].features.map((feature, index) => (
                    <div key={index} className='flex items-center gap-2 px-6'>
                        <FaCheckCircle className='text-lime-900'/>
                        <span className='text-lime-800'>{feature}</span>
                    </div>
                ))}
            </div>
            <button className="bg-lime-500 text-white px-4 py-2 rounded-lg">Learn More</button>
          </div>
          <div className="md:flex hidden p-4 items-center justify-center">
            {/* Placeholder for image or graphic */}
            <div className="w-full h-full bg-gray-200 rounded-2xl overflow-hidden">
                <img src={tabs[active].image} alt=""  className='w-full h-full object-cover overflow-hidden rounded-2xl'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
