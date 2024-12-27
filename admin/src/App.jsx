// import './App.css'
// import AddBlog from './components/AddBlog';
// import Login from './components/Login'
// import { ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css';
// import { Route, Routes } from 'react-router-dom'
// import Sidebar from './components/Sidebar';
// import AllBlog from './components/AllBlog';
// import UpdateLink from './components/UpdateLink';
// import ListAllUpdateLink from './components/ListAllUpdateLink';
// import AddBanner from './components/AddBanner';
// import AllBanner from './components/AllBanner';
// import AddGallery from './components/AddGallery';
// import DisplayGallery from './components/DisplayGallery';
// import AllEmail from './components/AllEmail';

// function App() {
//     // const url = 'https://mern-blog-backend-9oua.onrender.com'
//     const url = 'http://localhost:4000'

//   return (
//     <>
//       <ToastContainer />
//       <div className="flex">
//         <Sidebar />
//         <div className="flex-1 p-6 pt-24 ml-0 lg:ml-52">
//           <Routes>
//             <Route path="/" element={<AddBlog url={url} />} />
//             <Route path="/login" element={<Login url={url} />} />
//             <Route path="/allBlog" element={<AllBlog url={url} />} />
//             <Route path="/updateLink" element={<UpdateLink url={url} />} />
//             <Route path="/allUpdateLink" element={<ListAllUpdateLink url={url} />} />
//             <Route path="/addBanner" element={<AddBanner url={url} />} />
//             <Route path="/allBanner" element={<AllBanner url={url} />} />
//             <Route path="/addGallery" element={<AddGallery url={url} />} />
//             <Route path="/allGallery" element={<DisplayGallery url={url} />} />
//             <Route path="/emails" element={<AllEmail url={url} />} />
//           </Routes>
//         </div>
//       </div>
//     </>
//   )
// }

// export default App


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

function App() {
  // const url = 'http://localhost:4000';
  const url = 'https://mern-blog-backend-9oua.onrender.com'
  // ProtectedRoute component
  function ProtectedRoute({ element, ...rest }) {
    const isAuthenticated = localStorage.getItem('admin_blog'); // Check if user is logged in

    // If authenticated, render the requested component, else redirect to login
    return isAuthenticated ? element : <Navigate to="/login" />;
  }

  return (
    <>
      <ToastContainer />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6 pt-24 ml-0 lg:ml-52">
          <Routes>
            <Route path="/login" element={<Login url={url} />} />
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
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;

