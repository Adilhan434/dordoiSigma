import React from 'react';
import Hero from '../components/Hero';

const Home = () => {
  const video = '/videos/hero-4.mp4';
  return (
    <div>
      <Hero src={video} />
    </div>
  );
};

export default Home;
