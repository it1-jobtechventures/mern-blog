import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const AllBlog = ({ url }) => {
    const [allBlog, setAllBlog] = useState([]);

    const fetchAllBlog = async () => {
        try {
            const response = await axios.get(`${url}/api/blog/list`);
            if (response.data.success) {
                setAllBlog(response.data.data);
            } else {
                toast.error('Error fetching blogs.');
            }
        } catch (error) {
            toast.error('An error occurred while fetching blogs.');
            console.error(error);
        }
    };

    const removeBlog = async (blogId) => {
        try {
            const response = await axios.post(`${url}/api/blog/remove`, { id: blogId });
            await fetchAllBlog();
            if (response.data.success) {
                toast.success('Blog removed successfully.');
            } else {
                toast.error('Error removing blog.');
            }
        } catch (error) {
            toast.error('An error occurred while removing the blog.');
            console.error(error);
        }
    };

    useEffect(() => {
        fetchAllBlog();
    }, []);

    return (
        <div className="max-w-7xl mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold mb-5 text-center">All Blog List</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {allBlog.map((blog, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 p-4">
                        <div className="mb-3">
                            <div className="flex gap-2 overflow-x-auto whitespace-nowrap">
                                <img src={`${url}/images/${blog.image}`} alt="Main" className="h-24 w-24 object-cover rounded"/>
                                {blog.images &&
                                    blog.images.map((img, i) => (
                                        <img key={i} src={`${url}/images/${img}`} alt={`Additional ${i}`} className="h-24 w-24 object-cover rounded"/>
                                    ))}
                            </div>
                        </div>
                        <div className="mb-2">
                            <h3 className="text-lg font-semibold text-gray-800 truncate" title={blog.title}>
                                {blog.title}
                            </h3>
                        </div>
                        <p className="text-sm text-gray-600 mb-3 truncate" title={blog.headline}> {blog.headline}</p>
                        <p className="text-sm text-gray-600 mb-3 truncate" title={blog.description}> {blog.description}</p>
                        <p className="text-sm text-gray-600 mb-3 truncate" title={blog.keyword}> {blog.keyword} </p>
                        <button onClick={() => removeBlog(blog._id)} className="mt-2 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-200">
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllBlog;

