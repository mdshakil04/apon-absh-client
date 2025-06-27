/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo/apon-abash2-preview.png";


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/property">Property</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
      <li>
        <NavLink to="/bestDeal">Best Deal</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
    </>
  );
  return (
    // className="navbar fixed font-bold rounded-xl"
    <nav  className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled ? "bg-transparent bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}>
      <div className=" text-white py-5 flex justify-between items-center">
        <div className="">
          <img className="w-40" src={logo} alt="MD Shakil" />
        </div>
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-700 text-white rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <div className="items-center gap-2"></div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg">{navLinks}</ul>
        </div>
        <div className="navbar-end ">
          
        </div>
      </div>
    </nav>
  );
  // https://drive.google.com/file/d/16B9DIT8j74L4zplGi0Tto8pweM-sHKWw/view?usp=sharing
};

export default Navbar;
