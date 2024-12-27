import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiBars3CenterLeft } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    if (window.innerWidth <= 1024) {
      setIsOpen(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_blog')
    navigate('/login')
  }

  return (
    <>
      <button className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-md transition-all duration-300 ease-in-out transform" onClick={toggleSidebar}>
        {isOpen ? (
          <RxCross2 className="text-2xl" />
        ) : (
          <HiBars3CenterLeft className="text-2xl" />
        )}
      </button>

      {/* Sidebar */}
      <aside className={`lg:w-48 w-64 h-screen bg-gray-800 text-white fixed top-0 left-0 p-4 pt-16 z-50 transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="flex flex-col space-y-4">
          <NavLink to={'/'} className="flex items-center hover:text-gray-300 transition duration-200" onClick={handleLinkClick}>
            <span className="text-xl">🏠</span> <p className="ml-2">Add Blog</p>
          </NavLink>
          <NavLink to={'/allBlog'} className="flex items-center hover:text-gray-300 transition duration-200" onClick={handleLinkClick}>
            <span className="text-xl">📚</span> <p className="ml-2">All Blog</p>
          </NavLink>
          <NavLink to={'/updateLink'} className="flex items-center hover:text-gray-300 transition duration-200" onClick={handleLinkClick}>
            <span className="text-xl">🔗</span> <p className="ml-2">Update Link</p>
          </NavLink>
          <NavLink to={'/allUpdateLink'} className="flex items-center hover:text-gray-300 transition duration-200" onClick={handleLinkClick}>
            <span className="text-xl">🔗</span> <p className="ml-2">All Update Link</p>
          </NavLink>
          <NavLink to={'/addBanner'} className="flex items-center hover:text-gray-300 transition duration-200" onClick={handleLinkClick}>
            <span className="text-xl">🖼️</span> <p className="ml-2">Add Banner</p>
          </NavLink>
          <NavLink to={'/allBanner'} className="flex items-center hover:text-gray-300 transition duration-200" onClick={handleLinkClick}>
            <span className="text-xl">🖼️</span> <p className="ml-2">All Banner</p>
          </NavLink>
          <NavLink to={'/addGallery'} className="flex items-center hover:text-gray-300 transition duration-200" onClick={handleLinkClick}>
            <span className="text-xl">🖼️</span> <p className="ml-2">Add Gallery</p>
          </NavLink>
          <NavLink to={'/allGallery'} className="flex items-center hover:text-gray-300 transition duration-200" onClick={handleLinkClick}>
            <span className="text-xl">🖼️</span> <p className="ml-2">All Gallery</p>
          </NavLink>
          <NavLink to={'/emails'} className="flex items-center hover:text-gray-300 transition duration-200" onClick={handleLinkClick}>
            <span className="text-xl">💬</span> <p className="ml-2">All Emails</p>
          </NavLink>
          <NavLink to={'/addUser'} className="flex items-center hover:text-gray-300 transition duration-200" onClick={handleLinkClick}>
            <span className="text-xl">➕</span> <p className="ml-2">Add User</p>
          </NavLink>
          <NavLink to={'/allUser'} className="flex items-center hover:text-gray-300 transition duration-200" onClick={handleLinkClick}>
            <span className="text-xl">◼</span> <p className="ml-2">All User</p>
          </NavLink>
        </div>
        <div className=''>
        <p  className="flex items-center hover:text-gray-300 transition duration-200 mt-auto" onClick={handleLogout}>
            <span className="text-xl">🛑</span> <p className="ml-2">logout</p>
          </p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
