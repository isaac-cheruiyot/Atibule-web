import React from 'react';

const GeneralApplication = () => {
  return (
    <div className=" ">
      <div className='w-full  bg-[#365314] h-[40vh]'></div>
      <div className='w-full px-4 md:px-0 flex justify-center items-center translate-y-[-15vh]'>
      <iframe 
        src="https://docs.google.com/forms/d/e/1FAIpQLSc-Ipv9RccGHUQvDZA6xZep1U57VVdV2bXjx3L7HNEt6bfH3g/viewform?usp=sf_link" 
        width="640" 
        height="1250" 
        className="shadow-custom rounded-lg  w-full max-w-3xl"
        allowFullScreen
      ></iframe>
      </div>
    </div>
  );
};

export default GeneralApplication;
