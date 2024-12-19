import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog';
import BlogDetail from './components/BlogDetail'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Logo from './components/Logo';
import UpdatedLink from './components/UpdatedLink';
import Banner from './components/Banner';
import Contact from './components/Contact';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const url ="https://mern-blog-backend-9oua.onrender.com"

  return (
    <>
    <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Header url={url}/>}/>
        <Route path="/blog" element={<Blog url={url} />} />
        <Route path="/blog/:id" element={<BlogDetail url={url} />} />
        <Route path='/gallery' element={<Gallery url={url}/>}/>
        <Route path='/contact' element={<Contact url={url}/>}/>
      </Routes>
      <UpdatedLink url={url}/>
      <Banner url={url}/>
      <Logo url={url}/>
      <Footer url={url}/>
    </>
  );
}

export default App;
