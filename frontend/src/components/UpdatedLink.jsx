import React, { useEffect, useState } from "react";
import axios from "axios";

const UpdatedLink = ({ url }) => {
  const [allUpdateList, setUpdateList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUpdatedlink = async () => {
    try {
      setLoading(true)
      const response = await axios.get(`${url}/api/update/allUpdate`);
      if (response.data.success) {
        setUpdateList(response.data.data);
      } else {
        console.error("Error fetching updates");
      }
    } catch (error) {
      console.error("Error fetching updates:", error);
    }finally{
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchUpdatedlink();
  }, []);

  return (
    loading ? (
      <div className="flex justify-center items-center">
        <div className="w-6 h-6 border-t-2 border-b-2 border-black rounded-full animate-spin"></div>
      </div>
    ):(
      <div className="p-5 m-3">
        <h1 className="text-2xl text-black text-center md:text-3xl font-bold mb-2">Updated List</h1>
        <div className=" bottom-0 left-0 w-3/4 h-1 bg-[#ff9724]"></div>
        <div className="w-full  h-72 overflow-y-auto scrollbar-hide rounded-md p-3 mt-6">
          {allUpdateList.map((list, id) => (
            <div key={id} className="border border-b-2  border-black text-black  p-3 mb-2 rounded-md hover:shadow-md transition-shadow" >
              <a href={list.link} target="_blank" rel="noopener noreferrer">
                <p>{list.title}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default UpdatedLink;
