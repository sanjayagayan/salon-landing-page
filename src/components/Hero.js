import React from 'react';
import LocationSvg from './LocationSvg';
import SearchSvg from './SearchSvg';

const Hero = () => {
  return (
    <section className="relative bg-cover bg-hero-image w-full h-[580px] px-4 ">
  <div className="container mx-auto px-4 h-[720px] w-full flex flex-col md:flex-row justify-between items-center relative z-10 max-w-screen-xl text-white p-4">

    <div className="md:w-1/2 flex flex-col justify-center items-start">
      <h1 className="text-[#ffff] text-5xl md:text-[80px] mb-4 font-custom">Book Your Salon</h1>
      <p className="text-[#ffff] text-2xl md:text-3xl mb-8 font-custom3">Appointment Today!</p>
      <div className="flex items-center bg-[#ffff] rounded-lg shadow-lg p-2 pl-5 space-x-4">
      <div className="flex items-center space-x-2 border-r pr-4">
         <SearchSvg/>
        <input
          type="text"
          placeholder="Search for a salon"
          className="flex-grow p-2 focus:outline-none"
        />
      </div>
      <div className="flex items-center">
        <LocationSvg/>
        <select className="px-8 focus:outline-none ">
          <option>Colombo</option>
          <option>Other City</option>
        </select>
      </div>
      <button className="bg-gradient-to-t from-secondary-color to-primary-color text-[#ffff] font-custom2 font-bold px-7 py-7 rounded-lg">
        SEARCH
      </button>
    </div>
    </div>
  </div>
</section>

  );
};

export default Hero;