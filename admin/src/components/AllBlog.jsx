import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom'

const AllBlog = ({ url }) => {
    const [allBlog, setAllBlog] = useState([]);
    const navigate = useNavigate()

    const fetchAllBlog = async () => {
        try {
            const response = await axios.get(`${url}/api/blog/list`);
            if (response.data.success) {
                setAllBlog(response.data.data);
            } else {
                toast.error('Error fetching blogs.');
            }
        } catch (error) {
            toast.error('An error occurred while fetching blogs.');
            console.error(error);
        }
    };

    const removeBlog = async (blogId) => {
        try {
            const response = await axios.post(`${url}/api/blog/remove`, { id: blogId });
            await fetchAllBlog();
            if (response.data.success) {
                toast.success('Blog removed successfully.');
            } else {
                toast.error('Error removing blog.');
            }
        } catch (error) {
            toast.error('An error occurred while removing the blog.');
            console.error(error);
        }
    };

    useEffect(() => {
        fetchAllBlog();
    }, []);

    

    return (
        <div className="max-w-7xl mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold mb-5 text-center">All Blog List</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {allBlog.map((blog, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 p-4">
                        <div className="mb-3">
                            <div className="flex gap-2 overflow-x-auto whitespace-nowrap">
                                <img src={blog.image} alt="Main" className="h-24 w-24 object-cover rounded"/>
                            </div>
                        </div>
                        <div className="mb-2">
                            <h3 className="text-lg font-semibold text-gray-800 truncate" title={blog.title}>
                                {blog.title}
                            </h3>
                        </div>
                        <p className="text-sm text-gray-600 mb-3 truncate" title={blog.headline}> {blog.headline}</p>
                        <p className="text-sm text-gray-600 mb-3 truncate" title={blog.content}> {blog.content}</p>
                        <p className="text-sm text-gray-600 mb-3 truncate" title={blog.keyword}> {blog.keyword} </p>
                        <button onClick={() => removeBlog(blog._id)} className="mt-2 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-200">
                            Remove
                        </button>
                        <button onClick={() => navigate("/", { state: blog })} className="mt-2 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200">
                            Update
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllBlog;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";

// const AllBlog = ({ url }) => {
//   const [allBlog, setAllBlog] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedBlog, setSelectedBlog] = useState(null);

//   const fetchAllBlog = async () => {
//     try {
//       const response = await axios.get(`${url}/api/blog/list`);
//       if (response.data.success) {
//         setAllBlog(response.data.data);
//       } else {
//         toast.error("Error fetching blogs.");
//       }
//     } catch (error) {
//         console.error(error.message);
//       toast.error("An error occurred while fetching blogs.");
     
//     }
//   };

//   const openModal = (blog) => {
//     setSelectedBlog(blog);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedBlog(null);
//   };

//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     try {
//       const formData = new FormData();
//       formData.append("title", selectedBlog.title);
//       formData.append("headline", selectedBlog.headline);
//       formData.append("content", selectedBlog.content);
//       formData.append("category", selectedBlog.category);
//       formData.append("keyword", selectedBlog.keyword.join(","));
//       if (e.target.image.files[0]) {
//         formData.append("image", e.target.image.files[0]);
//       }

//       const response = await axios.put(
//         `${url}/api/blog/update/${selectedBlog._id}`,
//         formData
//       );

//       if (response.data.success) {
//         toast.success("Blog updated successfully!");
//         fetchAllBlog();
//         closeModal();
//       } else {
//         toast.error("Error updating blog.");
//       }
//     } catch (error) {
//       toast.error("An error occurred while updating the blog.");
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     fetchAllBlog();
//   }, []);

//   return (
//     <div className="max-w-7xl mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg">
//       <h1 className="text-2xl font-bold mb-5 text-center">All Blog List</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {allBlog.map((blog, index) => (
//           <div
//             key={index}
//             className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 p-4"
//           >
//             <img
//               src={blog.image}
//               alt="Blog"
//               className="h-24 w-24 object-cover rounded"
//             />
//             <h3 className="text-lg font-semibold truncate">{blog.title}</h3>
//             <p className="text-sm text-gray-600 truncate">{blog.headline}</p>
//             <button
//               onClick={() => openModal(blog)}
//               className="mt-2 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
//             >
//               Update
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Inline Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-5">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-xl font-bold">Edit Blog</h2>
//               <button
//                 onClick={closeModal}
//                 className="text-gray-600 hover:text-gray-900 transition"
//               >
//                 &times;
//               </button>
//             </div>
//             {selectedBlog && (
//               <form onSubmit={handleUpdate} encType="multipart/form-data">
//                 <div className="mb-4">
//                   <label className="block text-sm font-medium text-gray-700">
//                     Title
//                   </label>
//                   <input
//                     type="text"
//                     value={selectedBlog.title}
//                     onChange={(e) =>
//                       setSelectedBlog({ ...selectedBlog, title: e.target.value })
//                     }
//                     className="w-full border-gray-300 rounded mt-1"
//                     required
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-sm font-medium text-gray-700">
//                     Headline
//                   </label>
//                   <input
//                     type="text"
//                     value={selectedBlog.headline}
//                     onChange={(e) =>
//                       setSelectedBlog({
//                         ...selectedBlog,
//                         headline: e.target.value,
//                       })
//                     }
//                     className="w-full border-gray-300 rounded mt-1"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-sm font-medium text-gray-700">
//                     Content
//                   </label>
//                   <textarea
//                     value={selectedBlog.content}
//                     onChange={(e) =>
//                       setSelectedBlog({
//                         ...selectedBlog,
//                         content: e.target.value,
//                       })
//                     }
//                     className="w-full border-gray-300 rounded mt-1"
//                     required
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-sm font-medium text-gray-700">
//                     Category
//                   </label>
//                   <input
//                     type="text"
//                     value={selectedBlog.category}
//                     onChange={(e) =>
//                       setSelectedBlog({
//                         ...selectedBlog,
//                         category: e.target.value,
//                       })
//                     }
//                     className="w-full border-gray-300 rounded mt-1"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-sm font-medium text-gray-700">
//                     Keywords
//                   </label>
//                   <input
//                     type="text"
//                     value={selectedBlog.keyword.join(",")}
//                     onChange={(e) =>
//                       setSelectedBlog({
//                         ...selectedBlog,
//                         keyword: e.target.value.split(","),
//                       })
//                     }
//                     className="w-full border-gray-300 rounded mt-1"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-sm font-medium text-gray-700">
//                     Image
//                   </label>
//                   <input
//                     type="file"
//                     name="image"
//                     className="w-full border-gray-300 rounded mt-1"
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
//                 >
//                   Update Blog
//                 </button>
//               </form>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AllBlog;
