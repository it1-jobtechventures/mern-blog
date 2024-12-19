import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddGallery = ({url}) => {
    const [image, setImage] = useState(null);

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', image);

        try {
            const response = await axios.post(`${url}/api/gallery/addPhoto`, formData);
            if (response.data.success) {
                setImage(null);
                toast.success(response.data.message);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error('Error adding photo');
        }
    };

    useEffect(() => {
        
    }, []);
  return (
    <div>
        <div className="max-w-md mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-5">Add photo</h1>
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
            <button type="submit" className="w-full bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700 transition duration-200" >
                Add photo
            </button>
        </form>
    </div>
    </div>
  )
}

export default AddGallery
