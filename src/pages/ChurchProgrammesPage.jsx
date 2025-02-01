import React from 'react'
import ChurchProgramsHero from '../components/ChurchPrograms/ChurchProgramsHero'
import ChurchProgramsDetails from '../components/ChurchPrograms/ChurchProgramDetails'
import ChurchProgramsTestimonials from '../components/ChurchPrograms/ChurchProgramsTestimonials'
import ChurchProgramsCTA from '../components/ChurchPrograms/ChurchCTA'

const ChurchProgrammesPage = () => {
  return (
    <div>
      <div style={{ backgroundImage: `url(${"/images/church-update.png"})` }} className=' relative pt-20 md:pt-40 w-full min-h-[70vh] bg-cover bg-center'>
        <div className='absolute inset-0 bg-black opacity-60'></div>
        <div className='grid items-center justify-center  relative z-10  '>
                <ChurchProgramsHero/>
        </div>
        </div>
            <ChurchProgramsDetails/>
            <ChurchProgramsTestimonials/>
            <ChurchProgramsCTA/>
            
      
    </div>
  )
}

export default ChurchProgrammesPage
