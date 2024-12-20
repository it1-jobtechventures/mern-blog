import React from "react";
import logoData from "../assets/logoData";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin, CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import {Link} from 'react-router-dom'

  const Logo = () => {
    return (
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {logoData.map((logo, idx) => (
            <div key={idx} className="rounded-md border border-black p-4 flex flex-col items-center">
              <img className="rounded-sm h-32 w-full object-contain bg-white" src={logo.image } alt="logo"/>
              <p className="text-center mt-2"> Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              <div className="flex text-2xl mt-2 gap-4 font-bold">
                <Link to={''}><FaInstagram className="hover:text-[#FF6200] cursor-pointer"/></Link>
                <Link to={''}><CiLinkedin className="hover:text-[#FF6200] cursor-pointer"/></Link>
                <Link to={''}><CiFacebook className="hover:text-[#FF6200] cursor-pointer"/></Link>
                <Link to={''}><CiTwitter className="hover:text-[#FF6200] cursor-pointer"/></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default Logo;
  // import React from 'react'

  // const Logo = () => {
  //   return (
  //     <div>Logo</div>
  //   )
  // }

  // export default Logo