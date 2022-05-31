import React from 'react';
import './Navbar.css';

function Navbar() {
    return <header className="Navbar">
    <ul className="topnav">
        <li><a class="active" href="#LOGO">LOGO</a></li>
        <li class="right"><a href="#Home">Home</a></li>
        <li class="right"><a href="#Tasks">Tasks</a></li>
        <li class="right"><a href="#Logout">Logout</a></li>
    </ul>
    </header>;
  }
  
  export default Navbar;