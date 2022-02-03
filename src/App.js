import { useState } from 'react';
import Diction from './components/Diction';
import Navbar from './components/NavBar';
import Man from './components/Man';
import './App.css';
import Mytest from './components/Mytest'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';



const Nw_mame = [
  {title : "john", d_text : "Welome home", date : new Date(2021, 4, 1)},
  {title : "Chris", d_text : "Alluvium is wonderful ", date : new Date(2021, 10, 23)},
  {title : "Alinco", d_text: "Our Boss s Awesome", date : new Date(2021, 11, 11)},
];

function App() {


  return (
    <Router>
      <div className="App">
        <div className="navv">
          <Navbar />
        </div>
       
        
        <header className="App-header">
          <h1><span className='Aphead'>THE</span>BLOG</h1>
        </header>
        <Switch>
          <Route exact path = "/">
            <Man />
          </Route>
          <Route path = "/list">
            <Diction items = {Nw_mame}  />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
