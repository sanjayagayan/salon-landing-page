import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import AddressSvg from "./AddressSvg";
import PhoneSvg from "./PhoneSvg";
import FacebookSvg from "./FacebookSvg";
import InstagramSvg from "./InstagramSvg";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="bg-secondary-color/40 hidden md:flex">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center max-w-screen-xl">
          <div className="text-[#7F7E92] flex items-center space-x-2">
            <AddressSvg />
            <p>No.6, Pagoda Road, Nugegoda, 10250, Sri Lanka.</p>
          </div>

          <div className="text-[#7F7E92] flex items-center space-x-2 absolute left-1/2 transform -translate-x-1/2">
            <PhoneSvg />
            <p>+94 71 211 57 79</p>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-[#7F7E92]">Follow us:</span>
            <FacebookSvg />
            <InstagramSvg />
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-4 py-6 md:flex md:items-center md:justify-between">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 py-2">
            <img src={Logo} alt="Logo" className="w-[70px]" />
          </div>

          <div className="md:hidden flex justify-center items-center space-x-6">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-secondary-color focus:outline-none "
            >
              {isMobileMenuOpen ? (
                <XIcon className="block h-8 w-8" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-8 w-8" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        <div
          className={`${
            isMobileMenuOpen
              ? "flex flex-col justify-center items-center text-center w-full"
              : "hidden"
          } md:hidden`}
        >
          <div className="w-full space-y-0">
            <ul className="space-y-4 font-custom2 font-medium text-[#7F7E92] pt-4 text-center max-w-full">
              <li>
                <button className="px-5 py-3 bg-none hover:bg-secondary-color/35 rounded w-full">
                  HOME
                </button>
              </li>
              <li>
                <button className="px-5 py-3 bg-none hover:bg-secondary-color/35 rounded w-full">
                  OUR STORY
                </button>
              </li>
              <li>
                <button className="px-5 py-3 bg-none hover:bg-secondary-color/35 rounded w-full">
                  OUR TEAM
                </button>
              </li>
              <li>
                <button className="px-5 py-3 bg-none hover:bg-secondary-color/35 rounded w-full">
                  OUR SERVICES
                </button>
              </li>
            </ul>
          </div>

          <button className="bg-gradient-to-t from-secondary-color to-primary-color text-[#ffff] font-custom2 font-bold px-5 py-3 rounded w-full mt-4">
            BOOK NOW
          </button>
        </div>

        <div className="hidden md:flex justify-center items-center space-x-9 py-2">
          <ul className="flex space-x-9 font-custom2 font-medium text-[#7F7E92]">
            <li>
              <button>HOME</button>
            </li>
            <li>
              <button>OUR STORY</button>
            </li>
            <li>
              <button>OUR TEAM</button>
            </li>
            <li>
              <button>OUR SERVICES</button>
            </li>
          </ul>
          <button className="bg-gradient-to-t from-secondary-color to-primary-color text-[#ffff] font-custom2 font-bold px-5 py-3 rounded">
            BOOK NOW
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
