import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa6";

const Header = () => {
  return (
    <>
      <header className="flex pt-16 flex-col md:flex-row justify-center items-center h-full md:h-auto w-full">
        <div className="w-full md:w-1/2 h-auto md:h-full flex justify-center items-center p-4">
          <img  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  alt="profile image"  className="border border-solid p-2 rounded-md w-full max-w-xs md:max-w-md h-auto"/>
        </div>
        <div className="w-full md:w-1/2 p-4 md:text-xl text-center md:text-left space-y-6">
          <div className="space-y-6">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus labore neque perspiciatis voluptatum harum exercitationem odit est deleniti cupiditate quasi? Laborum quasi maxime error similique nihil, quo repudiandae perspiciatis sapiente.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus labore neque perspiciatis voluptatum harum exercitationem odit est deleniti cupiditate quasi? Laborum quasi maxime error similique nihil, quo repudiandae perspiciatis sapiente.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus labore neque perspiciatis voluptatum harum exercitationem odit est deleniti cupiditate quasi? Laborum quasi maxime error similique nihil, quo repudiandae perspiciatis sapiente.</p>
          </div>
          <div className="text-3xl md:text-4xl font-medium flex gap-4 justify-center md:justify-start items-center">
            <FaInstagram />
            <CiLinkedin />
            <CiFacebook />
            <FaWhatsapp />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
