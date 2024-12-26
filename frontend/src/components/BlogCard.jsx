import React from 'react';

const BlogCard = ({ blog , url}) => {
    // Ensure comments is an empty array if undefined
    const commentsCount = Array.isArray(blog.comments) ? blog.comments.length : 0;
    
  return (
    <>
        <div className=" max-w-md  rounded-lg shadow-lg   p-4 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover rounded-lg" />
            <div className="mt-4 text-gray-100">
                <h2 className="text-xl font-bold mt-2  pb-2 ">{blog.title}</h2>
                <div className='flex justify-between pt-3 p-2'>
                    <div className='flex gap-3'>
                        <p>{blog.view}</p>
                        <p>{commentsCount} comments</p>
                    </div>
                    <div>
                        {blog.likes}❤
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default BlogCard;
