import React from 'react';
import Hero from '../components/Hero';
import Footb from '../components/Footb';

const Football = () => {
  const video = '/videos/hero-3.mp4';
  return (
    <div>
      <Hero src={video} />
      <Footb />
    </div>
  );
};

export default Football;