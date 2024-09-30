import React from 'react';
import '../Css/navbar.css'; // Importing the CSS file for the Navbar
import { FaGlobe, FaRegistered } from 'react-icons/fa'; // React Icons for icons

const   Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo">02°</div>
      <div className="nav-items">
        <div className="nav-item">Moonish</div>
        <div className="nav-item">New In</div>
        <div className="nav-item">Hot Drops</div>
        <div className="nav-item">Collection</div>
      </div>
      <div className="icons">
        <FaGlobe size={20} />
        <FaRegistered size={20} />
      </div>
      <div className="right-side">
        <div>02 SHOP NEW COLLECTION</div>
        <div className="small-text">explore now</div>
      </div>
    </div>
  );
};

export default Navbar;
