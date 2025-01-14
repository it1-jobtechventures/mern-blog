import React, { useEffect, useState } from "react";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { toast } from 'react-toastify';

const Banner = ({ url }) => {
  const [banner, setBanner] = useState([]);
  const [loading ,setLoading] =  useState(false)

  const fetchBanner = async () => {
    try {
      setLoading(true)
      const response = await axios.get(`${url}/api/banner/listBanner`);
      if (response.data.success) {
        setBanner(response.data.data);
      } else {
        toast.error("Error fetching banners!");
      }
    } catch (error) {
      console.error("Error fetching banner:", error);
      toast.error("Network error: Failed to load banners!"); 
    }finally{
      setLoading(false)
    }
  };
  
  useEffect(() => {
    fetchBanner();
  }, []);

  return (
    loading ? (
      <div className="flex justify-center items-center">
        <div className="w-6 h-6 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
      </div>
    ):(
      <div className="mb-5">
        <Carousel showArrows={true}  showIndicators={true} infiniteLoop={true} autoPlay={true} interval={5000} showThumbs={false} dynamicHeight={true}>
          {banner.map((ban, id) => (
            <a href={ban.link} target="_blank">
              <div key={id} className=" m-5 cursor-pointer">
                <img src={ban.image} alt="banner" className="h-80 w-80 object-contain rounded-md cursor-pointer"/>
              </div>
            </a>
          ))}
        </Carousel>
      </div>
    )
  );
};

export default Banner;