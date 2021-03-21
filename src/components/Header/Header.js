import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import {UserContext} from '../../App'
import logo from "../../images/trip trap.png"

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        <nav className="nav">
            <ul>
                <li>
                    <img className="logo" src={logo} alt="" />
                </li>
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
                <li>
                    {
                        loggedInUser ? loggedInUser.name || loggedInUser.email
                        : <li></li>
                    }
                    
                </li>
                <li>
                <Link className="btn btn-primary" to="/login">Login</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Header;