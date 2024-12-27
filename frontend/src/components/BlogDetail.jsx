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
  const [loading, setLoading] = useState(false);

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
    const likedBlogs = JSON.parse(localStorage.getItem("likedBlogs")) || [];
    const isAlreadyLiked = likedBlogs.includes(id);
    try {
      // Send the toggle request to the server
      const response = await axios.post(`${url}/api/blog/like/${id}`, { toggle: !isAlreadyLiked });
      if (response.data.success) {
        setIsLiked(!isAlreadyLiked); // Toggle the local like state
        // Update the like count locally
        setBlog({ ...blog, likes: response.data.data.likes });
        // Update localStorage
        if (isAlreadyLiked) {
          // Remove the blog ID from localStorage
          const updatedLikedBlogs = likedBlogs.filter((blogId) => blogId !== id);
          localStorage.setItem("likedBlogs", JSON.stringify(updatedLikedBlogs));
        } else {
          // Add the blog ID to localStorage
          likedBlogs.push(id);
          localStorage.setItem("likedBlogs", JSON.stringify(likedBlogs));
        }
        // toast.success(isAlreadyLiked ? "Like removed!" : "Blog liked!");
      } else {
        toast.error("Error toggling like");
      }
    } catch (error) {
      toast.error("Error toggling like");
      console.error("Error toggling like:", error);
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
      setLoading(true)
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
    }finally{
      setLoading(false)
    }
  };

  
  useEffect(() => {
    fetchBlog();
    fetchComments()
    // Check if the blog is already liked
    const likedBlogs = JSON.parse(localStorage.getItem("likedBlogs")) || [];
    setIsLiked(likedBlogs.includes(id));
  
  }, [id]);

  if (!blog) {
    return <div className="p-8">Blog not found</div>;
  }

  const images = blog.images || [];
  return (
    loading ? (
      <div className="flex justify-center items-center md:pt-32">
        <div className="w-6 h-6 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
      </div>
    ) : (
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
      <button className="mt-4 bg-[#ff9724] text-white px-4 py-2 rounded flex items-center gap-1" onClick={handleLike}>
        {isLiked ? <FcLike/> : "🤍"} {blog.likes}
      </button>
      {/* Comment Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Comments</h2>
        <form onSubmit={handleCommentSubmit} className="mb-4">
          <textarea value={comment} onChange={(e) => setComment(e.target.value)} rows="4" placeholder="Add a comment..." className="w-full p-4 border rounded-md mb-4"></textarea>
          <button disabled={loading} type="submit" className="bg-[#ff9724] text-white px-4 py-2 rounded">
            {
              loading ? (
                <div className="flex justify-center items-center">
                  <div className="w-6 h-6 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
                </div>
              ):(
                "Submit Comment"
              )
            }
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
    )

  );
};

export default BlogDetail;
