import React from "react";
import logoData from "../assets/logoData";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin, CiFacebook, CiTwitter } from "react-icons/ci";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="p-6 bg-[#202020] pt-10 pb-10">
      <div className="flex flex-col ">
        <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold mb-2 relative text-white">
          Our Businesses
        </h1>
        <div className="w-full sm:w-1/2 h-1 bg-[#ff9724]"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 pt-9">
        {logoData.map((logo, idx) => (
          <div key={idx} className="rounded-md border border-gray-300 bg-white shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-shadow duration-300">
            <img className="rounded-sm h-24 w-24 md:h-32 md:w-32 object-contain mb-4" src={logo.image} alt="logo"/>
            <p className=" text-sm md:text-base mb-4 text-center">
              {logo.text}
            </p>
            <div className="flex text-2xl gap-4 mt-auto">
              <Link to={logo.insta} target="_blank">
                <FaInstagram className="hover:text-[#ff9724] cursor-pointer" />
              </Link>
              <Link to={logo.linkedin} target="_blank">
                <CiLinkedin className="hover:text-[#ff9724] cursor-pointer" />
              </Link>
              <Link to={logo.facebook} target="_blank">
                <CiFacebook className="hover:text-[#ff9724] cursor-pointer" />
              </Link>
              <Link to={logo.twitter} target="_blank">
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
