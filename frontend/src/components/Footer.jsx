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
          <img src="/pb.png" alt="logo" className="h-12 w-40 object-contain align-middle" />
        <p className="text-sm md:text-base">
          iste odit quam ratione? Ullam adipisci deserunt <br />
          similique nemo alias exercitationem at ipsa ut laborum.
        </p>
        {/* Social Media Icons */}
        <div className="mt-6 text-3xl font-medium flex gap-5 justify-center md:justify-start items-center">
          <Link to={''} target='_blank'><FaInstagram className="hover:text-[#ff9724] cursor-pointer"/></Link>
          <Link to={''} target='_blank' ><CiLinkedin className="hover:text-[#ff9724] cursor-pointer"/></Link>
          <Link target='_blank' to={'https://www.facebook.com/prakashbansal?mibextid=wwXIfr&rdid=AQH84ggmTmd77kcE&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AvhATBBTS%2F%3Fmibextid%3DwwXIfr'}><CiFacebook className="hover:text-[#ff9724] cursor-pointer"/></Link>
          <Link to={''} target='_blank'><CiTwitter className="hover:text-[#ff9724] cursor-pointer"/></Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 text-center md:text-left text-white">
        <ul className="space-y-5">
          <li className="font-bold">NAVIGATE</li>
          <NavLink to={'/about'}><li>About</li></NavLink>
          <NavLink to={'/blog'}><li>Blogs</li></NavLink>
          <NavLink to={'/gallery'}><li>Gallery</li></NavLink>
          <NavLink to={'/contact'}><li>Contact</li></NavLink>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
