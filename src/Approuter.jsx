import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/navbar/Navbar';
import Footer from './component/footer/Footer';
import HomeWrapper from './component/home/HomeWrapper';
import About from './component/pages/About';
import Blog from './component/pages/Blog';
import Contact from './component/pages/Contact';
import ScrollTop from './component/pages/ScrollTop';
import Testimonial from './component/services/Testimonial';
import PaitentInfo from './component/services/PaitentInfo';
const Approuter=()=>{
    return(
        <>
        <div>
         <Router>
        <Navbar />
        <ScrollTop/>
        <Routes>
        <Route path="/" element={<HomeWrapper/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/blog' element={<Blog/>}/>
         <Route path='/testimonial' element={<Testimonial/>}/>
        <Route path='/patientinfo' element={<PaitentInfo/>}/>
        </Routes>
        <Footer />
      </Router>
           </div>
        </>
    )
}

export default Approuter;