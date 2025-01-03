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
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/blog", name: "Blogs" },
    { path: "/gallery", name: "Gallery" },
    { path: "/contact", name: "Contact" },
  ];

  return (
    <>
      <nav className="h-20 bg-[#202020] flex justify-between items-center px-4 text-white  w-full z-50 shadow-md">
        <div>
          <NavLink to="/" onClick={closeSidebar}>
            <img src="/pb.png" alt="logo" className="h-14 md:h-16 w-40 object-contain" />
          </NavLink>
        </div>
        <div
          className={`flex gap-7 font-medium md:font-bold md:text-lg ${ isSidebarOpen ? "flex-col items-center fixed inset-0 bg-[#202020] justify-center z-50" : "hidden md:flex"}`}>
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} onClick={closeSidebar} className="relative px-2 transition-colors duration-300">
              {item.name}
              <div className={`absolute left-0 bottom-[-4px] h-1 w-full bg-[#ff9724] transition-transform duration-300 ${ location.pathname === item.path ? "scale-x-100" : "scale-x-0" } origin-left`} ></div>
            </NavLink>
          ))}
        </div>
        <div  className={`text-3xl cursor-pointer md:hidden z-50 ${ isSidebarOpen ? "text-white" : "" }`} onClick={toggleSidebar}>
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
