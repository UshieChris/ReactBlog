import whitel from "../img/whitel.png";
import facebook from "../img/facebook.png";
import twitter from "../img/twitter.png";
import instagram from "../img/instagram.png";
import './Footer.css';



const Footer = () => {
    return ( <div className = "homeg">

            <div className = "allup">
                <img src= {whitel} alt = "whitel" />    
                <p>Product of Alluvium Labs</p>
                
            </div>
            <div className = "sociom">
                <p>Get in touch</p>
                <div className = "socio">
                    <img src = {facebook} alt = "facebook" />
                    <img src = {twitter} alt = "twitter" />
                    <img src = {instagram} alt = "instagram" />
                </div>

                
            </div>
            <div className ="contact">
                <p> Contact us</p>
                <p>10, Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <p>+2347012113233</p>
                <p>+2347012113233</p>
                
            </div>
    </div>
     );
}
 
export default Footer;
