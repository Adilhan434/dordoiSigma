import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Contact from '../components/Contact';
import Story from '../components/Story';
import Footer from '../components/Footer';
import Cards from '../components/Cards'
import Links from '../components/Links'

const Home = () => {
  const video = '/videos/hero-4.mp4';
  return (
    <div>
      <Hero src={video} />
      <Cards />
      <Contact/>
      <Features/>
      <Story />
      <Links />
      <Footer/>
    </div>
  );
};

export default Home;
