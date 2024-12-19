import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const ListAllUpdateLink = ({url}) => {
    const [updateList, setUpdateList] = useState([]);

    const fetchAllUpdateList = async () => {
        try {
            const response = await axios.get(`${url}/api/update/allUpdate`);
            if (response.data.success) {
                setUpdateList(response.data.data);
            } else {
                toast.error('Error fetching links.');
            }
        } catch (error) {
            toast.error('An error occurred while fetching links.');
            console.error(error);
        }
    };

    const removeUpdatedLink = async (linkId) => {
        try {
            const response = await axios.post(`${url}/api/update/removeUpdate`, { id: linkId });
            await fetchAllUpdateList();
            if (response.data.success) {
                toast.success('Link removed successfully.');
            } else {
                toast.error('Error removing link.');
            }
        } catch (error) {
            toast.error('An error occurred while removing the link.');
            console.error(error);
        }
    };

    useEffect(() => {
        fetchAllUpdateList();
    }, []);

    return (
        <div className="max-w-6xl mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold mb-5">All Update Links</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {updateList.map((list, index) => (
                    <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-lg overflow-hidden">
                        <h2 className="font-semibold text-lg mb-2 truncate" title={list.title}>
                            {list.title}
                        </h2>
                        <p className="text-gray-700 mb-2 break-words" title={list.link}>
                            {list.link}
                        </p>
                        <button onClick={() => removeUpdatedLink(list._id)} className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-700 transition duration-200">
                            Remove Link
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListAllUpdateLink;
