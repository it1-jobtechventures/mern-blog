import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Gallery = () => {
  const [photo, setPhotos] = useState([]);

  const fetchGallery = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/gallery/listPhoto');
      if (response.data.success) {
        setPhotos(response.data.data);
        console.log(response.data)
      } else {
        console.error('Error fetching photos');
      }
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  return (
    <div className='h-screen bg-purple-500 pt-16 '>
      <div className='grid grid-cols-4 gap-5 p-4'>
        {
          photo.map((pht,idx) => (
            <img src={`http://localhost:4000/images/${pht.image}`} alt="gallery" className="max-w-full h-auto"/>
          ))
        }
      </div>
    </div>
  )
}

export default Gallery