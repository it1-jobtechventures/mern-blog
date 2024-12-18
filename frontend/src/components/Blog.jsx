import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import blogData from '../assets/blogData'; 
import BlogCard from './BlogCard';
import axios from 'axios';

const Blog = () => {
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([]);

    const fetchBlogs = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/blog/list'); 
            if (response.data.success) {
                setBlogs(response.data.data); 
            } else {
                console.error('Error fetching blogs');
            }
        } catch (error) {
            console.error('Error fetching blogs:', error);
        }
    };
  
    useEffect(() => {
        fetchBlogs()
    },[])

    const handleCardClick = (id) => {
        navigate(`/blog/${id}`); 
    };

  return (
    <>
        <h1 className='text-center font-bold text-4xl mb-3 pt-16 z-0'>BLOGS</h1>
        <div className='flex justify-center items-center'> 
            <div className="grid grid-cols-1  md:grid-cols-2 gap-8 p-4">
                {
                    blogs.map((blog, id) => (
                        <div key={blog._id} onClick={() => handleCardClick(blog._id)} className="cursor-pointer">
                            <BlogCard blog={blog} />
                        </div>
                    ))
                }
            </div>
        </div>
    </>
  );
};

export default Blog;
