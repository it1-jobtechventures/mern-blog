import React from "react";
import logoData from "../assets/logoData";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin, CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import {Link} from 'react-router-dom'

  const Logo = () => {
    return (
      <div className="p-4">
        <div className="flex md:flex-row flex-col  gap-4">
          {logoData.map((logo, idx) => (
            <div key={idx} className="rounded-md border border-black bg-[#f3f3f3] p-4 flex flex-col items-center">
              <img className="rounded-sm h-32 w-full object-contain " src={logo.image } alt="logo"/>
              <p className="text-center mt-2"> Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              <div className="flex text-2xl mt-2 gap-4 font-bold">
                <Link to={logo.insta}><FaInstagram className="hover:text-[#FF6200] cursor-pointer"/></Link>
                <Link to={logo.linkedin}><CiLinkedin className="hover:text-[#FF6200] cursor-pointer"/></Link>
                <Link to={logo.facebook}><CiFacebook className="hover:text-[#FF6200] cursor-pointer"/></Link>
                <Link to={logo.twitter}><CiTwitter className="hover:text-[#FF6200] cursor-pointer"/></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default Logo;
