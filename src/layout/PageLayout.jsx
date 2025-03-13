import React from 'react'
import PageNav from '../components/PageNav'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const PageLayout = () => {
  return (
    <div>
        <PageNav/>
        <div className='mt-20'>
        <Outlet/>
        </div>
        <Footer/>
      
    </div>
  )
}

export default PageLayout
