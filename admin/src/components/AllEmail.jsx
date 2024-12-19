import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const AllEmail = ({url}) => {
    const [allEmails, setAllEmails] = useState([]);

    const fetchAllEmail = async () => {
        try {
            const response = await axios.get(`${url}/api/contact/listOfContact`);
            if (response.data.success) {
                setAllEmails(response.data.data);
                console.log(response.data.data)
            } else {
                toast.error('Error fetching emails.');
            }
        } catch (error) {
            toast.error('An error occurred while fetching email.');
            console.error(error);
        }
    };

    useEffect(() => {
        fetchAllEmail();
    }, []);

  return (
    <div className="max-w-7xl mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg">
    <h1 className="text-2xl font-bold mb-5 text-center">All Email list</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allEmails.map((email) => (
            <div key={email._id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold">{email.firstName} {email.lastName}</h2>
                <p className="text-gray-600"><strong>Email:</strong> {email.email}</p>
                <p className="text-gray-600"><strong>Phone No.:</strong> {email.phoneNo}</p>
                <p className="font-medium mt-2"><strong>Subject:</strong> {email.subject}</p>
                <p className="mt-2 text-gray-700"><strong>Message:</strong> {email.message}</p>
                <p className="mt-2 text-sm text-gray-500"><strong>Date:</strong> {new Date(email.date).toLocaleString()}</p>
            </div>
        ))}
    </div>
</div>

  )
}

export default AllEmail