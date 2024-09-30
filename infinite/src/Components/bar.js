import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import '../Css/bar.css'
import haider from '../Css/Backgrounds/haiderrr.jpg'
const Bar = () => {
  return (
    <div className="cosmic-set-card">
      <div className="image-container">
        <img 
          src={haider} // replace with your actual image path
          alt="cosmic-set" 
          className="product-image" 
        />
        <div className="search-icon">
          <FaSearch />
        </div>
      </div>

      <div className="text-container">
        <p className="title">NEW • COSMI©</p>
        <p className="subtitle">SET 23</p>
        <p className="details">HOT DROP BY OE STUDIO 2024</p>
        <p className="details">MODERN COLLECTION</p>
      </div>

      <div className='content-mid'>
        <p>syedfaizanhaider.fh@gmail.com</p>
        <p>+923125395156</p>
        

      </div>

      <div className="arrow-icon-container">
        <FaArrowRight className="arrow-icon" />
      </div>
    </div>
  )
}

export default Bar
