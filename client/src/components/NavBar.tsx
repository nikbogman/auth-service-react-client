import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import '../styles/NavBar.css';
import logo from '../logo.svg';

const NavBar = () => {
    const navigate = useNavigate();

    const navLinkStyles = {
        color: 'white',
        textDecoration: 'none',
        padding: 0,
        margin: 0
    }

    // async function logout() {
    //     const token = localStorage.getItem("access");
    //     const response = await (await fetch('http://localhost:5000/logout', {
    //         method: 'POST',
    //         headers: { 'Authorization': 'Bearer ' + token }
    //     })).json();
    //     alert(response.message);
    //     if (response.success === true) return navigate('/');
    // }

    return (
        <nav>
            <NavLink to="/" style={navLinkStyles}><img src={logo} style={{ height: "7.5vh" }} alt="logo" /></NavLink>
            <ul className="nav-link">
                <li>
                    <NavLink to="/login" style={navLinkStyles}>Login</NavLink>
                </li>
                <li>
                    <NavLink to="/register" style={navLinkStyles}>Register</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard" style={navLinkStyles}>Dashbord</NavLink>
                </li>
                {/* <li style={navLinkStyles} onClick={logout}>
                    Logout
                </li> */}
            </ul>
        </nav>
    )
}

export default NavBar;