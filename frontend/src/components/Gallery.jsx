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
    <div className="pt-16 pb-10 bg-[#202020] relative min-h-screen">
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
              <div key={index} onClick={() => setPopupMedia(item)} className="cursor-pointer group hover:shadow-xl transition-shadow duration-300">
                {item.type === 'video' ? (
                  <video controls className="w-full h-64 object-contain rounded-lg transition-transform duration-300 ease-in-out transform group-hover:scale-105">
                    <source src={item.media} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img src={item.media} alt="media" className="w-full h-64 object-contain rounded-lg transition-transform duration-300 ease-in-out transform group-hover:scale-105"/>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Popup Overlay */}
      {popupMedia && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative bg-gray-800 rounded-lg p-4 sm:p-6 flex flex-col items-center justify-center w-[90%] max-w-[500px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] xl:max-w-[900px] max-h-[90vh] overflow-hidden">
            <button className="absolute top-4 right-4 text-white text-3xl hover:text-gray-400 transition" onClick={() => setPopupMedia(null)}>
              ✕
            </button>
            <div className="w-full h-[70vw] sm:h-[50vw] md:h-[40vw] lg:h-[30rem] flex items-center justify-center">
              {popupMedia.type === 'video' ? (
                <video controls className="w-full h-full object-contain rounded-lg">
                  <source src={popupMedia.media} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img src={popupMedia.media} alt="Popup media" className="w-full h-full object-contain rounded-lg"/>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
