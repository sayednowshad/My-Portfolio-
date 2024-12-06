import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import './App.css';
import Header from './Components/Header';
import About, { Skills } from './Components/About';
import Projects from './Components/Projects';


const App = () => {
  return (
    <>
    
    <Navbar />
    <Header />
    <About />
    <Skills />
    <Projects 

    image6 ="mockup.jpg"
    image5 ="mockuuups-imac-mockup-on-a-conference-table.jpeg"
    image4 ="mockuuups-ipad-pro-mockup-on-textured-concrete-blocks.jpeg"
    image3 ="mockuuups-free-macbook-pro-mockup-on-stone-pedestal.jpeg"
    image1="mockuuups-macbook-pro-mockup-on-a-sleek-gray-desk.jpeg"

    viewLink="www.com"
    repoLink="www.com"

    tittle1="Educational Platform Design"
    tittle2="Scrolling Animation Design"
    tittle3="Game Console Red Design"
    tittle4="Learning Platform Design"
    tittle5="Mastersolis Website Re-design"
    tittle6="MushEat Store Web Design"

    />
    
    </>
  )
}

export default App
