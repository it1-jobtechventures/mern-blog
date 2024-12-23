import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddBanner = ({url}) => {
    const [image, setImage] = useState(null);
    const [data, setData] = useState({
        link: '',
    });

    const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData((prev) => ({ ...prev, [name]: value }));
    };x`x`

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('link', data.link);
        formData.append('image', image);

        try {
            const response = await axios.post(`${url}/api/banner/addBanner`, formData);
            if (response.data.success) {
                setData({
                    link: '',
                });
                setImage(null);
                toast.success(response.data.message);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error('Error adding banner');
        }
    };

    useEffect(() => {
        
    }, [data]);
  return (
    <div className="max-w-md mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-5">Add banner</h1>
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
                <label htmlFor="link" className="block text-sm font-medium text-gray-700">
                    link
                </label>
                <input onChange={onChangeHandler} value={data.link} type="text" name="link" placeholder="Type here" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"/>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700 transition duration-200" >
                Add banner
            </button>
        </form>
    </div>
  )
}

export default AddBanner