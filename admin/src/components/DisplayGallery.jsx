import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const DisplayGallery = ({url}) => {
    const [allPhoto, setAllPhoto] = useState([]);

    const fetchAllPhotos = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/gallery/listPhoto`);
        if (response.data.success) {
          setAllPhoto(response.data.data);
          console.log(response.data)
        } else {
          toast.error('Error fetching photos.');
        }
      } catch (error) {
        toast.error('An error occurred while fetching photo.');
        console.error(error);
      }
    };
    
    const removePhoto = async (photoId) => {
      try {
        const response = await axios.post(`http://localhost:4000/api/gallery/removePhoto`, { id: photoId });
        await fetchAllPhotos();
        if (response.data.success) {
          toast.success('photo removed successfully.');
        } else {
          toast.error('Error removing photo.');
        }
      } catch (error) {
        toast.error('An error occurred while removing the photo.');
        console.error(error);
      }
  };
    useEffect(() => {
      fetchAllPhotos()
    },[])
    
  return (
    <div className="max-w-6xl mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg">
    <h1 className="text-2xl font-bold mb-5">All photo List</h1>
    <div className="overflow-x-auto">
      <div className="grid grid-cols-5 gap-4 text-center font-bold border-b pb-2">
        <div>Image</div>
        <div>Action</div>
      </div>
      {
        allPhoto.map((photo, index) => (
          <div key={index} className="grid grid-cols-5 gap-4 items-center border-b py-2">
            <img src={`${url}/images/${photo.image}`} alt="photo" className="h-20 w-20 object-cover rounded"/>
            <p onClick={() => removePhoto(photo._id)} className="cursor-pointer text-red-500 hover:text-red-700 transition duration-200">
              Remove
            </p>
          </div>
        ))
      }
    </div>
  </div>
  )
}

export default DisplayGallery