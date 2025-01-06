import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const AddCategory = ({ url }) => {
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  const onSubmitCategory = async (e) => {
    e.preventDefault();

    // Validate input
    if (!category.trim()) {
      toast.error('Category name cannot be empty.');
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post(`${url}/api/category/add`, { name: category.trim() });
      if (res.data.success) {
        const newCategory = res.data.data;
        setCategories((prevCategories) => [...prevCategories, newCategory]);
        setCategory('');
        toast.success('Category added successfully.');
      } else {
        toast.error('Failed to add category.');
      }
    } catch (error) {
      console.error('Error:', error.message);
      toast.error('Error adding category.');
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${url}/api/category/allCategories`);
      if (response.data.success) {
        setCategories(response.data.data);
      } else {
        toast.error('Failed to fetch categories.');
      }
    } catch (error) {
      toast.error('Error fetching categories.');
    }
  };

  const removeCategories = async (categoryId) => {
    try {
      const res = await axios.post(`${url}/api/category/remove`, { id: categoryId });
      if (res.data.success) {
        setCategories((prevCategories) => prevCategories.filter((category) => category._id !== categoryId)); // Remove category from state
        toast.success('Category removed successfully.');
      } else {
        toast.error('Error removing category.');
      }
    } catch (error) {
      toast.error('An error occurred while removing the category.');
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
        <div>
            <form onSubmit={onSubmitCategory}>
                <div className="mb-4">
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                        Category
                    </label>
                    <input onChange={(e) => setCategory(e.target.value)} value={category} type="text" name="category" placeholder="Type here" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"/>
                </div>
                <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700 transition duration-200">
                    {loading ? (
                        <div className="flex justify-center items-center">
                            <div className="w-6 h-6 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
                        </div>
                    ) : (
                        'Add Category'
                    )}
                </button>
            </form>
        </div>
        <div>
            {categories && categories.length > 0 ? (
                <div className="w-80 mt-10">
                    <h4 className="text-center font-medium">Categories</h4>
                    {categories.map((category) => (
                        <div key={category._id} className="flex justify-around p-3 items-center shadow-lg shadow-orange-300 mt-5 rounded-lg">
                            <p>{category.name}</p>
                            <button onClick={() => removeCategories(category._id)} className="border bg-orange-300 rounded-md p-3">
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No categories available.</p>
            )}
        </div>
    </>
  );
};

export default AddCategory;
