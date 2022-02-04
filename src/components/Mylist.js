import './Mylist.css'

function MyList(props){
    const month = props.date.toLocaleString('en-US', {month:'long'});
    const day = props.date.toLocaleString('en-US', {day:'2-digit'});
    const year = props.date.getFullYear();

    return (
        
    
        <div className="gen">
            <div className = "mylogs">
                <div className='date'><p>{month} {day}, {year}</p></div><br/>
           
                <div className="title"><h2>{props.title}</h2></div><br/>
    
                <div className="text"><p>{props.d_text}</p></div>
            </div>
            
        
        </div>
    
    )

}
export default MyList;