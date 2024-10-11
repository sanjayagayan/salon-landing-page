import React from "react";
import LocationSvg from "./LocationSvg";
import SearchSvg from "./SearchSvg";

const Hero = () => {
  return (
    <section className="relative bg-cover bg-hero-image w-full h-[620px] md:h-[580px] px-3 ">
      <div className="container m-auto px-3  h-[600px] md:h-[750px] w-full flex flex-col md:flex-row justify-center pt-0 md:pt-[140px] items-start relative z-10 max-w-screen-xl">
        <div className="md:w-full w-full flex flex-col justify-center md:justify-start items-start pt-4">
          <div className="">
            <h1 className="text-[#ffff] text-[65px] md:text-[80px] leading-tight  font-custom text-center md:text-left px-3 md:px-0">
              Book Your Salon
            </h1>
            <p className="text-[#ffff] text-5xl md:text-8xl mb-8 font-custom3 text-center md:text-left">
              Appointment Today!
            </p>
          </div>

          <div className="block md:flex items-start md:items-center bg-[#ffff] rounded-lg shadow-lg p-4 space-y-4 md:space-y-0 md:space-x-4 w-full md:w-[700px]">
            <div className="flex justify-between md:justify-start items-center w-full md:w-1/3 space-x-2 border-[#7F7E92]/15 border-b md:border-b-0 md:border-r px-2 md:px-6 py-4 md:py-0">
              <SearchSvg />
              <input
                type="text"
                placeholder="Search for a salon"
                className="focus:outline-none w-full"
              />
            </div>

            <div className="flex justify-between md:justify-start items-center w-full md:w-1/3 space-x-2 px-2 md:px-6 py-4 md:py-0">
              <LocationSvg />
              <select className="focus:outline-none focus:bg-transparent bg-transparent w-full text-[#7F7E92]">
                <option>Colombo</option>
                <option>Other City</option>
              </select>
            </div>

            <button className="bg-gradient-to-t from-secondary-color to-primary-color text-[#ffff] font-bold w-full py-4 md:py-7 px-6 md:w-1/3 rounded-lg">
              SEARCH
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
