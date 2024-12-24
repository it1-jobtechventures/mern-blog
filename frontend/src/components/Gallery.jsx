import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Gallery = ({ url }) => {
  const [photo, setPhotos] = useState([]);

  const fetchGallery = async () => {
    try {
      const response = await axios.get(`${url}/api/gallery/listPhoto`);
      if (response.data.success) {
        setPhotos(response.data.data);
      } else {
        toast.error('Error fetching photos');
      }
    } catch (error) {
      toast.error('Error fetching photos. Please try again.');
      console.error('Error fetching photos:', error);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  return (
    <div className="pt-16 pb-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-white font-semibold text-center mb-8">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {photo.map((pht, idx) => (
            <div key={idx} className="relative group">
              <img src={pht.image} alt="gallery" className="w-full h-64 object-cover rounded-lg transition-all duration-300 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg"/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;

