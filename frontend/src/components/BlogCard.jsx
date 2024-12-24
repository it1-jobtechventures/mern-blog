import React from 'react';

const BlogCard = ({ blog , url}) => {
  return (
    <>
        <div className=" max-w-md  rounded-lg shadow-lg   p-4 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover rounded-lg" />
            <div className="mt-4 text-gray-100">
                <h2 className="text-xl font-bold mt-2  pb-2 ">{blog.title}</h2>
                <div className='flex justify-between pt-3 p-2'>
                    <div className='flex gap-3'>
                        <p>0 views</p>
                        <p>0 comments</p>
                    </div>
                    <div>
                        9 ❤
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default BlogCard;
