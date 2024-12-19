// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const UpdatedLink = ({url}) => {
//   const [allUpdateList, setUpdateList] = useState([]);

//   const fetchUpdatedlink = async () => {
//     try {
//       // const response = await axios.get(`${url}/api/update/allUpdate`);
//       const response = await axios.get(`http://localhost:4000/api/update/allUpdate`);
//       if (response.data.success) {
//         setUpdateList(response.data.data);
//       } else {
//         console.error('Error fetching updates');
//       }
//     } catch (error) {
//       console.error('Error fetching updates:', error);
//     }
//   };

//   useEffect(() => {
//     fetchUpdatedlink();
//   }, []);

//   return (
//     <div className=" p-5 m-3 ">
//       <h1 className="text-xl font-bold mb-4">Updated List</h1>
//       <div className="w-72 h-72 overflow-y-auto border border-gray-200 rounded-md p-3 scrollbar-hide">
//         {allUpdateList.map((list, id) => (
//           <div key={id} className="border border-gray-100 p-3 m-1 rounded-md hover:shadow-md transition-shadow">
//             <a href={list.link} target="_blank" rel="noopener noreferrer">
//               <p>{list.title}</p>
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default UpdatedLink;
import React, { useEffect, useState } from "react";
import axios from "axios";

const UpdatedLink = ({ url }) => {
  const [allUpdateList, setUpdateList] = useState([]);

  const fetchUpdatedlink = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/api/update/allUpdate`);
      if (response.data.success) {
        setUpdateList(response.data.data);
      } else {
        console.error("Error fetching updates");
      }
    } catch (error) {
      console.error("Error fetching updates:", error);
    }
  };

  useEffect(() => {
    fetchUpdatedlink();
  }, []);

  return (
    <div className="p-5 m-3">
      <h1 className="text-lg md:text-xl font-bold mb-4">Updated List</h1>
      <div className="w-full md:w-72 h-72 overflow-y-auto border border-gray-200 rounded-md p-3">
        {allUpdateList.map((list, id) => (
          <div
            key={id}
            className="border border-gray-100 p-3 mb-2 rounded-md hover:shadow-md transition-shadow"
          >
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
