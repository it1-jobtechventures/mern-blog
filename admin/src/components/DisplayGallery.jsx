import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const DisplayGallery = ({ url }) => {
  const [allMedia, setAllMedia] = useState([]);
  const [loading, setLoading] = useState({});

  const fetchAllMedia = async () => {
    try {
      const response = await axios.get(`${url}/api/gallery/listPhoto`);
      if (response.data.success) {
        const sortMedia = response.data.data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setAllMedia(sortMedia);
      } else {
        toast.error('Error fetching media.');
      }
    } catch (error) {
      toast.error('An error occurred while fetching media.');
      console.error(error);
    }
  };

  const removePhoto = async (photoId) => {
    try {
      setLoading((prev) => ({ ...prev, [photoId]: true })); // Set loading for the specific photo
      const response = await axios.post(`${url}/api/gallery/removePhoto`, { id: photoId });
      if (response.data.success) {
        toast.success('Photo removed successfully.');
        setAllMedia((prev) => prev.filter((item) => item._id !== photoId)); // Update state directly
      } else {
        toast.error('Error removing photo.');
      }
    } catch (error) {
      toast.error('An error occurred while removing the photo.');
      console.error(error);
    } finally {
      setLoading((prev) => ({ ...prev, [photoId]: false })); // Reset loading for the specific photo
    }
  };

  useEffect(() => {
    fetchAllMedia();
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-5">All Media</h1>
      {allMedia.length === 0 ? (
        <p className="text-center text-gray-500">No photos available.</p>
      ):(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {allMedia.map((item) => (
            <div key={item._id} className="bg-gray-100 p-4 rounded-lg shadow-md">
              {item.type === 'video' ? (
                <video controls className="w-full h-40 object-cover rounded-lg mb-3">
                  <source src={item.media} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img src={item.media} alt="media" className="w-full h-40 object-cover rounded-lg mb-3" />
              )}
              <button onClick={() => removePhoto(item._id)} className="mt-2 w-full bg-red-500 text-white font-bold py-2 rounded hover:bg-red-700 transition duration-200" disabled={loading[item._id]}>
                {loading[item._id] ? (
                  <div className="flex justify-center items-center">
                    <div className="w-6 h-6 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
                  </div>
                ) : (
                  'Remove'
                )}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DisplayGallery;
