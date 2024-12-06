import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import './App.css';
import Header from './Components/Header';
import About, { Skills } from './Components/About';
import Projects from './Components/Projects';
import Certifications from './Components/Certifications';
import ContactMe from './Components/ContactMe';
import Footer from './Components/Footer';


const App = () => {
  return (
    <>
    
    <Navbar />
    <Header />
    <About />
    <Skills />
    <Projects 

    image8="Mock-mobile.png"
    image7="Spark.png"
    image6 ="mockup.jpg"
    image5 ="mockuuups-imac-mockup-on-a-conference-table.jpeg"
    image4 ="mockuuups-ipad-pro-mockup-on-textured-concrete-blocks.jpeg"
    image3 ="mockuuups-free-macbook-pro-mockup-on-stone-pedestal.jpeg"
    image1="mockuuups-macbook-pro-mockup-on-a-sleek-gray-desk.jpeg"

    img1="seat.png"
    img2="Nike-shoe.png"
    img3="gemini.png"
    img4="e-commerce.webp"
    img5="ai.png"
    img6="yt.jpg"

    viewLink="www.com"
    repoLink="www.com"

    tittle1="Educational Platform Design"
    tittle2="Scrolling Animation Design"
    tittle3="Game Console Red Design"
    tittle4="Learning Platform Design"
    tittle5="Mastersolis Website Re-design"
    tittle6="MushEat Store Web Design"
    tittle7="Spark Jerk Shoe Design"
    tittle8="Trading Mobile"

    tit1="Seat Selector"
    tit2="Nike Shoe "
    tit3="Gemini Clone With API"
    tit4="E-commerce Website"
    tit5="AI - Assistant"
    tit6="Youtube Clone Re-design"

    />
    <Certifications />
    <ContactMe />
    
    <Footer />
    
    </>
  )
}

export default App
