import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

const AllUser = ({url}) => {
  const [users , setUsers] = useState([])

  const fetchAllUser = async () => {
    try {
      const res = await axios.get(`${url}/api/user/allUser`);
      if (res.data.success) {
        setUsers(res.data.data);
      } else {
        toast.error('Error fetching user');
      }
    } catch (error) {
      console.error(error.message);
      toast.error('An error occurred while fetching user.');
    }
  };

  const removeUser = async (userId) => {
    try {
      const response = await axios.post(`${url}/api/user/remove`, { id: userId },);
      if (response.data.success) {
        await fetchAllUser();
        toast.success('user removed successfully.');
      } else {
        toast.error('Error removing user');
      }
    } catch (error) {
      console.error(error.message);
      toast.error('An error occurred while removing user.');
    }
  };

  useEffect(() => {
    fetchAllUser()
  } ,[])
  return (
    <>
      <div className="container mx-auto p-6 mt-24">
        <h1 className="text-3xl font-semibold text-primary mb-6">All Users</h1>
        <div className="space-y-6">
          {users.map((user) => (
            <div key={user._id} className="bg-white border border-gray-300 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow" >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-lg font-semibold text-gray-800">Name: {user.name}</p>
                  <p className="text-sm text-gray-600">Email: {user.email}</p>
                  <p className="text-sm text-gray-500">Created Date: {new Date(user.createdAt).toLocaleDateString()}</p>
                  <p className="text-sm text-gray-600">Password: {user.password}</p>
                </div>
                <div className="flex space-x-4">
                  <button onClick={() => removeUser(user._id)} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors">
                    Remove user
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default AllUser