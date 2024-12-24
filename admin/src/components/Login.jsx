import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = ({ url }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            const response = await axios.post(`${url}/api/admin/adminLogin`, { email, password });
            if (response.data.success) {
                localStorage.setItem('admin_blog', response.data.token);
                toast.success("Login successful");
                navigate('/');
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error('Login failed. Please check your credentials.');
        }finally{
            setLoading(false);
        }
    };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8 bg-white p-10 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-center text-gray-800">Admin Login</h2>
            <form onSubmit={handleLogin} className="space-y-6">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input id="email" type="email" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input id="password" type="password" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                </div>
                <div>
                    <button type="submit" disabled={loading} className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        {
                            loading ? (
                                <div className="flex justify-center items-center">
                                    <div className="w-6 h-6 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
                                </div>
                            ):(
                                "Login"
                            )
                        }
                    </button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default Login;
