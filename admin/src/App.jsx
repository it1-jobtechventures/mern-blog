import './App.css'
import AddBlog from './components/AddBlog';
import Login from './components/Login'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar';
import AllBlog from './components/AllBlog';

function App() {
    const url = 'http://localhost:4000'

  return (
    <>
    <ToastContainer/>
    <div className="flex">
        <Sidebar className="w-1/4 min-h-screen bg-gray-100 p-4" />
        <div className="flex-1 p-6 pt-24 ml-52">
          <Routes>
            <Route path="/" element={<AddBlog url={url} />} />
            <Route path="/login" element={<Login url={url} />} />
            <Route path="/allBlog" element={<AllBlog url={url} />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
