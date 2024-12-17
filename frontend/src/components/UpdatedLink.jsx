import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

const UpdatedLink = () => {
    const [allUpdateList, setUpdateList] = useState([])

    const fetchUpdatedlink = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/update/allUpdate'); 
            if (response.data.success) {
                setUpdateList(response.data.data); 
            } else {
                console.error('Error fetching blogs');
            }
        } catch (error) {
            console.error('Error fetching blogs:', error);
        }
    };

    useEffect(()=>{
        fetchUpdatedlink()
    },[])
  return (
    <div className='boder p-5 m-3 border '>
        <h1>updated list</h1>
        {
            allUpdateList.map((list , id) => (
                <div key={id} className='border border-red-100 p-3 m-1'>
                    <a href={list.link} target='_blank'><p>{list.title}</p></a>
                </div>
            ))
        }
    </div>
  )
}

export default UpdatedLink