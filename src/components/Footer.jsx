import React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { FaHeart, FaCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-8 text-white shadow-2xl bg-gradient-to-r from-orange-800 to-red-900 rounded-t-3xl md:mt-0">
      <div className="flex flex-col justify-between p-8 px-5 md:flex-row md:px-32">
        <div className="w-full md:w-1/4">
          <h1 className="pb-4 text-2xl font-semibold text-yellow-400">
          FoodieWeb
          </h1>
          <p className="text-sm text-gray-300">
            A symphony of flavors, where every dish paints a story of culinary
            excellence.
          </p>
          <div className="flex mt-4 space-x-4">
            <a
              href="/"
              className="text-gray-400 transition-colors duration-300 hover:text-white"
            >
              <BsFacebook size={20} />
            </a>
            <a
              href="/"
              className="text-gray-400 transition-colors duration-300 hover:text-white"
            >
              <RiTwitterXFill size={20} />
            </a>
            <a
              href="/"
              className="text-gray-400 transition-colors duration-300 hover:text-white"
            >
              <BsInstagram size={20} />
            </a>
          </div>
        </div>
        <div className="mt-8 md:mt-0">
          <h1 className="pb-4 text-xl font-medium text-yellow-400">Discover</h1>
          <nav className="flex flex-col gap-2">
            <a
              href="/"
              className="transition-colors duration-300 hover:text-yellow-300"
            >
              Artisan Plates
            </a>
            <a
              href="/"
              className="transition-colors duration-300 hover:text-yellow-300"
            >
              Our Heritage
            </a>
            <a
              href="/"
              className="transition-colors duration-300 hover:text-yellow-300"
            >
              Gourmet Journey
            </a>
            <a
              href="/"
              className="transition-colors duration-300 hover:text-yellow-300"
            >
              Patron Praise
            </a>
          </nav>
        </div>
        <div className="mt-8 md:mt-0">
          <h1 className="pb-4 text-xl font-medium text-yellow-400">Experience</h1>
          <nav className="flex flex-col gap-2">
            <a
              href="/"
              className="transition-colors duration-300 hover:text-yellow-300"
            >
              Exclusive Events
            </a>
            <a
              href="/"
              className="transition-colors duration-300 hover:text-yellow-300"
            >
              Table Bookings
            </a>
          </nav>
        </div>
        <div className="mt-8 md:mt-0">
          <h1 className="pb-4 text-xl font-medium text-yellow-400">Connect</h1>
          <nav className="flex flex-col gap-2">
            <a
              href="/"
              className="transition-colors duration-300 hover:text-yellow-300"
            >
              contact@culinarycanvas.com
            </a>
            <a
              href="/"
              className="transition-colors duration-300 hover:text-yellow-300"
            >
              +1 (555) 987-6543
            </a>
            <a
              href="/"
              className="transition-colors duration-300 hover:text-yellow-300"
            >
              Join Our Community
            </a>
          </nav>
        </div>
      </div>
      <div className="pt-4 pb-8 border-t border-gray-700">
        <p className="text-sm text-center text-gray-400">
          <FaCopyright className="inline-block mr-1" />
          {new Date().getFullYear()} FoodieWeb Crafted with
          <FaHeart className="inline-block mx-1 text-red-500" />
          by
          <span className="text-yellow-400">Md Shoaib</span>. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;