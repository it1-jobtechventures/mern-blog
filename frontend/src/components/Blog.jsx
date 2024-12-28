import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BlogCard from "./BlogCard";
import axios from "axios";
import { toast } from "react-toastify";

const Blog = ({ url }) => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]); // Stores the list of all blogs
  const [filteredBlogs, setFilteredBlogs] = useState([]); // Stores blogs filtered by category
  const [categories, setCategories] = useState([]); // Stores the list of categories
  const [selectedCategory, setSelectedCategory] = useState("all"); // Tracks the selected category
  const [loading, setLoading] = useState(false); // Tracks loading state for data fetching
  const [isEmpty, setIsEmpty] = useState(false); // Tracks if there are no blogs available

  // Function to fetch blogs and categories from the server
  const fetchBlogsAndCategories = async () => {
    try {
      setLoading(true); // Start loading spinner

      // Fetch blogs and categories from the backend
      const blogsResponse = await axios.get(`${url}/api/blog/list`);
      const categoriesResponse = await axios.get(`${url}/api/category/allCategories`);

      // Handle blogs response
      if (blogsResponse.data.success) {
        setBlogs(blogsResponse.data.data); // Store all blogs
        setFilteredBlogs(blogsResponse.data.data); // Initially display all blogs
        setIsEmpty(blogsResponse.data.data.length === 0); // Check if blogs are empty
      } else {
        toast.error("Error fetching blogs!");
      }

      // Handle categories response
      if (categoriesResponse.data.success) {
        setCategories(categoriesResponse.data.data); // Store all categories
      } else {
        toast.error("Error fetching categories!");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Network error: Failed to load data!");
    } finally {
      setLoading(false); // Stop loading spinner
    }
  };

  // Effect to fetch blogs and categories on component mount
  useEffect(() => {
    fetchBlogsAndCategories();
  }, []);

  // Effect to filter blogs based on the selected category
  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredBlogs(blogs); // Show all blogs if "all" is selected
    } else {
      // Filter blogs where the category matches the selected category
      const filtered = blogs.filter((blog) => {
        // Find the category name for the blog's category ID
        const categoryName = categories.find((cat) => cat._id === blog.category)?.name;
        return categoryName === selectedCategory;
      });
      setFilteredBlogs(filtered); // Update the filtered blogs
    }
  }, [selectedCategory, blogs]); // Run whenever selectedCategory or blogs change

  // Function to navigate to a blog's detail page when clicked
  const handleCardClick = (id) => {
    navigate(`/blog/${id}`);
  };

  // Render loading spinner while data is being fetched
  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <div className="w-6 h-6 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="bg-[#202020]">
      {/* Header Section */}
      <main className="flex flex-col-reverse md:flex-row items-center bg-[#202020] justify-around p-4 md:p-8">
        <div className="w-full md:w-1/2 flex justify-center flex-col text-center md:text-left">
          <div className="bottom-0 left-0 w-full h-1 bg-[#ff9724]"></div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">BLOG.</h1>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profile" className="rounded-md shadow-lg w-3/4 md:w-full max-w-sm md:max-w-md"/>
        </div>
      </main>
      {/* Categories and Blogs Section */}
      <div className="mt-5 px-4 md:px-8">
        {/* Categories Filter */}
        <div className="flex gap-4 mb-4 overflow-x-auto scrollbar-hide">
          {/* Button to show all blogs */}
          <button onClick={() => setSelectedCategory("all")} className={`px-4 py-2 flex-shrink-0 rounded-md ${   selectedCategory === "all" ? "bg-[#ff9724] text-white" : "bg-gray-200" }`}>
            All Blogs
          </button>
          {/* Buttons for each category */}
          {categories.map((category) => (
            <button key={category._id} onClick={() => setSelectedCategory(category.name)} className={`px-4 py-2 flex-shrink-0 rounded-md ${ selectedCategory === category.name ? "bg-[#ff9724] text-white" : "bg-gray-200" }`}>
              {category.name}
            </button>
          ))}
        </div>
        {/* Blog Cards */}
        {isEmpty && selectedCategory === "all" ? (
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
