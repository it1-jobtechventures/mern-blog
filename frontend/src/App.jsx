import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog';
import BlogDetail from './components/BlogDetail'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Contact from './components/Contact';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MiddlePage from './pages/MiddlePage';
import Logo from './components/Logo';
import About from './components/About';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  const url = import.meta.env.VITE_BACKEND_URL;

  const location = useLocation();

  // Show MiddlePage only on the root route
  const isHomePage = location.pathname === '/';

  return (
    <>
      <ToastContainer />
      <Navbar />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Header url={url} />} />
        <Route path='/about' element={<About url={url}/>}/>
        <Route path="/blog" element={<Blog url={url} />} />
        <Route path="/blog/:id" element={<BlogDetail url={url} />} />
        <Route path="/gallery" element={<Gallery url={url} />} />
        <Route path="/contact" element={<Contact url={url} />} />
      </Routes>
      <Logo/>
      {isHomePage && <MiddlePage url={url}/>}
      
      <Footer url={url} />
      <ScrollToTopButton/>
    </>
  );
}

export default App;
