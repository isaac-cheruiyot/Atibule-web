import React from 'react'
import KidsHero from '../components/Kids/KidsHero'
import KidsCourses from '../components/Kids/KidCourses'
import KidsBenefits from '../components/Kids/KidsBenefits'
import KidsTestimonials from '../components/Kids/KidsTestimonals'
import KidCTA from '../components/Kids/KidCTA'

const Kids = () => {
  return (
    <div>
        <div className=' '>
           
            <div className=' bg-[#0F4336] py-20 -tr'>
                <KidsHero/>
            </div>
            <KidsCourses/>
            <KidsBenefits/>
            <KidsTestimonials/>
            <KidCTA/>
        </div>
      
    </div>
  )
}

export default Kids
