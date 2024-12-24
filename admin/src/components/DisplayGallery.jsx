import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const DisplayGallery = ({ url }) => {
  const [allPhoto, setAllPhoto] = useState([]);

  const fetchAllPhotos = async () => {
    try {
      const response = await axios.get(`${url}/api/gallery/listPhoto`);
      if (response.data.success) {
        setAllPhoto(response.data.data);
      } else {
        toast.error('Error fetching photos.');
      }
    } catch (error) {
      toast.error('An error occurred while fetching photos.');
      console.error(error);
    }
  };

  const removePhoto = async (photoId) => {
    try {
      const response = await axios.post(`${url}/api/gallery/removePhoto`, { id: photoId });
      await fetchAllPhotos();
      if (response.data.success) {
        toast.success('Photo removed successfully.');
      } else {
        toast.error('Error removing photo.');
      }
    } catch (error) {
      toast.error('An error occurred while removing the photo.');
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAllPhotos();
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-5">All Photos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {allPhoto.map((photo, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <img src={photo.image} alt="photo" className="w-full h-40 object-cover rounded-lg mb-3"/>
            <div className="flex flex-col items-center">
              <button onClick={() => removePhoto(photo._id)} className="mt-2 w-full bg-red-500 text-white font-bold py-2 rounded hover:bg-red-700 transition duration-200">
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayGallery;