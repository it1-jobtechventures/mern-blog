import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin, CiFacebook } from "react-icons/ci";
import {Link} from 'react-router-dom'
import { CiTwitter } from "react-icons/ci";

const Header = () => {
  return (
    <>
      <header className="flex flex-col-reverse md:flex-row items-center bg-[#202020] text-white pt-16">
        <div className="w-full md:w-1/2 p-6 text-center md:text-left">
          {/* Heading with underline */}
          <h1 className="md:text-6xl text-3xl font-bold mb-6 relative inline-block"> ABOUT </h1>
          <div className=" bottom-0 left-0 w-full h-1 bg-[#FF6200]"></div>
          <p className="text-lg leading-relaxed mb-4 pt-2">
            I'm passionate about innovation and driven by impact. I really enjoy
            working on cutting-edge projects and developing enabling new
            technologies in the hope that these will one day translate back to
            the real world and have a direct impact on our lives.
          </p>
          <div className="flex gap-4 text-3xl justify-center md:justify-start mt-6">
            <Link to={''}><FaInstagram className="hover:text-[#FF6200] cursor-pointer"/></Link>
            <Link to={''}><CiLinkedin className="hover:text-[#FF6200] cursor-pointer"/></Link>
            <Link to={''}><CiFacebook className="hover:text-[#FF6200] cursor-pointer"/></Link>
            <Link to={''}><CiTwitter className="hover:text-[#FF6200] cursor-pointer"/></Link>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 flex justify-center p-6">
          <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profile" className="rounded-md shadow-lg w-full max-w-sm md:max-w-md"/>
        </div>
      </header>
    </>
  );
};

export default Header;
