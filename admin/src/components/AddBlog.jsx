import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddBlog = ({url}) => {
    const [image, setImage] = useState(null);
    const [data, setData] = useState({
        title: '',
        description: '',
        headline: '',
        long_description: '',
        category:'',
        keyword: '',        
    });

    const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData((prev) => ({ ...prev, [name]: value }));
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('description', data.description);
        formData.append('headline', data.headline);
        formData.append('long_description', data.long_description);
        formData.append('category', data.category);
        formData.append('keyword', data.keyword);
        formData.append('image', image);

        try {
            const response = await axios.post(`http://localhost:4000/api/blog/add`, formData);
            if (response.data.success) {
                setData({
                    title: '',
                    description: '',
                    headline: '',
                    long_description: '',
                    category:'',
                    keyword: '',   
                });
                setImage(null);
                toast.success(response.data.message);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error('Error adding blog');
        }
    };

    useEffect(() => {
        
    }, [data]);

    return (
        <div className="max-w-md mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold mb-5">Add Blog</h1>
            <form onSubmit={onSubmitHandler}>
                <div className="mb-4">
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                        Upload Image
                    </label>
                    <label htmlFor="image" className="block cursor-pointer">
                        <img src={image ? URL.createObjectURL(image) : ''} alt="Upload" className="h-20 w-20 mb-2 border border-gray-300 rounded" />
                    </label>
                    <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden required />
                </div>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                        Blog title
                    </label>
                    <input onChange={onChangeHandler} value={data.title} type="text" name="title" placeholder="Type here" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="headline" className="block text-sm font-medium text-gray-700">
                        Blog headline
                    </label>
                    <input onChange={onChangeHandler} value={data.headline} type="text" name="headline" placeholder="Type here" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="keyword" className="block text-sm font-medium text-gray-700">
                        Blog keyword
                    </label>
                    <input onChange={onChangeHandler} value={data.keyword} type="text" name="keyword" placeholder="Type here" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                        Blog Description
                    </label>
                    <textarea onChange={onChangeHandler} value={data.description} name="description" rows={4} placeholder="Type here" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="long_description" className="block text-sm font-medium text-gray-700">
                        Blog long Description
                    </label>
                    <textarea onChange={onChangeHandler} value={data.long_description} name="long_description" rows={4} placeholder="Type here" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                        Category
                    </label>
                    <select name="category" onChange={onChangeHandler} value={data.category} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" >
                        <option value="ajsd">ajsd</option>
                        <option value="sdfd">sdfd</option>
                        <option value="dddd">dddd</option>
                    </select>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700 transition duration-200" >
                    Add Product
                </button>
            </form>
        </div>
    );
};

export default AddBlog;
