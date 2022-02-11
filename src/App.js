

import Man from './components/Man';
import './App.css';
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";


import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage.js';
import Contact from './components/Contact';





function App()
 {


  return (
    
      <div>
        <Navbar />
        <Routes>
          <Route path = "/" element = {<Man />} />
          
          <Route path = "/list" element = {<Homepage />}  />
          
          <Route path = "/contact" element = {<Contact />} />
        </Routes>
        <Footer />
      </div>
        
    
  );
  }


export default App;
