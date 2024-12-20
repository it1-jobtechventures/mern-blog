import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BlogDetail = ({url}) => {
  const { id } = useParams(); 
  const [blog, setBlog] = useState(null);

  const fetchBlog = async () => {
    try {
      const response = await axios.post(`${url}/api/blog/blog/${id}`); 
      if (response.data.success) {
        setBlog(response.data.data);
        console.log(response.data)
      } else {
        console.error('Error fetching the blog');
      }
    } catch (error) {
      console.error('Error fetching the blog:', error);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [id]);

  if (!blog) {
    return <div className="p-8">Blog not found</div>;
  }

  return (
    <div className="container mx-auto p-6 md:p-10 md:pt-32 bg-gray-50 rounded-lg shadow-lg relative">
      <h1 className="text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-4">{blog.title}</h1>
      <h3 className="text-3xl md:text-4xl font-semibold text-center text-[#ff6200] mb-4">{blog.headline}</h3>
      <div className="relative mb-8 flex justify-center items-center">
        <img  src={`${url}/images/${blog.image}`}  alt={blog.title}  className="h-80 object-contain rounded-lg shadow-lg" />
      </div>
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="w-full md:w-1/2 text-lg text-gray-700">
          <p>{blog.description}</p>
        </div>
        <div className="w-full md:w-1/2">
          <img  src={`${url}/images/${blog.image[1]}`}  alt="Image on the right side" className="w-full h-64 object-contain rounded-lg shadow-md" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="w-full md:w-1/2">
          <img  src={`${url}/images/${blog.images[2]}`}  alt="Image on the left side"  className="w-full h-64 object-contain rounded-lg shadow-md" />
        </div>
        <div className="w-full md:w-1/2 text-lg text-gray-700">
          <p>{blog.long_description}</p>
        </div>
      </div>
      {blog.images && blog.images.length > 3 && (
        <div className="flex flex-wrap gap-6 justify-center md:justify-start mb-8">
          {blog.images.slice(2).map((image, index) => (
            <img  key={index}  src={`${url}/images/${image}`}  alt={`Sub-image ${index + 2}`}  className="w-40 h-40 object-contain rounded-lg shadow-md border-2 border-gray-300"  />
          ))}
        </div>
      )}
      <div className="absolute bottom-6 right-6 text-sm text-gray-500">
        {new Date(blog.date).toLocaleDateString()}
      </div>
    </div>
  );
};

export default BlogDetail;
