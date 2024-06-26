import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar(){

    return(
    <nav className="navbar">
    <div className="logo">MyLogo</div>
    <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/GetBooks">Get Books</Link></li>
        <li><Link to="/AddBook">Add Books</Link></li>
        <li><a href="contact">Contact</a></li>
    </ul>
    </nav>
    )
}

export default Navbar;