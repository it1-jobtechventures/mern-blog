// import React, { useState, useRef, useEffect } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import JoditEditor from 'jodit-react';

// const AddBlog = ({ url }) => {
//     const [image, setImage] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [data, setData] = useState({
//         title: '',
//         headline: '',
//         keyword: '',
//         category: '',
//     });
//     const [content, setContent] = useState('');
//     const editorRef = useRef(null);
//     const [categories, setCategories] = useState([]);

//     const onChangeHandler = (e) => {
//         const { name, value } = e.target;
//         setData((prev) => ({ ...prev, [name]: value }));
//     };

//     const handleMainImageChange = (e) => {
//         setImage(e.target.files[0]);
//     };

//     const onSubmitHandler = async (e) => {
//         e.preventDefault();

//         const formData = new FormData();
//         formData.append('title', data.title);
//         formData.append('headline', data.headline);
//         formData.append('keyword', data.keyword);
        // if (data.category) { // Only add category if it's selected
        //     formData.append('category', data.category);
        // }
//         formData.append('content', content);
//         formData.append('image', image);

//         try {
//             setLoading(true); 
//             const response = await axios.post(`${url}/api/blog/add`, formData);
//             if (response.data.success) {
//                 toast.success(response.data.message);
//                 setData({ title: '', headline: '', keyword: '', category: '' });
//                 setContent('');
//                 setImage(null);
//             } else {
//                 toast.error(response.data.message);
//             }
//         } catch (error) {
//             toast.error('Error adding blog');
//         }finally{
//             setLoading(false)
//         }
//     };

//     // Jodit Editor configuration
//     const editorConfig = {
//         readonly: false,
//         height: 400,
//         uploader: {
//             insertImageAsBase64URI: true,
//         },
//         toolbarSticky: false,
//         buttons: [
//             'bold',
//             'italic',
//             'underline',
//             'link',
//             'image',
//             'align',
//             'undo',
//             'redo',
//             'fontsize',
//             'font',
//         ],
//     };

//     const fetchCategories = async () => {
//         try {
//             const response = await axios.get(`${url}/api/category/allCategories`);
//             if (response.data.success) {
//                 setCategories(response.data.data);
//             } else {
//                 toast.error("Failed to fetch categories");
//             }
//         } catch (error) {
//             toast.error("Error fetching categories");
//         }
//     };

//     useEffect(() => {
//         fetchCategories()
//     },[])

//     return (
//         <div className="max-w-2xl mx-auto mt-10 z-0 p-5 bg-white shadow-lg rounded-lg sm:max-w-full md:max-w-3xl lg:max-w-4xl ">
//             <h1 className="text-2xl font-bold mb-5">Add Blog</h1>
//             <form onSubmit={onSubmitHandler}>
//                 <div className="mb-4">
//                     <label htmlFor="image" className="block text-sm font-medium text-gray-700">
//                         Upload Main Image
//                     </label>
//                     <label htmlFor="image" className="block cursor-pointer">
//                         <img src={image ? URL.createObjectURL(image) : ''} alt="Main Upload" className="h-20 w-20 mb-2 border border-gray-300 rounded object-cover"/>
//                     </label>
//                     <input onChange={handleMainImageChange} type="file" id="image" hidden required />
//                 </div>
//                 <div className="mb-4">
//                     <label htmlFor="title" className="block text-sm font-medium text-gray-700">
//                         Blog Title
//                     </label>
//                     <input onChange={onChangeHandler} value={data.title} type="text" name="title" placeholder="Type here" className="block w-full border p-2" required />
//                 </div>
//                 <div className="mb-4">
//                     <label htmlFor="headline" className="block text-sm font-medium text-gray-700">
//                         Blog Headline
//                     </label>
//                     <input onChange={onChangeHandler} value={data.headline} type="text" name="headline" placeholder="Type here" className="block w-full border p-2" />
//                 </div>
//                 <div className="mb-4">
//                     <label htmlFor="keyword" className="block text-sm font-medium text-gray-700">
//                         Blog Keyword
//                     </label>
//                     <input onChange={onChangeHandler} value={data.keyword} type="text" name="keyword" placeholder="Type here" className="block w-full border p-2" required />
//                 </div>
//                 <div className="mb-4">
//                     <label className="block text-sm font-medium text-gray-700 z-0">
//                         Blog Content
//                     </label>
//                     <JoditEditor ref={editorRef} value={content} config={editorConfig} onBlur={(newContent) => setContent(newContent)}/>
//                 </div>
//                 <div className="mb-4">
//                     <label htmlFor="category" className="block text-sm font-medium text-gray-700">
//                         Category
//                     </label>
//                     <select name="category" onChange={onChangeHandler} value={data.category} className="block w-full border p-2">
//                         <option value="">Select Category</option>
//                         {categories.map((category) => (
//                             <option key={category._id} value={category._id}>
//                                 {category.name}
//                             </option>
//                         ))}
//                     </select>
//                 </div>
//                 <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white py-2 rounded sm:px-6 lg:px-8">
//                     {
//                         loading ? (
                            // <div className="flex justify-center items-center">
                            //     <div className="w-6 h-6 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
                            // </div>
//                         ):(
//                             "Add Blog"
//                         )
//                     }
//                 </button>
//             </form>
//         </div>
//     );
// };

import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import JoditEditor from 'jodit-react';
import { useLocation, useNavigate } from 'react-router-dom';

const AddBlog = ({ url }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const blogToEdit = location.state;

    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        title: blogToEdit?.title || '',
        headline: blogToEdit?.headline || '',
        keyword: blogToEdit?.keyword?.join(",") || '',
        category: blogToEdit?.category || '',
    });
    const [content, setContent] = useState(blogToEdit?.content || '');
    const editorRef = useRef(null);
    const [categories, setCategories] = useState([]);

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({ ...prev, [name]: value }));
    };

    const handleMainImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('headline', data.headline);
        formData.append('keyword', data.keyword);
        if (data.category) {
            formData.append('category', data.category);
        }
        formData.append('content', content);
        if (image) {
            formData.append('image', image);
        }
        try {
            setLoading(true);
            const response = blogToEdit
                ? await axios.put(`${url}/api/blog/update/${blogToEdit._id}`, formData)
                : await axios.post(`${url}/api/blog/add`, formData);
            if (response.data.success) {
                toast.success(response.data.message);
                navigate('/allblog');
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error('Error saving blog');
        } finally {
            setLoading(false);
        }
    };

    const onCancelHandler = () => {
        if (blogToEdit) {
            navigate('/allblog');
        } else {
            setData({ title: '', headline: '', keyword: '', category: '' });
            setContent('');
            setImage(null);
        }
    };

    const fetchCategories = async () => {
        try {
            const response = await axios.get(`${url}/api/category/allCategories`);
            if (response.data.success) {
                setCategories(response.data.data);
            } else {
                toast.error("Failed to fetch categories");
            }
        } catch (error) {
            toast.error("Error fetching categories");
        }
    };

    useEffect(() => {
        fetchCategories();
    }, [url]);

    return (
        <div className="max-w-2xl mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold mb-5">{blogToEdit ? 'Update Blog' : 'Add Blog'}</h1>
            <form onSubmit={onSubmitHandler}>
                <div className="mb-4">
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                        Upload Main Image
                    </label>
                    <label htmlFor="image" className="block cursor-pointer">
                        <img src={image? URL.createObjectURL(image): blogToEdit?.image || ''} alt="Main Upload" className="h-20 w-20 mb-2 border border-gray-300 rounded object-cover"/>
                    </label>
                    <input onChange={handleMainImageChange} type="file" id="image" hidden />
                </div>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                        Blog Title
                    </label>
                    <input onChange={onChangeHandler} value={data.title} type="text" name="title" placeholder="Type here" className="block w-full border p-2" required/>
                </div>
                <div className="mb-4">
                    <label htmlFor="headline" className="block text-sm font-medium text-gray-700">
                        Blog Headline
                    </label>
                    <input onChange={onChangeHandler} value={data.headline} type="text" name="headline" placeholder="Type here" className="block w-full border p-2"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="keyword" className="block text-sm font-medium text-gray-700">
                        Blog Keyword
                    </label>
                    <input onChange={onChangeHandler} value={data.keyword} type="text" name="keyword" placeholder="Type here" className="block w-full border p-2" required/>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Blog Content</label>
                    <JoditEditor ref={editorRef} value={content} config={{ readonly: false, height: 400 }} onBlur={(newContent) => setContent(newContent)}/>
                </div>
                <div className="mb-4">
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                        Category
                    </label>
                    <select name="category" onChange={onChangeHandler} value={data.category} className="block w-full border p-2">
                        <option value="">Select Category</option>
                        {categories.map((category) => (
                            <option key={category._id} value={category._id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex gap-4">
                    <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white py-2 rounded">
                        {loading ?  
                            <div className="flex justify-center items-center">
                                <div className="w-6 h-6 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
                            </div> 
                        : blogToEdit ? 'Update Blog' : 'Add Blog'}
                    </button>
                    <button type="button" onClick={onCancelHandler} className="w-full bg-gray-500 text-white py-2 rounded">
                        Cancel 
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddBlog;
