import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'
const App = () => {
  return (
    <>
     <Navbar/>
     <Home/>
     <About/>
     <Project/>
     <Contact/>
     <Footer/>
     </>
  )
}

export default App