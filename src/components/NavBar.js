
import './NavBar.css';
import logo from '../img/logo.png'

const Navbar = () => {
    return (  
        <nav className="navbar">
            <div className="logo">
            <img src={logo}  alt = "hhher" />
            </div>
            
            <div className="link">
                <a href="/">HOME</a>
                
                <a className="active" href="/list">BLOG</a>

                <a href="/contact">CONTACT</a>
            </div>
        </nav>

    );
}
 
export default Navbar;