import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/navbar/Navbar';
import Footer from './component/footer/Footer';
import HomeWrapper from './component/home/HomeWrapper';
import About from './component/pages/About';
import Blog from './component/pages/Blog';
import Contact from './component/pages/Contact';
const Approuter=()=>{
    return(
        <>
        <div>
         <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<HomeWrapper/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/blog' element={<Blog/>}/>
        </Routes>
        <Footer />
      </Router>
           </div>
        </>
    )
}

export default Approuter;