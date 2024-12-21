// import React from "react";
// import logoData from "../assets/logoData";
// import { FaInstagram } from "react-icons/fa";
// import { CiLinkedin, CiFacebook } from "react-icons/ci";
// import { CiTwitter } from "react-icons/ci";
// import {Link} from 'react-router-dom'

//   const Logo = () => {
//     return (
//       <div className="p-4">
//         <div className="flex md:flex-row flex-col  gap-4">
//           {logoData.map((logo, idx) => (
//             <div key={idx} className="rounded-md border border-black bg-[#f3f3f3] p-4 flex flex-col items-center">
//               <img className="rounded-sm h-32 w-full object-contain " src={logo.image } alt="logo"/>
//               <p className="text-center mt-2"> Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
//               <div className="flex text-2xl mt-2 gap-4 font-bold">
//                 <Link to={logo.insta}><FaInstagram className="hover:text-[#FF6200] cursor-pointer"/></Link>
//                 <Link to={logo.linkedin}><CiLinkedin className="hover:text-[#FF6200] cursor-pointer"/></Link>
//                 <Link to={logo.facebook}><CiFacebook className="hover:text-[#FF6200] cursor-pointer"/></Link>
//                 <Link to={logo.twitter}><CiTwitter className="hover:text-[#FF6200] cursor-pointer"/></Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };

//   export default Logo;
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
          <div
            key={idx}
            className="rounded-md border border-gray-300 bg-white shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-shadow duration-300"
          >
            {/* Logo Image */}
            <img
              className="rounded-sm h-24 w-24 md:h-32 md:w-32 object-contain mb-4"
              src={logo.image}
              alt="logo"
            />
            {/* Text */}
            <p className="text-center text-sm md:text-base mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            {/* Social Icons */}
            <div className="flex text-2xl gap-4">
              <Link to={logo.insta}>
                <FaInstagram className="hover:text-[#FF6200] cursor-pointer" />
              </Link>
              <Link to={logo.linkedin}>
                <CiLinkedin className="hover:text-[#FF6200] cursor-pointer" />
              </Link>
              <Link to={logo.facebook}>
                <CiFacebook className="hover:text-[#FF6200] cursor-pointer" />
              </Link>
              <Link to={logo.twitter}>
                <CiTwitter className="hover:text-[#FF6200] cursor-pointer" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Logo;
