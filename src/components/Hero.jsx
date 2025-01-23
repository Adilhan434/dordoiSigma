import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { TiLocationArrow } from "react-icons/ti";
import { useEffect, useRef, useState } from "react";
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Button from "./Button";

// import VideoPreview from "./VideoPreview";

const Hero = (props) => {
 

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden overflow-y-hidden min-h-screen">
        <div>
          
                 

        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
        FUTURE
        </h1>

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              DORD<b></b>OI
            </h1>

            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              Discover the future of the world <br /> With Dordoi association
            </p>

            <Button
              id="watch-trailer"
              title="Watch trailer"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-yellow-300 flex-center gap-1"
            />
          </div>
        </div>
      </div>

    
      <div>
        <video autoPlay loop muted>
          <source src={props.src} type="video/mp4" className="w-[100%] h-[100%] object-cover  "/>
        </video>
      </div>
    </div>
  );
};

export default Hero;
