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
    <Projects />
    
    
    </>
  )
}

export default App
