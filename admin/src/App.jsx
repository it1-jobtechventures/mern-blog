import './App.css'
import AddBlog from './components/AddBlog';
import Login from './components/Login'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar';
import AllBlog from './components/AllBlog';
import UpdateLink from './components/UpdateLink';
import ListAllUpdateLink from './components/ListAllUpdateLink';
import AddBanner from './components/AddBanner';
import AllBanner from './components/AllBanner';
import AddGallery from './components/addGallery';
import DisplayGallery from './components/DisplayGallery';

function App() {
    const url = 'http://localhost:4000'

  return (
    <>
      <ToastContainer />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6 pt-24 ml-0 lg:ml-52"> {/* Adjusted margin for mobile */}
          <Routes>
            <Route path="/" element={<AddBlog url={url} />} />
            <Route path="/login" element={<Login url={url} />} />
            <Route path="/allBlog" element={<AllBlog url={url} />} />
            <Route path="/updateLink" element={<UpdateLink url={url} />} />
            <Route path="/allUpdateLink" element={<ListAllUpdateLink url={url} />} />
            <Route path="/addBanner" element={<AddBanner url={url} />} />
            <Route path="/allBanner" element={<AllBanner url={url} />} />
            <Route path="/addGallery" element={<AddGallery url={url} />} />
            <Route path="/allGallery" element={<DisplayGallery url={url} />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
