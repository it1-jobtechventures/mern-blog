import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FcLike } from "react-icons/fc";

const BlogDetail = ({ url }) => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [loading, setLoading] = useState(true); // Tracks loading state for skeleton

  const fetchBlog = async () => {
    try {
      const response = await axios.post(`${url}/api/blog/blog/${id}`);
      if (response.data.success) {
        setBlog(response.data.data);
      } else {
        toast.error('Error fetching the blog');
      }
    } catch (error) {
      toast.error('Error fetching the blog');
    } finally {
      setLoading(false); // Stop skeleton loader
    }
  };

  const handleLike = async () => {
    const likedBlogs = JSON.parse(localStorage.getItem("likedBlogs")) || [];
    const isAlreadyLiked = likedBlogs.includes(id);
    try {
      const response = await axios.post(`${url}/api/blog/like/${id}`, { toggle: !isAlreadyLiked });
      if (response.data.success) {
        setIsLiked(!isAlreadyLiked);
        setBlog({ ...blog, likes: response.data.data.likes });

        if (isAlreadyLiked) {
          const updatedLikedBlogs = likedBlogs.filter((blogId) => blogId !== id);
          localStorage.setItem("likedBlogs", JSON.stringify(updatedLikedBlogs));
        } else {
          likedBlogs.push(id);
          localStorage.setItem("likedBlogs", JSON.stringify(likedBlogs));
        }
      } else {
        toast.error("Error toggling like");
      }
    } catch (error) {
      toast.error("Error toggling like");
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!comment.trim()) return;

    try {
      const response = await axios.post(`${url}/api/blog/comment/${id}`, { text: comment });
      if (response.data.success) {
        setComments([...comments, { text: comment, createdAt: new Date().toISOString() }]);
        setComment('');
      } else {
        toast.error('Error submitting comment');
      }
    } catch (error) {
      toast.error('Error submitting comment');
    }
  };

  useEffect(() => {
    fetchBlog();
    const likedBlogs = JSON.parse(localStorage.getItem("likedBlogs")) || [];
    setIsLiked(likedBlogs.includes(id));
  }, [id]);

  if (loading) {
    return (
      <div className="p-6">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
          <div className="h-64 bg-gray-300 rounded mb-6"></div>
          <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 md:p-10 md:pt-32 rounded-lg shadow-lg relative">
      <h1 className="text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-4">{blog.title}</h1>
      <h3 className="text-2xl md:text-3xl font-semibold text-center text-[#ff9724] mb-6 break-words">{blog.headline}</h3>
      <div className="mb-8 flex justify-center">
        <img src={blog.image} alt={blog.title} className="max-w-full h-auto object-contain rounded-lg shadow-lg" />
      </div>
      <hr/>
      <div className="text-lg text-gray-700 pt-2 mb-8 text-justify leading-relaxed description" dangerouslySetInnerHTML={{ __html: blog.content }}></div>
      <div className="absolute bottom-6 right-6 text-sm text-gray-500">
        {new Date(blog.date).toLocaleDateString()}
      </div>
      <button className="mt-4 border border-[#ff9724] text-lg px-4 py-2 rounded flex items-center gap-2" onClick={handleLike}>
        {isLiked ? <FcLike /> : "🤍"} {blog.likes}
      </button>
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Comments</h2>
        <form onSubmit={handleCommentSubmit} className="mb-4">
          <textarea value={comment} onChange={(e) => setComment(e.target.value)} rows="4" placeholder="Add a comment..." className="w-full p-4 border rounded-md mb-4"></textarea>
          <button type="submit" className="bg-[#ff9724] text-white px-4 py-2 rounded">
            Submit Comment
          </button>
        </form>
        {comments.map((comment, index) => (
          <div key={index} className="mb-2 p-4 rounded-md shadow-sm">
            <p className="text-sm text-black">{comment.text}</p>
            <p className="text-xs text-gray-900 mt-1">{new Date(comment.createdAt).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogDetail;
