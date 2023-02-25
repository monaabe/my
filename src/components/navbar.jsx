import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const NavBar = (props) => {
    return (           
        <nav className="navbar navbar-light bg-light navbar-expand-lg">
    <div className="container-fluid">
      <Link className="navbar-brand" to="wwww.facebook.com">Navbar</Link>
    </div>
    <span className='btn btn-primary '>{props.productscount}</span>

    
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active"  to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/cart">Cart</Link>
        </li>



        </ul>
        </div>
          
  </nav>);

}
 
export default NavBar;
