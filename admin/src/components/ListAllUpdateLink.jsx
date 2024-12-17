import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';

const ListAllUpdateLink = () => {
    const [updateList,setUpdateList]=useState([])

    const fetchAllUpdateList = async() => {
        try {
            const response = await axios.get(`http://localhost:4000/api/update/allUpdate`);
            if (response.data.success) {
                setUpdateList(response.data.data);
                console.log("jsdskd",response.data.data);
            } else {
                toast.error('Error fetching blogs.');
            }
        } catch (error) {
            toast.error('An error occurred while fetching blogs.');
            console.error(error);
        }
    }

    const removeUpdatedLink= async (linkId) => {
        try {
            const response = await axios.post(`http://localhost:4000/api/update/removeUpdate`, { id: linkId });
            await fetchAllUpdateList();
            if (response.data.success) {
                toast.success('link removed successfully.');
            } else {
                toast.error('Error removing link.');
            }
        } catch (error) {
            toast.error('An error occurred while removing the link.');
            console.error(error);
        }
    };

    useEffect(()=>{
        fetchAllUpdateList()
    },[])

  return (
    <div className="max-w-6xl mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg">
    <h1 className="text-2xl font-bold mb-5">All blog List</h1>
    <div className="overflow-x-auto">
        <div className="grid grid-cols-5 gap-4 text-center font-bold border-b pb-2">
            <div>title</div>
            <div>link</div>
            <div>Action</div>
        </div>
        {updateList.map((list, index) => (
            <div key={index} className="grid grid-cols-5 gap-4 items-center border-b py-2">
                <p>{list.title}</p>
                <p>{list.link}</p>
                <p onClick={() => removeUpdatedLink(list._id)} className="cursor-pointer text-red-500 hover:text-red-700 transition duration-200">
                    Remove
                </p>
            </div>
        ))}
    </div>
</div>
  )
}

export default ListAllUpdateLink