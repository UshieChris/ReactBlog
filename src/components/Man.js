
import './Man.css';
import Entry from '../img/Entry.png';

import Group from "../img/Group.png";
import right from "../img/right.png";
import left from "../img/left.png";



function Man(){
    
    return (
        <div className = "myh">
            
            <div className = "mytitle">
            <h1>Share your experiences</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue ipsum nunc feugiat elementum ipsum convallis commodo. Et mattis ultricies fringilla nulla congue ultrices ultrices vitae orci.</p>
            </div>
            <h2> Top Stories </h2>

            <div className = "imgg">
                <img src = {Entry} alt ="Entry" />
                 
            </div>
            <div className = "right">
                  
                  <img src ={right} alt = "right" />
                  
              </div>
            

            <div className = "left">
                <img src= {left} alt ="left" />
            </div>

            <div className = "mydot">
                <img src = {Group} alt = "Group" />
            </div>
            
            

        </div>
    )

}


export default Man;