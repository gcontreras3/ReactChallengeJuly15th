import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () =>{
    return (
        <div>
             <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/About">About</Link>
    </li>
    <li>
      <Link to="/Contact">Contact</Link>
    </li>
    <li>
      <Link to="/Blog">Blog</Link>
    </li>
        </div>
    )
}




export default Navbar;
