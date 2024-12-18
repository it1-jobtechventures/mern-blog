import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddBlog = ({ url }) => {
    const [image, setImage] = useState(null);
    const [images, setImages] = useState([]);
    const [previews, setPreviews] = useState([]);
    const [data, setData] = useState({
        title: '',
        description: '',
        headline: '',
        long_description: '',
        category: '',
        keyword: '',
    });

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({ ...prev, [name]: value }));
    };

    const handleMainImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleAdditionalImagesChange = (e) => {
        const files = Array.from(e.target.files);
        setImages(files);
        const previewUrls = files.map((file) => URL.createObjectURL(file));
        setPreviews(previewUrls);
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
        images.forEach((img) => formData.append('images', img));

        try {
            const response = await axios.post(`http://localhost:4000/api/blog/add`, formData);
            if (response.data.success) {
                setData({
                    title: '',
                    description: '',
                    headline: '',
                    long_description: '',
                    category: '',
                    keyword: '',
                });
                setImage(null);
                setImages([]);
                setPreviews([]);
                toast.success(response.data.message);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error('Error adding blog');
        }
    };

    return (
        <div className="max-w-2xl mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold mb-5">Add Blog</h1>
            <form onSubmit={onSubmitHandler}>
                <div className="mb-4">
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                        Upload Main Image
                    </label>
                    <label htmlFor="image" className="block cursor-pointer">
                        <img src={image ? URL.createObjectURL(image) : ''} alt="Main Upload" className="h-20 w-20 mb-2 border border-gray-300 rounded object-cover" />
                    </label>
                    <input onChange={handleMainImageChange} type="file" id="image" hidden required />
                </div>
                <div className="mb-4">
                    <label htmlFor="images" className="block text-sm font-medium text-gray-700">
                        Upload Additional Images
                    </label>
                    <div className="flex gap-4 flex-wrap mt-2">
                        {previews.map((preview, index) => (
                            <img key={index} src={preview} alt={`Preview ${index}`} className="h-20 w-20 border border-gray-300 rounded object-cover" />
                        ))}
                    </div>
                    <input onChange={handleAdditionalImagesChange} type="file" id="images" multiple hidden required />
                </div>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                        Blog Title
                    </label>
                    <input onChange={onChangeHandler} value={data.title} type="text" name="title" placeholder="Type here" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                </div>
                <div className="mb-4">
                    <label htmlFor="headline" className="block text-sm font-medium text-gray-700">
                        Blog Headline
                    </label>
                    <input onChange={onChangeHandler} value={data.headline} type="text" name="headline" placeholder="Type here" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                </div>
                <div className="mb-4">
                    <label htmlFor="keyword" className="block text-sm font-medium text-gray-700">
                        Blog Keyword
                    </label>
                    <input onChange={onChangeHandler} value={data.keyword} type="text" name="keyword" placeholder="Type here" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                        Blog Description
                    </label>
                    <textarea onChange={onChangeHandler} value={data.description} name="description" rows={4} placeholder="Type here" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                </div>
                <div className="mb-4">
                    <label htmlFor="long_description" className="block text-sm font-medium text-gray-700">
                        Blog Long Description
                    </label>
                    <textarea onChange={onChangeHandler} value={data.long_description} name="long_description" rows={4} placeholder="Type here" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                </div>
                <div className="mb-4">
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                        Category
                    </label>
                    <select name="category" onChange={onChangeHandler} value={data.category} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
                        <option value="ajsd">ajsd</option>
                        <option value="sdfd">sdfd</option>
                        <option value="dddd">dddd</option>
                    </select>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700 transition duration-200">
                    Add Blog
                </button>
            </form>
        </div>
    );
};

export default AddBlog;
