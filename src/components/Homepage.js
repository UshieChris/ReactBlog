import Diction from './Diction';
import '../App.css';

import Navbar from './NavBar';
const Nw_mame = [
    {title : "john", d_text : "Welome home", date : new Date(2021, 4, 1)},
    {title : "Chris", d_text : "Alluvium is wonderful ", date : new Date(2021, 10, 23)},
    {title : "Alinco", d_text: "Our Boss s Awesome", date : new Date(2021, 11, 11)},
  ];

function Homepage(){

    return (<div>
        <div className="navv">
          <Navbar />
        </div>
        <header className="App-header">
          <h1><span className='Aphead'>The</span>Blog</h1>
        </header>
        
        <Diction items = {Nw_mame} />   
       
    </div>)
}

export default Homepage;