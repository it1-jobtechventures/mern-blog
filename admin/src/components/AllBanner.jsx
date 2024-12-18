import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const AllBanner = ({url}) => {
  const [allBanner, setAllBanner] = useState([]);

  const fetchAllBanner = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/api/banner/listBanner`);
      if (response.data.success) {
        setAllBanner(response.data.data);
        console.log(response.data)
      } else {
        toast.error('Error fetching banner.');
      }
    } catch (error) {
      toast.error('An error occurred while fetching banner.');
      console.error(error);
    }
  };
  
  const removeBanner= async (bannerId) => {
    try {
      const response = await axios.post(`http://localhost:4000/api/banner/removeBanner`, { id: bannerId });
      await fetchAllBanner();
      if (response.data.success) {
        toast.success('banner removed successfully.');
      } else {
        toast.error('Error removing blog.');
      }
    } catch (error) {
      toast.error('An error occurred while removing the banner.');
      console.error(error);
    }
};
  useEffect(() => {
    fetchAllBanner()
  },[])

  return (
    <div className="max-w-6xl mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-5">All banner List</h1>
      <div className="overflow-x-auto">
        <div className="grid grid-cols-5 gap-4 text-center font-bold border-b pb-2">
          <div>Image</div>
          <div>link</div>
          <div>Action</div>
        </div>
        {
          allBanner.map((banner, index) => (
            <div key={index} className="grid grid-cols-5 gap-4 items-center border-b py-2">
              <img src={`${url}/images/${banner.image}`} alt="banner" className="h-20 w-20 object-cover rounded"/>
              <p>{banner.link}</p>
              <p onClick={() => removeBanner(banner._id)} className="cursor-pointer text-red-500 hover:text-red-700 transition duration-200">
                Remove
              </p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default AllBanner