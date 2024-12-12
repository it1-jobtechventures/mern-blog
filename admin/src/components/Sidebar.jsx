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
      </div>
    </aside>
  );
};

export default Sidebar;
