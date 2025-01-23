import React from 'react';
import Hero from '../components/Hero';

const Universiy = () => {
  const video = '/videos/hero-2.mp4';
  return (
    <div>
      <Hero src={video} />
    </div>
  );
};

export default Universiy