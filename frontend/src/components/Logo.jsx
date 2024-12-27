import React from "react";
import logoData from "../assets/logoData";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin, CiFacebook, CiTwitter } from "react-icons/ci";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {logoData.map((logo, idx) => (
          <div key={idx} className="rounded-md border border-gray-300 bg-white shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-shadow duration-300">
            <img className="rounded-sm h-24 w-24 md:h-32 md:w-32 object-contain mb-4" src={logo.image} alt="logo"/>
            <p className="text-center text-sm md:text-base mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="flex text-2xl gap-4">
              <Link to={logo.insta}>
                <FaInstagram className="hover:text-[#ff9724] cursor-pointer" />
              </Link>
              <Link to={logo.linkedin}>
                <CiLinkedin className="hover:text-[#ff9724] cursor-pointer" />
              </Link>
              <Link to={logo.facebook}>
                <CiFacebook className="hover:text-[#ff9724] cursor-pointer" />
              </Link>
              <Link to={logo.twitter}>
                <CiTwitter className="hover:text-[#ff9724] cursor-pointer" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Logo;
