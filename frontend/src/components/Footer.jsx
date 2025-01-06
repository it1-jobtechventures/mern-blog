import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import {Link, NavLink} from 'react-router-dom'
import { CiTwitter } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className=" p-8 bg-[#202020] ">
      <div className="flex flex-col md:flex-row justify-around items-center md:items-start gap-2 p-8 bg-[#202020] ">
        <div className="space-y-4 text-center md:text-left text-white">
            <img src="/pb.png" alt="logo" className="h-12 w-40 object-contain align-middle" />
          <p className="text-sm md:text-base">
            iste odit quam ratione? Ullam adipisci deserunt <br />
            similique nemo alias exercitationem at ipsa ut laborum.
          </p>
          {/* Social Media Icons */}
          <div className="mt-6 text-3xl font-medium flex gap-5 justify-center md:justify-start items-center">
            <Link to={'https://www.instagram.com/prakbansal/?igsh=MW4zOWNyNXZneHhtYQ%3D%3D#'} target='_blank'><FaInstagram className="hover:text-[#ff9724] cursor-pointer"/></Link>
            <Link to={'https://www.linkedin.com/authwall?trk=gf&trkInfo=AQEFiEirkuP4uwAAAZQrxQ3Q0PGDDlczUzLg67c4tGhUG5qmltYWdTAD8eMyVsnCu2Qa9eB5d0W4-T4h3RX7cDnTp4DkJPrOwEkFI25TCZGSp7WnO_3TaHv4Jaga-BK069_BERA=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fprakashbansal'} target='_blank' ><CiLinkedin className="hover:text-[#ff9724] cursor-pointer"/></Link>
            <Link target='_blank' to={'https://facebook.com/prakashbansal?rdid=aH7v1LuL0d0XT43i&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FV3rXm7jtLFwrMfGm%2F#'}><CiFacebook className="hover:text-[#ff9724] cursor-pointer"/></Link>
            <Link to={'https://x.com/i/flow/login?redirect_after_login=%2FPrakBansal'} target='_blank'><CiTwitter className="hover:text-[#ff9724] cursor-pointer"/></Link>
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
      </div>
      <p className='text-white text-center'>&copy; 2025 Achal Sawant</p>
    </footer>
  );
};

export default Footer;
