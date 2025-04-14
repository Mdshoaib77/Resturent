import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { BiRestaurant } from "react-icons/bi";
import Button from "../layouts/Button";
import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div
      className={`fixed top-0 z-50 w-full bg-transparent transition-all duration-300 ${
        isScrolled ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="flex flex-row justify-between p-5 md:px-32 px-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        {/* 🔧 Logo - only visible on md and above */}
        <div className="flex-row items-center hidden cursor-pointer md:flex">
          <span>
            <BiRestaurant size={32} className="text-white" />
          </span>
          <h1 className="text-xl font-semibold text-white">FoodieWeb</h1>
        </div>

        <nav className="flex-row items-center hidden gap-8 text-lg font-medium md:flex">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="text-white transition-all cursor-pointer hover:text-yellow-500"
          >
            Home
          </Link>

          <div className="relative group">
            <div className="flex items-center gap-1">
              <Link
                to="dishes"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-white transition-all cursor-pointer hover:text-yellow-500"
              >
                Dishes
              </Link>
              <BiChevronDown className="text-white cursor-pointer" size={25} />
            </div>

            <ul className="absolute hidden p-5 space-y-2 bg-white border border-gray-300 rounded-lg group-hover:block">
              <li>
                <Link
                  to="dishes"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="text-gray-800 transition-all cursor-pointer hover:text-yellow-500"
                >
                  Spicy
                </Link>
              </li>
              <li>
                <Link
                  to="dishes"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="text-gray-800 transition-all cursor-pointer hover:text-yellow-500"
                >
                  Tasty
                </Link>
              </li>
              <li>
                <Link
                  to="dishes"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="text-gray-800 transition-all cursor-pointer hover:text-yellow-500"
                >
                  Delicious
                </Link>
              </li>
              <li>
                <Link
                  to="dishes"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="text-gray-800 transition-all cursor-pointer hover:text-yellow-500"
                >
                  Crispy
                </Link>
              </li>
            </ul>
          </div>

          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="text-white transition-all cursor-pointer hover:text-yellow-500"
          >
            About
          </Link>

          <Link
            to="menu"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="text-white transition-all cursor-pointer hover:text-yellow-500"
          >
            Menu
          </Link>

          <Link
            to="review"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="text-white transition-all cursor-pointer hover:text-yellow-500"
          >
            Reviews
          </Link>

          <Button title="Login" />
        </nav>

        <div className="flex items-center md:hidden">
          {menu ? (
            <AiOutlineClose size={25} className="text-white" onClick={handleChange} />
          ) : (
            <AiOutlineMenuUnfold size={25} className="text-white" onClick={handleChange} />
          )}
        </div>
      </div>

      <div
        className={` ${
          menu ? "translate-x-0" : "-translate-x-full"
        } lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
      >
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="transition-all cursor-pointer hover:text-yellow-500"
          onClick={closeMenu}
        >
          Home
        </Link>
        <Link
          to="dishes"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="transition-all cursor-pointer hover:text-yellow-500"
          onClick={closeMenu}
        >
          Dishes
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="transition-all cursor-pointer hover:text-yellow-500"
          onClick={closeMenu}
        >
          About
        </Link>
        <Link
          to="menu"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="transition-all cursor-pointer hover:text-yellow-500"
          onClick={closeMenu}
        >
          Menu
        </Link>
        <Link
          to="review"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="transition-all cursor-pointer hover:text-yellow-500"
          onClick={closeMenu}
        >
          Reviews
        </Link>

        <Button title="Login" />
      </div>
    </div>
  );
};

export default Navbar;
