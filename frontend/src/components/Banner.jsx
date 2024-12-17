import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Banner = () => {
  const [banner, setBanner] = useState([]);

  const fetchBanner = async () => {
    try {
        const response = await axios.get('http://localhost:4000/api/banner/listBanner'); 
        if (response.data.success) {
            setBanner(response.data.data);
            console.log("banner" ,response.data)
        } else {
            console.error('Error fetching banner');
        }
    } catch (error) {
        console.error('Error fetching banner:', error);
    }
};

useEffect(() => {
fetchBanner()
},[])
  return (
    <>
<div className='border border-yellow-900 m-3 p-5'>
    {banner.map((ban, id) => (
        <a key={id} href={ban.link} target='_blank' rel='noopener noreferrer'>
            <img src={`http://localhost:4000/images/${ban.image}`} alt='banner' className='max-w-full h-auto'/>
        </a>
    ))}
</div>
    </>
  )
}

export default Banner