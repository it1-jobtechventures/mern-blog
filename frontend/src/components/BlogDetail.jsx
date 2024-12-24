import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const BlogDetail = ({ url }) => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchBlog = async () => {
    try {
      setLoading(true); 
      const response = await axios.post(`${url}/api/blog/blog/${id}`);
      if (response.data.success) {
        setBlog(response.data.data);
      } else {
        toast.error('Error fetching the blog'); 
        console.error('Error fetching the blog');
      }
    } catch (error) {
      toast.error('Error fetching the blog'); 
      console.error('Error fetching the blog:', error);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="loader"></div>
      </div>
    );
  }

  if (!blog) {
    return <div className="p-8">Blog not found</div>;
  }

  const images = blog.images || [];
  return (
    <div className="container mx-auto p-6 md:p-10 md:pt-32  rounded-lg shadow-lg relative">
      <h1 className="text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-4">{blog.title}</h1>
      <h3 className="text-2xl md:text-3xl font-semibold text-center text-[#ff9724] mb-6">{blog.headline}</h3>
      <div className="mb-8 flex justify-center">
        <img src={blog.image} alt={blog.title} className="max-w-full h-auto object-contain rounded-lg shadow-lg"/>
      </div>
      <div className="text-lg text-gray-700 mb-8 text-justify leading-relaxed description" dangerouslySetInnerHTML={{ __html: blog.content }} ></div>
      <div className="absolute bottom-6 right-6 text-sm text-gray-500">
        {new Date(blog.date).toLocaleDateString()}
      </div>
    </div>
  );
};

export default BlogDetail;
