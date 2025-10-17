
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <img src="https://picsum.photos/1920/1080?image=1043" alt="Spiritual background" className="absolute inset-0 w-full h-full object-cover"/>
      <div className="relative z-10 p-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 font-serif drop-shadow-lg">
          UPDESH – Your Daily Spiritual Connection
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-md">
          Transform your day with devotion, learning, and joy!
        </p>
        <a 
          href="#schedule" 
          className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-lg"
        >
          View Class Schedule
        </a>
      </div>
    </section>
  );
};

export default Hero;
