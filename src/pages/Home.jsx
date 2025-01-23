import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Contact from '../components/Contact';
import Footer from '../components/Footer'

const Home = () => {
  const video = '/videos/hero-4.mp4';
  return (
    <div>
      <Hero src={video} />
      <Features/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Home;
