// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// const BlogDetail = () => {
//   const { id } = useParams(); 
//   const [blog, setBlog] = useState(null);

//   const fetchBlog = async () => {
//     try {
//       const response = await axios.post(`http://localhost:4000/api/blog/blog/${id}`); 
//       if (response.data.success) {
//         setBlog(response.data.data); 
//       } else {
//         console.error('Error fetching the blog');
//       }
//     } catch (error) {
//       console.error('Error fetching the blog:', error);
//     }
//   };

//   useEffect(() => {
//     fetchBlog();
//   }, [id]);

//   if (!blog) {
//     return <div>Blog not found</div>;
//   }

//   return (
//     <div className="p-8 pt-16">
//       <h2 className="text-4xl font-bold">{blog.title}</h2>
//       <p className="text-sm text-gray-500 mt-2">{new Date(blog.date).toLocaleDateString()}</p>
//       <img src={`http://localhost:4000/images/${blog.image}`} alt={blog.title} className="w-full h-80 object-cover mt-4 rounded-lg border"/>
//       <p className="text-lg mt-4">{blog.description}</p>
//       {
//         blog.images && blog.images[0] && (
//           <img src={`http://localhost:4000/images/${blog.images[0]}`} alt="Additional Image Below Date" className="w-full h-60 object-cover mt-6 rounded-lg border"/>
//         )
//       }
//       <div className="md:p-10 md:text-center space-y-10">
//         {blog.long_description}
//       </div>
//       {
//         blog.images && blog.images[1] && (
//           <img src={`http://localhost:4000/images/${blog.images[1]}`} alt="Additional Image Below Long Description" className="w-full h-60 object-cover mt-6 rounded-lg border"/>
//         )
//       }
//       {
//         blog.images && blog.images.length > 2 && (
//           <div className="mt-6 flex gap-4 justify-center items-center pb-10">
//             {
//               blog.images.slice(2).map((image, index) => (
//                 <img key={index} src={`http://localhost:4000/images/${image}`} alt={`Sub-image ${index + 2}`} className="w-40 h-40 object-cover rounded-lg border"/>
//               ))
//             }
//           </div>
//         )
//       }
//     </div>
//   );
// };

// export default BlogDetail;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BlogDetail = () => {
  const { id } = useParams(); 
  const [blog, setBlog] = useState(null);

  const fetchBlog = async () => {
    try {
      const response = await axios.post(`http://localhost:4000/api/blog/blog/${id}`); 
      if (response.data.success) {
        setBlog(response.data.data); 
      } else {
        console.error('Error fetching the blog');
      }
    } catch (error) {
      console.error('Error fetching the blog:', error);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [id]);

  if (!blog) {
    return <div className="p-8">Blog not found</div>;
  }

  return (
    <div className="container mx-auto p-6 md:p-10 md:pt-32 bg-gray-50 rounded-lg shadow-lg relative">
      {/* Blog Title */}
      <h1 className="text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-4">{blog.title}</h1>

      {/* Blog Image */}
      <div className="relative mb-8 flex justify-center items-center">
        <img 
          src={`http://localhost:4000/images/${blog.image}`} 
          alt={blog.title} 
          className="h-80 object-contain rounded-lg shadow-lg" 
        />
      </div>

      {/* Title Description & Image (left-right) */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="w-full md:w-1/2 text-lg text-gray-700">
          <p>{blog.description}</p>
        </div>
        <div className="w-full md:w-1/2">
          <img 
            src={`http://localhost:4000/images/${blog.image}`} 
            alt="Image on the right side"
            className="w-full h-64 object-contain rounded-lg shadow-md" 
          />
        </div>
      </div>

      {/* Long Description & Image (left-right) */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="w-full md:w-1/2">
          <img 
            src={`http://localhost:4000/images/${blog.images[1]}`} 
            alt="Image on the left side" 
            className="w-full h-64 object-contain rounded-lg shadow-md" 
          />
        </div>
        <div className="w-full md:w-1/2 text-lg text-gray-700">
          <p>{blog.long_description}</p>
        </div>
      </div>

      {/* Gallery of Additional Images (flex row for large screen, flex-wrap for small screen) */}
      {blog.images && blog.images.length > 2 && (
        <div className="flex flex-wrap gap-6 justify-center md:justify-start mb-8">
          {blog.images.slice(2).map((image, index) => (
            <img 
              key={index} 
              src={`http://localhost:4000/images/${image}`} 
              alt={`Sub-image ${index + 2}`} 
              className="w-40 h-40 object-contain rounded-lg shadow-md border-2 border-gray-300" 
            />
          ))}
        </div>
      )}

      {/* Date at the bottom right corner */}
      <div className="absolute bottom-6 right-6 text-sm text-gray-500">
        {new Date(blog.date).toLocaleDateString()}
      </div>
    </div>
  );
};

export default BlogDetail;
