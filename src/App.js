import { useState } from 'react';
import Diction from './components/Diction';

import Man from './components/Man';
import './App.css';
import {Link} from 'react-router-dom';
import Mytest from './components/Mytest'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage.js';
import Contact from './components/Contact';




function App()
 {


  return (
    <Router>
      
      <Routes>
          <Route exact path = "/" element = {<Homepage />} />
          <Route path = "/list" element = {<Man />} />
          <Route path = "/contact" element = {<Contact />} />
      </Routes>
        
    </Router>
  );
  }


export default App;
