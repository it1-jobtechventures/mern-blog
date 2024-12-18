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
  return (
    <>
    <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Header/>}/>
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path='/gallary' element={<Gallery/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <UpdatedLink/>
      <Banner/>
      <Logo/>
      <Footer/>
    </>
  );
}

export default App;
