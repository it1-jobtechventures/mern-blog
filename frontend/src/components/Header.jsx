// import React from 'react';
// import { FaInstagram } from "react-icons/fa";
// import { CiLinkedin } from "react-icons/ci";
// import { CiFacebook } from "react-icons/ci";
// import { FaWhatsapp } from "react-icons/fa6";

// const Header = () => {
//   return (
//     <>
//       <header className="flex pt-44 flex-col md:flex-row text-white justify-center items-center h-full md:h-auto w-full bg-[#202020]">
        
//         <div className="w-full md:w-1/2 p-4 md:text-xl text-center md:text-left space-y-6">
//         <hr/>
//           <div className="space-y-6">
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus labore neque perspiciatis voluptatum harum exercitationem odit est deleniti cupiditate quasi? Laborum quasi maxime error similique nihil, quo repudiandae perspiciatis sapiente.</p>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus labore neque perspiciatis voluptatum harum exercitationem odit est deleniti cupiditate quasi? Laborum quasi maxime error similique nihil, quo repudiandae perspiciatis sapiente.</p>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus labore neque perspiciatis voluptatum harum exercitationem odit est deleniti cupiditate quasi? Laborum quasi maxime error similique nihil, quo repudiandae perspiciatis sapiente.</p>
//           </div>
//           <div className="text-3xl md:text-4xl font-medium flex gap-4 justify-center md:justify-start items-center">
//             <FaInstagram />
//             <CiLinkedin />
//             <CiFacebook />
//             <FaWhatsapp />
//           </div>
//         </div>
//         <div className="w-full md:w-1/2 h-auto md:h-full flex justify-center items-center p-4">
//           <img  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  alt="profile image"  className="border border-solid p-2 rounded-md w-full max-w-xs md:max-w-md h-auto"/>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Header;
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin, CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa6";

const Header = () => {
  return (
    <>
      {/* Header Section */}
      <header className="flex flex-col md:flex-row items-center bg-[#202020] text-white">
        {/* Left Content */}
        <div className="w-full md:w-1/2 p-6 text-center md:text-left">
          {/* Heading with underline */}
          <h1 className="text-6xl font-bold mb-6 relative inline-block">
            ABOUT.
            <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-500"></span>
          </h1>

          {/* Description Text */}
          <p className="text-lg leading-relaxed mb-4">
            I'm passionate about innovation and driven by impact. I really enjoy
            working on cutting-edge projects and developing enabling new
            technologies in the hope that these will one day translate back to
            the real world and have a direct impact on our lives.
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-4 text-2xl justify-center md:justify-start mt-6">
            <FaInstagram />
            <CiLinkedin />
            <CiFacebook />
            <FaWhatsapp />
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 flex justify-center p-6">
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="profile"
            className="rounded-md shadow-lg w-full max-w-sm md:max-w-md"
          />
        </div>
      </header>
    </>
  );
};

export default Header;
