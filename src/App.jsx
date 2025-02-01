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
import Kids from './pages/Kids'
import ChurchProgrammesPage from './pages/ChurchProgrammesPage'
import BlogDetail from './pages/BlogDetail'
import News from './pages/News'
import GeneralApplication from './pages/GeneralApplication'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="courses" element={<AllCoursesPage />} />
          <Route path="courses/:category/" element={<AllCoursesPage />} />
          <Route path="courses" element={<AllCoursesPage />} />
          <Route path="courses/:category/:id" element={<CoursePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="apply/:id" element={<Apply />} />
          <Route path="general/apply" element={<GeneralApplication />} />
          <Route path="kids" element={<Kids />} />
          <Route path="church-programs" element={<ChurchProgrammesPage />} />
          <Route path='/blog' element={<News/>} />
          <Route path='/blog/:category/:id' element={<BlogDetail />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
