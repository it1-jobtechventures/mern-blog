import React from 'react';
import { useParams } from 'react-router-dom'
import blogData from '../assets/blogData'

const BlogDetail = () => {
  const { id } = useParams(); 
  const blog = blogData[id];

    if (!blog) {
        return <div>Blog not found</div>;
    }

  return (
    <> 
        <div className="p-8 pt-16">
            <h2 className="text-4xl font-bold">{blog.title}</h2>
            <p className="text-sm text-gray-500 mt-2">{blog.date_published}</p>
            <h3 className="text-2xl font-semibold mt-4">{blog.headline}</h3>
            <img src={blog.image} alt={blog.title} className="w-full h-80 object-cover mt-4 rounded-lg border" />
            <p className="text-lg mt-4">{blog.description}</p>
            <div className="mt-6">
            {
                blog.sub_images && blog.sub_images.length > 0 && (
                    <div className="flex gap-4 justify-center items-center  pb-10">
                        {
                            blog.sub_images.map((image, index) => (
                                <img key={index} src={image} alt={`Sub-image ${index}`} className="w-40 h-40 object-cover rounded-lg border" />
                            ))
                        }
                    </div>
                )
            }
            </div>
            <div className='md:p-10  md:text-center space-y-10'>
                {blog.long_description}
            </div>
        </div>
    </>

  );
};

export default BlogDetail;
