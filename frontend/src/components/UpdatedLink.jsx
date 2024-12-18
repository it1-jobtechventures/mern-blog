// import React from 'react'
// import { useEffect } from 'react';
// import axios from 'axios';
// import { useState } from 'react';

// const UpdatedLink = () => {
//     const [allUpdateList, setUpdateList] = useState([])

//     const fetchUpdatedlink = async () => {
//         try {
//             const response = await axios.get('http://localhost:4000/api/update/allUpdate'); 
//             if (response.data.success) {
//                 setUpdateList(response.data.data); 
//             } else {
//                 console.error('Error fetching blogs');
//             }
//         } catch (error) {
//             console.error('Error fetching blogs:', error);
//         }
//     };

//     useEffect(()=>{
//         fetchUpdatedlink()
//     },[])
//   return (
//     <div className='boder p-5 m-3 border '>
//         <h1>updated list</h1>
//         {
//             allUpdateList.map((list , id) => (
//                 <div key={id} className='border border-red-100 p-3 m-1'>
//                     <a href={list.link} target='_blank'><p>{list.title}</p></a>
//                 </div>
//             ))
//         }
//     </div>
//   )
// }

// export default UpdatedLink

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UpdatedLink = () => {
  const [allUpdateList, setUpdateList] = useState([]);

  const fetchUpdatedlink = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/update/allUpdate');
      if (response.data.success) {
        setUpdateList(response.data.data);
      } else {
        console.error('Error fetching updates');
      }
    } catch (error) {
      console.error('Error fetching updates:', error);
    }
  };

  useEffect(() => {
    fetchUpdatedlink();
  }, []);

  return (
    <div className=" p-5 m-3 ">
      <h1 className="text-xl font-bold mb-4">Updated List</h1>
      <div className="w-72 h-72 overflow-y-auto border border-gray-200 rounded-md p-3 scrollbar-hide">
        {allUpdateList.map((list, id) => (
          <div key={id} className="border border-gray-100 p-3 m-1 rounded-md hover:shadow-md transition-shadow">
            <a href={list.link} target="_blank" rel="noopener noreferrer">
              <p>{list.title}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpdatedLink;
