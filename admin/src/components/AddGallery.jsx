import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddGallery = ({ url }) => {
    const [media, setMedia] = useState([]);
    const [previewUrls, setPreviewUrls] = useState([]);
    const [loading, setLoading] = useState(false);

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        media.forEach((file) => {
            formData.append('media', file);
        });

        try {
            setLoading(true);
            const response = await axios.post(`${url}/api/gallery/addMedia`, formData);
            if (response.data.success) {
                // Clear media and previews
                setMedia([]);
                clearPreview();
                toast.success(response.data.message);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error('Error adding media');
        } finally {
            setLoading(false);
        }
    };

    const onFilesChange = (e) => {
        const files = Array.from(e.target.files);
        setMedia(files);

        // Generate preview URLs
        const urls = files.map((file) => URL.createObjectURL(file));
        setPreviewUrls(urls);
    };

    const clearPreview = () => {
        // Revoke object URLs to release memory
        previewUrls.forEach((url) => URL.revokeObjectURL(url));
        setPreviewUrls([]);
        // Reset file input
        document.getElementById('media').value = '';
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold mb-5">Add Media</h1>
            <form onSubmit={onSubmitHandler}>
                <div className="mb-4">
                    <label htmlFor="media" className="block text-sm font-medium text-gray-700">
                        Upload Images/Videos(select upto 10 images/videos)
                    </label>
                    <input type="file" id="media" multiple accept="image/*,video/*" className="block w-full text-sm text-gray-500" onChange={onFilesChange}/>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-4">
                    {previewUrls.map((url, index) => {
                        const isImage = media[index]?.type.startsWith('image');
                        return (
                            <div key={index} className="relative">
                                {isImage ? (
                                    <img src={url} alt="Preview" className="h-20 w-20 object-cover border border-gray-300 rounded"/>
                                ) : (
                                    <video src={url} controls className="h-20 w-20 object-cover border border-gray-300 rounded"/>
                                )}
                            </div>
                        );
                    })}
                </div>

                <button type="submit" className="w-full bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700 transition duration-200" disabled={loading}>
                    {loading ? (
                        <div className="flex justify-center items-center">
                            <div className="w-6 h-6 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
                        </div>
                    ) : (
                        'Add Media'
                    )}
                </button>
            </form>
        </div>
    );
};

export default AddGallery;
