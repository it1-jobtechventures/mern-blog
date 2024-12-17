import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="pt-20 w-64 h-screen bg-gray-800 text-white fixed">
      <div className="flex flex-col space-y-4 p-4">
        <NavLink to={'/'} className="hover:text-gray-300 transition duration-200">
          <p>Add Blog</p>
        </NavLink>
        <NavLink to={'/allBlog'} className="hover:text-gray-300 transition duration-200">
          <p>All Blog</p>
        </NavLink>
        <NavLink to={'/updateLink'} className="hover:text-gray-300 transition duration-200">
          <p>Update link</p>
        </NavLink>
        <NavLink to={'/allUpdateLink'} className="hover:text-gray-300 transition duration-200">
          <p>All Update link</p>
        </NavLink>
        <NavLink to={'/addBanner'} className="hover:text-gray-300 transition duration-200">
          <p>Add banner</p>
        </NavLink>
        <NavLink to={'/allBanner'} className="hover:text-gray-300 transition duration-200">
          <p>All banner</p>
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
