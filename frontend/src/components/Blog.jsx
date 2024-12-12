import React from 'react';
import { useNavigate } from 'react-router-dom'
import blogData from '../assets/blogData'; 
import BlogCard from './BlogCard';

const Blog = () => {
    const navigate = useNavigate();

    const handleCardClick = (id) => {
        navigate(`/blog/${id}`); 
    };

  return (
    <>
        <h1 className='text-center font-bold text-4xl mb-3 pt-16 z-0'>BLOGS</h1>
        <div className='flex justify-center items-center'> 
            <div className="grid grid-cols-1  md:grid-cols-2 gap-8 p-4">
                {
                    blogData.map((blog, id) => (
                        <div key={id} onClick={() => handleCardClick(id)} className="cursor-pointer">
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
