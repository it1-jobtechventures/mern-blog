import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Gallery = ({ url }) => {
  const [photo, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [popupMedia, setPopupMedia] = useState(null);

  const fetchGallery = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${url}/api/gallery/listPhoto`);
      if (response.data.success) {
        setPhotos(response.data.data);
      } else {
        toast.error('Error fetching photos');
      }
    } catch (error) {
      toast.error('Error fetching photos. Please try again.');
      console.error('Error fetching photos:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  return (
    <div className="pt-16 pb-10 bg-[#202020] relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-white font-semibold text-center mb-8">Gallery</h2>
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="w-full h-64 bg-gray-700 rounded-lg animate-pulse" />
            ))}
          </div>
        ) : photo.length === 0 ? (
          <p className="text-center text-white text-lg">No photos available in the gallery.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {photo.map((item, index) => (
              <div key={index} onClick={() => setPopupMedia(item)} className="cursor-pointer">
                {item.type === 'video' ? (
                  <video controls className="w-full pointer-events-none h-64 object-cover rounded-lg transition-all duration-300 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg">
                    <source src={item.media} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img src={item.media} alt="media" className="w-full pointer-events-none h-64 object-contain rounded-lg transition-all duration-300 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg"
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Popup Overlay */}
      {popupMedia && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative bg-gray-900 rounded-lg p-4 flex items-center justify-center w-full max-w-[40rem] h-auto max-h-[90vh]">
            <button className="absolute top-2 right-2 text-white text-2xl" onClick={() => setPopupMedia(null)}>
              ✕
            </button>
            {popupMedia.type === 'video' ? (
              <video controls autoPlay className="w-full h-full rounded-lg">
                <source src={popupMedia.media} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={popupMedia.media} alt="Popup media" className="w-full h-full object-cover rounded-lg"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
