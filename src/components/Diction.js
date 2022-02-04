
import MyList from './Mylist';
import './Diction.css';
import '../App.css';
import './NavBar.css';

function Diction(props){
    

    return (
        <div>
        <div className="App-header">
          <h1>
            <span className='Aphead'>The </span>
            <span className="blogtittle">Blog</span>
          </h1>
        </div>
        <div className='expenses'>
            {props.items.map(myspense =><MyList
            title = {myspense.title}
            d_text = {myspense.d_text}
            date = {myspense.date} />)}
        </div>
        
       </div>
    )
}
export default Diction;