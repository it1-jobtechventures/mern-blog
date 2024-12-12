import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="h-16 bg-[#B88455] flex justify-around p-3 text-white fixed w-full z-50">
        <div>
          <NavLink to="/"><img src="" alt="logo" /></NavLink>
        </div>
        <div className="flex md:gap-7 gap-2 font-medium md:font-bold md:text-xl">
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-yellow-300 underline' : ''}>
            About
          </NavLink>
          <NavLink to="/blog" className={({ isActive }) => isActive ? 'text-yellow-300 underline' : ''}>
            Blogs
          </NavLink>
          <NavLink to="/gallary" className={({ isActive }) => isActive ? 'text-yellow-300 underline' : '' }>
            Gallery
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
