import React, { useEffect, useState } from "react";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";

const Banner = ({ url }) => {
  const [banner, setBanner] = useState([]);

  const fetchBanner = async () => {
    try {
      const response = await axios.get(`${url}/api/banner/listBanner`);
      if (response.data.success) {
        setBanner(response.data.data);
      } else {
        toast.error("Error fetching banners!");
      }
    } catch (error) {
      console.error("Error fetching banner:", error);
      toast.error("Network error: Failed to load banners!"); 
    }
  };
  
  useEffect(() => {
    fetchBanner();
  }, []);

  return (
    <div className="mb-5">
      <Carousel showArrows={true}  showIndicators={true} infiniteLoop={true} autoPlay={true} interval={2000} showThumbs={false} dynamicHeight={true}>
        {banner.map((ban, id) => (
          <a href={ban.link} target="_blank">
            <div key={id} className=" m-5 cursor-pointer">
              <img src={ban.image} alt="banner" className="h-80 w-80 object-contain rounded-md cursor-pointer"/>
            </div>
          </a>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { toast } from 'react-toastify';

// const Banner = ({ url }) => {
//   const [banner, setBanner] = useState([]);

//   const fetchBanner = async () => {
//     try {
//       const response = await axios.get(`${url}/api/banner/listBanner`);
//       if (response.data.success) {
//         setBanner(response.data.data);
//       } else {
//         toast.error("Error fetching banners!");
//       }
//     } catch (error) {
//       console.error("Error fetching banner:", error);
//       toast.error("Network error: Failed to load banners!");
//     }
//   };

//   useEffect(() => {
//     fetchBanner();
//   }, []);

//   return (
//     <div className="mb-5">
//       <Carousel
//         showArrows={true}
//         showIndicators={false}
//         infiniteLoop={true}
//         autoPlay={true}
//         interval={1000}
//         showThumbs={false}
//         dynamicHeight={true}
//       >
//         {banner.map((ban, id) => (
//           <div key={id} className="m-5">
//             <a
//               href={ban.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               onClick={(e) => e.stopPropagation()} // Prevent event interference
//             >
//               <img
//                 src={ban.image}
//                 alt="banner"
//                 className="h-80 w-80 object-contain rounded-md"
//               />
//             </a>
//           </div>
//         ))}
//       </Carousel>
//     </div>
//   );
// };

// export default Banner;
