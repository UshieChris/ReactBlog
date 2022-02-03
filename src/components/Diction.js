
import MyList from './Mylist';
import './Diction.css'

function Diction(props){

    return (
        <div className='expenses'>
            {props.items.map(myspense =><MyList
            title = {myspense.title}
            d_text = {myspense.d_text}
            date = {myspense.date} />)}
        </div>
    )
}
export default Diction;