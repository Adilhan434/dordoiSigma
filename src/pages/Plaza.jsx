import React from 'react';
import Hero from '../components/Hero';

const Plaza = () => {
  const video = '/videos/hero-1.mp4';
  return (
    <div>
      <Hero src={video} />
    </div>
  );
};

export default Plaza;