import React, { useEffect, useState } from "react";
import { BsPersonCircle, BsSearch } from "react-icons/bs";

const TOP_OFFSET = 66;

const Navbar = () => {
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(showBackground);
  return (
    <div
      className={`w-full shadow-lg lg:shadow-none font-body pt-1 lg:py-2 transition duration-700 ease-in-out lg:flex lg:justify-center lg:bg-transparent sticky lg:fixed top-0 bg-background ${
        showBackground ? "lg:bg-background lg:py-0 lg:shadow-xl" : ""
      }`}
    >
      <div className="px-0 lg:px-4 grid grid-cols-7 lg:flex items-center">
        {/* LOGO */}
        <div className="cursor-pointer self-center col-span-1 lg:flex-none place-self-center">
          <img
            className={`h-10 lg:h-14 ${showBackground ? "lg:h-10" : ""}`}
            src="./images/logo.png"
            alt="Logo"
          />
        </div>
        {/* SEARCH */}
        <div className="flex lg:mx-8 lg:w-96 col-span-5 h-8 px-4 rounded items-center gap-3 justify-between bg-white">
          <input
            className="outline-none font-body text-xs lg:text-sm w-full"
            type="text"
            placeholder="Search for artists and songs"
          />
          <BsSearch className="cursor-pointer" size={15} />
        </div>
        {/* LOGIN */}
        <div className="col-span-1 place-self-center self-center lg:order-last lg:border-l lg:ml-4 lg:pl-4 lg:border-gray-400">
          <div className="text-white hover:text-white/70 lg:hidden">
            <BsPersonCircle className="cursor-pointer" size={30} />
          </div>
          <div
            className={`uppercase cursor-pointer hidden lg:block text-gray-800 lg:hover:text-gray-500 text-sm font-normal ${
              showBackground ? "lg:text-white" : ""
            }`}
          >
            login
          </div>
        </div>
        {/* NAV */}
        <nav className="col-span-7">
          <ul
            className={`flex justify-evenly text-white lg:text-gray-800  text-sm font-normal ${
              showBackground ? "lg:text-white" : ""
            }`}
          >
            <li className="py-4 hover:text-gray-300 lg:hover:text-gray-500 uppercase">
              <a href="#">charts</a>
            </li>
            <li className="py-4 hover:text-gray-300 lg:ml-4 lg:hover:text-gray-500 uppercase">
              <a href="#">artists</a>
            </li>
            <li className="py-4 hover:text-gray-300 lg:ml-4 lg:hover:text-gray-500 uppercase">
              <a href="#">mixes</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
