import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BlogCard from "./BlogCard";
import axios from "axios";
import { toast } from "react-toastify";
import blog_img from '../assets/blog.jpeg'

const SkeletonCard = () => (
  <div className="animate-pulse flex flex-col gap-2 bg-gray-800 p-4 rounded-md">
    <div className="w-full h-40 bg-gray-700 rounded-md"></div>
    <div className="h-4 bg-gray-700 rounded-md"></div>
    <div className="h-4 bg-gray-700 rounded-md w-2/3"></div>
  </div>
);

const Blog = ({ url }) => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  const fetchBlogsAndCategories = async () => {
    try {
      setLoading(true);
      const blogsResponse = await axios.get(`${url}/api/blog/list`);
      const categoriesResponse = await axios.get(`${url}/api/category/allCategories`);

      if (blogsResponse.data.success) {
        const sortedBlogs = blogsResponse.data.data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setBlogs(sortedBlogs);
        setFilteredBlogs(sortedBlogs);
        setIsEmpty(sortedBlogs.length === 0);
      } else {
        toast.error("Error fetching blogs!");
      }

      if (categoriesResponse.data.success) {
        setCategories(categoriesResponse.data.data);
      } else {
        toast.error("Error fetching categories!");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Network error: Failed to load data!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogsAndCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredBlogs(blogs);
    } else {
      const filtered = blogs.filter((blog) => {
        const categoryName = categories.find((cat) => cat._id === blog.category)?.name;
        return categoryName === selectedCategory;
      });
      setFilteredBlogs(filtered);
    }
  }, [selectedCategory, blogs]);

  const handleCardClick = (id) => {
    navigate(`/blog/${id}`);
  };

  return (
    <div className="bg-[#202020] pb-10">
      {/* Header Section */}
      <main className="flex flex-col-reverse md:flex-row items-center bg-[#202020] justify-around p-4 md:p-8">
        <div className="w-full md:w-1/2 flex justify-center flex-col text-center md:text-left">
          <div className="bottom-0 left-0 w-full h-1 bg-[#ff9724]"></div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">BLOG.</h1>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={blog_img} alt="profile" className="rounded-md shadow-lg w-3/4 md:w-full max-w-sm md:max-w-md"/>
        </div>
      </main>
      {/* Categories and Blogs Section */}
      <div className="mt-5 px-4 md:px-8">
        {/* Categories Filter */}
        <div className="flex gap-4 mb-4 overflow-x-auto scrollbar-hide">
          <button onClick={() => setSelectedCategory("all")} className={`px-4 py-2 flex-shrink-0 rounded-md ${ selectedCategory === "all" ? "bg-[#ff9724] text-white" : "bg-gray-200" }`}>
            All Blogs
          </button>
          {categories.map((category) => (
            <button key={category._id} onClick={() => setSelectedCategory(category.name)} className={`px-4 py-2 flex-shrink-0 rounded-md ${selectedCategory === category.name ? "bg-[#ff9724] text-white" : "bg-gray-200" }`}>
              {category.name}
            </button>
          ))}
        </div>
        {/* Blog Cards or Skeleton */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mt-4">
            {[...Array(5)].map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        ) : isEmpty && selectedCategory === "all" ? (
          <p className="text-center text-white text-xl mt-4">No blogs available at the moment.</p>
        ) : filteredBlogs.length === 0 ? (
          <p className="text-center text-white text-xl mt-4">
            No blogs available for the selected category.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mt-4">
            {filteredBlogs.map((blog) => (
              <div key={blog._id} onClick={() => handleCardClick(blog._id)} className="cursor-pointer">
                <BlogCard blog={blog} url={url} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;