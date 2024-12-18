import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const AllBanner = ({ url }) => {
  const [allBanner, setAllBanner] = useState([]);

  const fetchAllBanner = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/api/banner/listBanner`);
      if (response.data.success) {
        setAllBanner(response.data.data);
      } else {
        toast.error('Error fetching banner.');
      }
    } catch (error) {
      toast.error('An error occurred while fetching banner.');
      console.error(error);
    }
  };

  const removeBanner = async (bannerId) => {
    try {
      const response = await axios.post(`http://localhost:4000/api/banner/removeBanner`, { id: bannerId });
      await fetchAllBanner();
      if (response.data.success) {
        toast.success('Banner removed successfully.');
      } else {
        toast.error('Error removing banner.');
      }
    } catch (error) {
      toast.error('An error occurred while removing the banner.');
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAllBanner();
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-5">All Banner List</h1>
      <div className="overflow-x-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allBanner.map((banner, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <img src={`${url}/images/${banner.image}`} alt="banner" className="w-full h-40 object-cover rounded-lg mb-3"/>
              <div className="flex flex-col items-center">
                <p className="font-semibold text-center mb-2 break-words text-xs sm:text-sm">
                  {banner.link}
                </p>
                <button onClick={() => removeBanner(banner._id)} className="mt-2 w-full bg-red-500 text-white font-bold py-2 rounded hover:bg-red-700 transition duration-200">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBanner;
