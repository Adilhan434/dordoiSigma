import React from 'react';
import Hero from '../components/Hero';

const Football = () => {
  const video = '/videos/hero-3.mp4';
  return (
    <div>
      <Hero src={video} />
      
    </div>
  );
};

export default Football;