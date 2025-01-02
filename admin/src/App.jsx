import './App.css';
import AddBlog from './components/AddBlog';
import Login from './components/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import AllBlog from './components/AllBlog';
import UpdateLink from './components/UpdateLink';
import ListAllUpdateLink from './components/ListAllUpdateLink';
import AddBanner from './components/AddBanner';
import AllBanner from './components/AllBanner';
import AddGallery from './components/AddGallery';
import DisplayGallery from './components/DisplayGallery';
import AllEmail from './components/AllEmail';
import AddUser from './components/AddUser';
import AllUser from './components/AllUser';
import AddCategory from './components/AddCategory';
import { useContext } from 'react';
import { AuthContext } from './context/authContext';

function App() {
  // const url = 'http://localhost:4000';
  const url = 'https://mern-blog-backend-9oua.onrender.com'
  const { isAuthenticated } = useContext(AuthContext);

  const ProtectedRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  const RedirectAuthenticated = ({ element }) => {
    return isAuthenticated ? <Navigate to="/" /> : element;
  };

  return (
    <>
      <ToastContainer />
      <div className="flex">
      {isAuthenticated && <Sidebar />}
      <div className={`flex-1 p-6 pt-24 ${isAuthenticated ? 'ml-0 lg:ml-52' : ''}`}>
          <Routes>
          <Route
              path="/login"
              element={<RedirectAuthenticated element={<Login  url={url}/>} />}
            />
            {/* Protected Routes */}
            <Route path="/" element={<ProtectedRoute element={<AddBlog url={url} />} />} />
            <Route path="/allBlog" element={<ProtectedRoute element={<AllBlog url={url} />} />} />
            <Route path="/updateLink" element={<ProtectedRoute element={<UpdateLink url={url} />} />} />
            <Route path="/allUpdateLink" element={<ProtectedRoute element={<ListAllUpdateLink url={url} />} />} />
            <Route path="/addBanner" element={<ProtectedRoute element={<AddBanner url={url} />} />} />
            <Route path="/allBanner" element={<ProtectedRoute element={<AllBanner url={url} />} />} />
            <Route path="/addGallery" element={<ProtectedRoute element={<AddGallery url={url} />} />} />
            <Route path="/allGallery" element={<ProtectedRoute element={<DisplayGallery url={url} />} />} />
            <Route path="/emails" element={<ProtectedRoute element={<AllEmail url={url} />} />} />
            <Route path="/addUser" element={<ProtectedRoute element={<AddUser url={url} />} />} />
            <Route path="/allUser" element={<ProtectedRoute element={<AllUser url={url} />} />} />
            <Route path="/allCategory" element={<ProtectedRoute element={<AddCategory url={url} />} />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;

