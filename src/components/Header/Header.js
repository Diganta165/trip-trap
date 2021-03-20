import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import {UserContext} from '../../App'

const Header = () => {
    const name = useContext(UserContext);
    console.log(name)
    return (
        <nav className="nav">
            <ul>
                {/* <li>
                    <img className="logo" src={} alt="" />
                </li> */}
                <li>
                    <Link to="/home">Home</Link>
                    
                </li>
                <li>
                    <Link to="/destination">Destination</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>{name[0].name}</li>
                <li>
                    <Link className="btn btn-primary" to="/login">Login</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Header;