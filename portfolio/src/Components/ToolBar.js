import React, {useState} from 'react';
import './ToolBar.css';
import logo from '../img/logo.png';
import CustomBtn from './CustomBtn';
import {Link} from 'react-router-dom';

function ToolBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className="navbar">
                <div className="navebar-container">
                    <Link to="/" className="navbar-logo">
                        {/* <img src ={logo}/> */}
                        Louis Brochard
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <p> {click ? 'x' : '='} </p>
                    </div>
                    
                    <ul className={ click ? 'nav-menue active' : 'nav-menue'}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                All Articles
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/cv" className="nav-links" onClick={closeMobileMenu}>
                                CV
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default ToolBar
