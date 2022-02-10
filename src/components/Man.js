import Navbar from "./NavBar";
import './Man.css';
import Entry from '../img/Entry.png';
import Footer from "./Footer";
import Group from "../img/Group.png";


function Man(props){
    
    return (
        <div className = "myh">
            <Navbar />
            <div className = "mytitle">
            <h1>Share your experiences</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue ipsum nunc feugiat elementum ipsum convallis commodo. Et mattis ultricies fringilla nulla congue ultrices ultrices vitae orci.</p>
            </div>
            <h2> Top Stories </h2>
            <div className = "imgg">
                <img src = {Entry} alt ="Entry" />
                 
            </div>
           
            <div className = "right">
                
                <svg width="162" height="162" viewBox="0 0 162 162" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M60.4763 120.953L100.794 80.6351L60.4763 40.3176" stroke="black" stroke-opacity="0.42" stroke-width="13.4392" stroke-linecap="round" stroke-linejoin="round"/>

                </svg>
                


            </div>
            <div className = "left">
            <svg width="55" height="95" viewBox="0 0 55 95" fill="none"     xmlns="http://www.w3.org/2000/svg">
                    <path d="M47.7939 87.9526L7.47632 47.6351L47.7939 7.31755" stroke="black" stroke-opacity="0.42" stroke-width="13.4392" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div className = "mydot">
                <img src = {Group} alt = "Group" />
            </div>
            <Footer />

        </div>
    )

}


export default Man;