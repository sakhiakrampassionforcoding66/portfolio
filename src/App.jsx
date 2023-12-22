import React from 'react';
import { Hero, About, Projects, Contact, Footer, Work, Loader } from './components/components';
import { BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Loader />
      <div className="relative z-0 bg-black text-white">
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center mb-0'>
          <Hero />
        </div>
          <About />
          <Work />
          <Projects />
        <div className='relative z-0'>
          <Contact />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}