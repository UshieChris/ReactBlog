import Diction from './Diction';
import '../App.css';
import './NavBar.css';




import Navbar from './NavBar';
const blogs = [
    {title : "The Importance of Teamwork", d_text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dignissim facilisis sit vestibulum, tempus nam orci. Massa ultrices eget sit ultrices eget turpis eget. Nibh est tellus elementum dignissim nisl. Tincidunt sodales quam vestibulum tincidunt morbi. Lacinia nunc imperdiet mauris, placerat nisl, eu sit volutpat at. ", date : new Date(2021, 4, 1)},
    {title : "The Importance of Teamwork", d_text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dignissim facilisis sit vestibulum, tempus nam orci. Massa ultrices eget sit ultrices eget turpis eget. Nibh est tellus elementum dignissim nisl. Tincidunt sodales quam vestibulum tincidunt morbi. Lacinia nunc imperdiet mauris, placerat nisl, eu sit volutpat at. ", date : new Date(2021, 4, 1)},

    {title : "The Importance of Teamwork", d_text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dignissim facilisis sit vestibulum, tempus nam orci. Massa ultrices eget sit ultrices eget turpis eget. Nibh est tellus elementum dignissim nisl. Tincidunt sodales quam vestibulum tincidunt morbi. Lacinia nunc imperdiet mauris, placerat nisl, eu sit volutpat at. ", date : new Date(2021, 4, 1)},

    {title : "The Importance of Teamwork", d_text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dignissim facilisis sit vestibulum, tempus nam orci. Massa ultrices eget sit ultrices eget turpis eget. Nibh est tellus elementum dignissim nisl. Tincidunt sodales quam vestibulum tincidunt morbi. Lacinia nunc imperdiet mauris, placerat nisl, eu sit volutpat at. ", date : new Date(2021, 4, 1)},
  ];

function Homepage(){
  

    return (
      <div className="navv">
         
       
        {/* <div className="App-header">
          <h1>
            <span className='Aphead'>The </span>
            <span className="blogtittle">Blog</span>
          </h1>
        </div>  */}
        <body>
          <Diction items = {blogs} />   
        </body>

        <div className="mfCin" onClick={Addblog}> <i className="fa fa-plus Cicon" aria-hidden="true"></i>
        </div>
      </div>

    
 )
}
const Addblog = () => {
  alert("Hey you what's poppin");
};


export default Homepage;