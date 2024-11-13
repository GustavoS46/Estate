import React from 'react'
import Header from './components/Header/Header'
import Aboult from './components/About/About'
import Projects from './components/Projects/Projects'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Maps from './components/Maps/Maps'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
      <div className='w-full overflow-hidden'>
        <ToastContainer />
        <Header />
        <Aboult />
        <Projects />
        <Testimonials />
        <Contact />
        <Maps />
        <Footer />
      </div>
    </>

  )
}

export default App