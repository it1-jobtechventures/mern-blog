import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BlogCard from "./BlogCard";
import axios from "axios";

const Blog = ({ url }) => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(`${url}/api/blog/list`);
      if (response.data.success) {
        setBlogs(response.data.data);
        console.log(response.data.data)
      } else {
        console.error("Error fetching blogs");
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleCardClick = (id) => {
    navigate(`/blog/${id}`);
  };

  return (
    <div className="bg-[#202020]">
      {/* Main Section */}
      <main className="flex flex-col-reverse md:flex-row items-center bg-[#202020] justify-around p-4 md:p-8">
        <div className="w-full md:w-1/2 flex justify-center flex-col text-center md:text-left">
          <div className="bottom-0 left-0 w-full h-1 bg-[#FF6200]"></div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">BLOG.</h1>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profile" className="rounded-md shadow-lg w-3/4 md:w-full max-w-sm md:max-w-md"/>
        </div>
      </main>

      {/* Blogs Section */}
      <div className="mt-5 px-4 md:px-8">
        <div className="w-1/2 flex justify-center flex-col text-center md:text-right">
          <h1 className="text-xl md:text-2xl font-bold mb-2 text-white">
            MY OWN WRITINGS.
          </h1>
          <div className="bottom-0 left-0 w-full h-1 bg-[#FF6200]"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mt-4">
          {blogs.map((blog, id) => (
            <div key={blog._id} onClick={() => handleCardClick(blog._id)} className="cursor-pointer">
              <BlogCard blog={blog} url={url} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
