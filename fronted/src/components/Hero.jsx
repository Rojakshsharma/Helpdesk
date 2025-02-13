import React from 'react';
import videoSrc from '../assets/background.mp4';

function Hero() {
  return (
    <div className="relative  h-[100vh]">
      <video
        autoPlay
        loop
        muted
        src={videoSrc}
        className="absolute top-0 left-0 w-full h-full object-cover"
      ></video>
      <div className="relative z-10 flex flex-col items-center justify-center h-full ">
        <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
          WELCOME TO HELPDESK
        </h1>

        <p className='text-white text=-[15px] md:text-2xl'> Let's make problem-solving easier!</p>
      </div>
    </div>
  );
}

export default Hero;
