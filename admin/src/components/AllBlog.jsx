import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const AllBlog = ({ url }) => {
    const [allBlog, setAllBlog] = useState([]);

    const fetchAllBlog = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/api/blog/list`);
            if (response.data.success) {
                setAllBlog(response.data.data);
                console.log("jsdskd",response.data.data);
            } else {
                toast.error('Error fetching blogs.');
            }
        } catch (error) {
            toast.error('An error occurred while fetching blogs.');
            console.error(error);
        }
    };

    const removeBlog= async (blogId) => {
        try {
            const response = await axios.post(`http://localhost:4000/api/blog/remove`, { id: blogId });
            await fetchAllBlog();
            if (response.data.success) {
                toast.success('blog removed successfully.');
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
        <div className="max-w-6xl mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold mb-5">All blog List</h1>
            <div className="overflow-x-auto">
                <div className="grid grid-cols-5 gap-4 text-center font-bold border-b pb-2">
                    <div>Image</div>
                    <div>title</div>
                    <div>headline</div>
                    <div>Category</div>
                    <div>description</div>
                    <div>long description</div>
                    <div>keyword</div>
                    <div>Action</div>
                </div>
                {allBlog.map((blog, index) => (
                    <div key={index} className="grid grid-cols-5 gap-4 items-center border-b py-2">
                        <img
                            src={`${url}/images/${blog.image}`}
                            alt="Menu Item"
                            className="h-20 w-20 object-cover rounded"
                        />
                        <p>{blog.title}</p>
                        <p>{blog.headline}</p>
                        <p>{blog.category}</p>
                        <p>{blog.description}</p>
                        <p>{blog.long_description}</p>
                        <p>{blog.keyword}</p>
                        <p
                            onClick={() => removeBlog(blog._id)}
                            className="cursor-pointer text-red-500 hover:text-red-700 transition duration-200"
                        >
                            Remove
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllBlog;
