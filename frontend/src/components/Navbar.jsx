// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <>
//       <nav className="h-16 bg-[#B88455] flex justify-around p-3 text-white fixed w-full z-50">
//         <div>
//           <NavLink to="/"><img src="" alt="logo" /></NavLink>
//         </div>
//         <div className="flex md:gap-7 gap-2 font-medium md:font-bold md:text-xl">
//           <NavLink to="/" className={({ isActive }) => isActive ? 'text-yellow-300 underline' : ''}>
//             About
//           </NavLink>
//           <NavLink to="/blog" className={({ isActive }) => isActive ? 'text-yellow-300 underline' : ''}>
//             Blogs
//           </NavLink>
//           <NavLink to="/gallary" className={({ isActive }) => isActive ? 'text-yellow-300 underline' : '' }>
//             Gallery
//           </NavLink>
//           <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-yellow-300 underline' : '' }>
//             Contact
//           </NavLink>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HiBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation(); 
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const navItems = [
    { path: "/", name: "About" },
    { path: "/blog", name: "Blogs" },
    { path: "/gallery", name: "Gallery" },
    { path: "/contact", name: "Contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="h-16 bg-[#202020] flex justify-between items-center px-4 text-white fixed w-full z-50 shadow-md">
        {/* Logo */}
        <div>
          <NavLink to="/" onClick={closeSidebar}>
            <img src="" alt="logo" className="h-10" />
          </NavLink>
        </div>

        {/* Navigation Links */}
        <div
          className={`flex gap-7 font-medium md:font-bold md:text-lg ${
            isSidebarOpen
              ? "flex-col items-center fixed inset-0 bg-[#B88455] justify-center z-50"
              : "hidden md:flex"
          }`}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={closeSidebar}
              className="relative px-2 transition-colors duration-300"
            >
              {item.name}
              {/* Underline Animation */}
              <div
                className={`absolute left-0 bottom-[-4px] h-1 w-full bg-[#ff6200] transition-transform duration-300 ${
                  location.pathname === item.path ? "scale-x-100" : "scale-x-0"
                } origin-left`}
              ></div>
            </NavLink>
          ))}
        </div>

        {/* Hamburger / Close Icon */}
        <div
          className={`text-3xl cursor-pointer md:hidden z-50 ${
            isSidebarOpen ? "text-white" : ""
          }`}
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? (
            <RxCross2 className="transition-transform duration-300 ease-in-out rotate-180 scale-110" />
          ) : (
            <HiBars3 className="transition-transform duration-300 ease-in-out rotate-0 scale-100" />
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
