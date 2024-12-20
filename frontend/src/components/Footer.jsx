import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import {Link, NavLink} from 'react-router-dom'
import { CiTwitter } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-around items-center md:items-start gap-2 p-8 bg-[#202020] ">
      <div className="space-y-4 text-center md:text-left text-white">
        <h1 className="font-bold text-3xl md:text-4xl">PB</h1>
        <p className="text-sm md:text-base">
          iste odit quam ratione? Ullam adipisci deserunt <br />
          similique nemo alias exercitationem at ipsa ut laborum.
        </p>
        {/* Social Media Icons */}
        <div className="mt-6 text-3xl font-medium flex gap-5 justify-center md:justify-start items-center">
          <Link to={''}><FaInstagram className="hover:text-[#FF6200] cursor-pointer"/></Link>
          <Link to={''}><CiLinkedin className="hover:text-[#FF6200] cursor-pointer"/></Link>
          <Link to={''}><CiFacebook className="hover:text-[#FF6200] cursor-pointer"/></Link>
          <Link to={''}><CiTwitter className="hover:text-[#FF6200] cursor-pointer"/></Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 text-center md:text-left text-white">
        <ul className="space-y-2">
          <li className="font-bold">Navigate</li>
          <NavLink to={'/'}><li>About</li></NavLink>
          <NavLink to={'/'}><li>Blogs</li></NavLink>
          <NavLink to={'/'}><li>Gallery</li></NavLink>
          <NavLink to={'/'}><li>Contact</li></NavLink>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
