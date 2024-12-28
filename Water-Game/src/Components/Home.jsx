import AboutUs from './AboutUs'
import React from 'react'
import { useRef } from 'react';

function Home() {
    const aboutSectionRef = useRef(null);

    const scrollToAboutUs = () => {
        if (aboutSectionRef.current) {
          aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      };
  return (
    <>
      <nav className="bg-cyan-700 text-white p-4">
      <div className="container mx-auto flex justify-between items-center ">
        <div className="text-3xl font-bold text-center flex-1 italic">Aqua Smart</div>

      
        <div className="flex space-x-6">
        <button className="bg-blue-700 px-4 py-2 rounded hover:bg-blue-600 ">Home</button>
        <button className="bg-blue-700 px-4 py-2 rounded hover:bg-blue-600" onClick={scrollToAboutUs}>About Us</button>
        <button className="bg-blue-700 px-4 py-2 rounded hover:bg-blue-600">Leader Board</button>
        <button className="bg-blue-700 px-4 py-2 rounded hover:bg-blue-600">Login</button>
        <button className="bg-blue-700 px-4 py-2 rounded hover:bg-blue-600">Register</button>
        </div>

        
        
      </div>
      <div ref={aboutSectionRef}>
        <AboutUs /> 
      </div>
    </nav>
    </>
  )
}

export default Home
