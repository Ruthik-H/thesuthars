import React, { useState, useEffect } from 'react';
import { useScrollReveal } from './hooks/useScrollReveal';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import CompanyProfile from './components/CompanyProfile';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import Statistics from './components/Statistics';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingElements from './components/FloatingElements';
import Gallery from './components/Gallery';

function App() {
  // Initialize scroll reveal animations
  useScrollReveal();

  return (
    <>


      <Navbar />
      <Hero />
      <About />
      <Team />
      <Services />
      <WhyChooseUs />
      <CompanyProfile />
      <Projects />
      <Gallery />
      <Testimonials />
      <Process />
      <Statistics />
      <Contact />
      <Footer />
      <FloatingElements />
    </>
  );
}

export default App;
