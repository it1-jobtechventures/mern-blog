import React, { useEffect, useState } from "react";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = ({url}) => {
  const [banner, setBanner] = useState([]);

  const fetchBanner = async () => {
    try {
      const response = await axios.get(`${url}/api/banner/listBanner`);
      if (response.data.success) {
        setBanner(response.data.data);
      } else {
        console.error("Error fetching banner");
      }
    } catch (error) {
      console.error("Error fetching banner:", error);
    }
  };

  useEffect(() => {
    fetchBanner();
  }, []);

  return (
    <div className="border border-yellow-900 w-60 md:w-96 lg:w-[28rem] m:w-48 mb-3">
      <Carousel showArrows={true} infiniteLoop={true} autoPlay={true} interval={1000} showThumbs={false} dynamicHeight={true}>
        {banner.map((ban, id) => (
          <div key={id}>
            <a href={ban.link} target="_blank" rel="noopener noreferrer">
              <img src={`${url}/images/${ban.image}`} alt="banner" className="max-w-full h-auto"/>
            </a>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
