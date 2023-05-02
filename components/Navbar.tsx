import React from "react";
import { BsPersonCircle, BsSearch } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="w-full pt-1 lg:pt-2 lg:flex lg:justify-center lg:bg-transparent sticky lg:fixed top-0 bg-[#444444]">
      <div className="px-4 lg:px-4 lg:max-w-[1000px] grid grid-cols-6 lg:flex lg:justify-evenly lg:grow lg:gap-0 items-center">
        {/* LOGO */}
        <div className="col-span-1 place-self-center">
          <img className="h-12 lg:h-14" src="./images/logo.png" alt="Logo" />
        </div>
        {/* SEARCH */}
        <div className="flex lg:max-w-[515px] lg:mx-4 lg:grow lg:flex-initial col-span-4 h-8 px-4 rounded items-center gap-3 justify-between bg-white">
          <input
            className="outline-none"
            type="text"
            placeholder="Search for artists and songs"
          />
          <BsSearch size={15} />
        </div>
        {/* LOGIN */}
        <div className="col-span-1 place-self-center lg:order-last lg:border-l lg:ml-2 lg:pl-4 lg:border-gray-400">
          <div className="text-white/70 lg:hidden">
            <BsPersonCircle size={30} />
          </div>
          <div className="uppercase hidden lg:block text-gray-800 lg:hover:text-gray-500 text-sm font-normal">
            login
          </div>
        </div>
        {/* NAV */}
        <nav className="col-span-6">
          <ul className="flex justify-evenly gap-5 text-white lg:text-gray-800  text-sm font-normal">
            <li className="py-4 hover:text-gray-300 lg:hover:text-gray-500 uppercase">
              <a href="#">charts</a>
            </li>
            <li className="py-4 hover:text-gray-300 lg:hover:text-gray-500 uppercase">
              <a href="#">artists</a>
            </li>
            <li className="py-4 hover:text-gray-300 lg:hover:text-gray-500 uppercase">
              <a href="#">mixes</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
