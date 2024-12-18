import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BlogDetail = () => {
  const { id } = useParams(); 
  const [blog, setBlog] = useState(null);

  const fetchBlog = async () => {
    try {
      const response = await axios.post(`http://localhost:4000/api/blog/blog/${id}`); 
      if (response.data.success) {
        setBlog(response.data.data); 
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
    return <div>Blog not found</div>;
  }

  return (
    <div className="p-8 pt-16">
      <h2 className="text-4xl font-bold">{blog.title}</h2>
      <p className="text-sm text-gray-500 mt-2">{new Date(blog.date).toLocaleDateString()}</p>
      <img src={`http://localhost:4000/images/${blog.image}`} alt={blog.title} className="w-full h-80 object-cover mt-4 rounded-lg border"/>
      <p className="text-lg mt-4">{blog.description}</p>
      {
        blog.images && blog.images[0] && (
          <img src={`http://localhost:4000/images/${blog.images[0]}`} alt="Additional Image Below Date" className="w-full h-60 object-cover mt-6 rounded-lg border"/>
        )
      }
      <div className="md:p-10 md:text-center space-y-10">
        {blog.long_description}
      </div>
      {
        blog.images && blog.images[1] && (
          <img src={`http://localhost:4000/images/${blog.images[1]}`} alt="Additional Image Below Long Description" className="w-full h-60 object-cover mt-6 rounded-lg border"/>
        )
      }
      {
        blog.images && blog.images.length > 2 && (
          <div className="mt-6 flex gap-4 justify-center items-center pb-10">
            {
              blog.images.slice(2).map((image, index) => (
                <img key={index} src={`http://localhost:4000/images/${image}`} alt={`Sub-image ${index + 2}`} className="w-40 h-40 object-cover rounded-lg border"/>
              ))
            }
          </div>
        )
      }
    </div>
  );
};

export default BlogDetail;
