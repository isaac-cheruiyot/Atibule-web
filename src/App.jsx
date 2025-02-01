import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import './index.css'
import Layout from './layout/Layout'
import AllCoursesPage from './pages/AllCoursesPage'
import AboutPage from './pages/AboutPage'
import Apply from './pages/Apply'
import ContactPage from './pages/ContactPage'
import CoursePage from './pages/CoursePage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="courses" element={<AllCoursesPage />} />
          <Route path="courses/:id" element={<CoursePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="apply/:id" element={<Apply />} />
          <Route path="apply" element={<Apply />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
