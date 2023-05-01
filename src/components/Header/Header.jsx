import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(result => { console.log('Logout Success') })
            .catch(error => console.error(error));
    }

    return (
        <nav className='header'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
                {user && <span className='text-white'>Welcome {user.email} <button onClick={handleLogout} className='btn'>Sign Out</button></span>}
            </div>
        </nav>
    );
};

export default Header;