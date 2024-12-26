import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const BlogDetail = ({ url }) => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

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

  const handleLike = async () => {
    try {
      await axios.post(`${url}/api/blog/like/${id}`);
      setBlog({ ...blog, likes: blog.likes + 1 });
    } catch (error) {
      toast.error('Error liking the blog');
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (comment.trim() === '') return;

    try {
      await axios.post(`${url}/api/blog/comment/${id}`, { text: comment });
      setBlog({ ...blog, comments: [...blog.comments, { text: comment }] });
      setComment('');
    } catch (error) {
      toast.error('Error submitting comment');
    }
  };

  
  const fetchComments = async () => {
    try {
      const response = await axios.get(`${url}/api/blog/comments/${id}`);
      if (response.data.success) {
        setComments(response.data.data); // Store the comments in state
      } else {
        toast.error('Error fetching comments');
        console.error('Error fetching comments');
      }
    } catch (error) {
      toast.error('Error fetching comments');
      console.error('Error fetching comments:', error);
    }
  };

  
  useEffect(() => {
    fetchBlog();
    fetchComments()
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
    <div className="container mx-auto p-6 md:p-10 md:pt-32 rounded-lg shadow-lg relative">
      <h1 className="text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-4">{blog.title}</h1>
      <h3 className="text-2xl md:text-3xl font-semibold text-center text-[#ff9724] mb-6">{blog.headline}</h3>
      <div className="mb-8 flex justify-center">
        <img src={blog.image} alt={blog.title} className="max-w-full h-auto object-contain rounded-lg shadow-lg"/>
      </div>
      <div className="text-lg text-gray-700 mb-8 text-justify leading-relaxed description" dangerouslySetInnerHTML={{ __html: blog.content }} ></div>
      <div className="absolute bottom-6 right-6 text-sm text-gray-500">
        {new Date(blog.date).toLocaleDateString()}
      </div>
      {/* Like Button */}
      <button className="mt-4 bg-[#ff9724] text-white px-4 py-2 rounded" onClick={handleLike}>
        Like ❤ {blog.likes}
      </button>
      {/* Comment Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Comments</h2>
        <form onSubmit={handleCommentSubmit} className="mb-4">
          <textarea value={comment} onChange={(e) => setComment(e.target.value)} rows="4" placeholder="Add a comment..." className="w-full p-4 border rounded-md mb-4"></textarea>
          <button type="submit" className="bg-[#ff9724] text-white px-4 py-2 rounded">
            Submit Comment
          </button>
        </form>
        {/* Display Comments */}
        {
          comments.map((comment, index) => (
            <div key={index} className="mb-2">
              <p className="text-sm text-gray-700">{comment.text}</p>
              <p className="text-xs text-gray-500">{new Date(comment.createdAt).toLocaleDateString()}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default BlogDetail;
