import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

const UpdateLink = ({ url }) => {
    const [data, setData] = useState({
        title: '',
        link: ''
    });

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({ ...prev, [name]: value }));
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:4000/api/update/addUpdate`, data, {
                headers: { 'Content-Type': 'application/json' }
            });
            if (response.data.success) {
                setData({ title: '', link: '' });
                toast.success('Link added successfully');
            } else {
                toast.error(response.data.message || 'Unexpected error occurred');
            }
        } catch (error) {
            console.error('Error:', error.response?.data || error.message);
            toast.error(error.message);
        }
    };

    useEffect(() => {

    }, [data]);

    return (
        <>
            <div className="max-w-2xl mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg">
                <h1 className="text-2xl font-bold mb-5">Add Update Link</h1>
                <form onSubmit={onSubmitHandler}>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                            Update Title
                        </label>
                        <input onChange={onChangeHandler} value={data.title} type="text" name="title" placeholder="Type here" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="link" className="block text-sm font-medium text-gray-700">
                            Update Link
                        </label>
                        <input onChange={onChangeHandler} value={data.link} type="text" name="link" placeholder="Type here" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700 transition duration-200">
                        Add Link
                    </button>
                </form>
            </div>
        </>
    );
};

export default UpdateLink;
