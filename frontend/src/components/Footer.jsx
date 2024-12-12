import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-16 p-8 bg-slate-200">
        <div className="space-y-4 text-center md:text-left">
          <h1 className="font-bold text-4xl">Blog</h1>
          <p>
            iste odit quam ratione? Ullam adipisci deserunt <br />
            similique nemo alias exercitationem at ipsa ut laborum.
          </p>
          <div className="mt-10 text-2xl font-medium flex gap-5 justify-center md:justify-start items-center">
            <FaInstagram />
            <CiLinkedin />
            <CiFacebook />
            <FaWhatsapp />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 text-center md:text-left">
          <ul>
            <li className="font-bold">Navigate</li>
            <li>Lorem</li>
            <li>ipsum</li>
            <li>dolor</li>
            <li>sit</li>
          </ul>
          <ul>
            <li className="font-bold">About</li>
            <li>amet</li>
            <li>ahdkals</li>
            <li>jdkdhak</li>
            <li>kflkf</li>
          </ul>
        </div>
        <div className="text-center md:text-left">
          <p>golivehq.co | hello@golivehq.co</p>
          <p>Privacy Policy | Terms & Conditions</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
