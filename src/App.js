import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './index.css';
import About from './Pages/About';
import Service from './Pages/Service';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Navbar from './NavBar/Navbar';
import Footer from './Footer/Footer';
import {Routes,Route} from 'react-router-dom';

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/service" element={<Service/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/contact" element={<Contact/>}/>
      <Route path='*' element={<Home/>}/>
    </Routes>
    <Footer/>
    
    
    </>
  )
}

export default App;