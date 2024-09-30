import React from 'react';
  // Importing the React Icon
import '../Css/content.css';
  // Importing the updated CSS

const SneakerCard = () => {
  return (
    <div className="sneaker-card">

    <div className='content-1'>
    <div className="logo1"><h1>02°</h1></div>
    <div className='inner-2'>
        <h1>01</h1>
        <div className='inner_2_content_1'>
            <div>
            <p>Hello i can also be some content but i am a paragraph but all i wanted was to be a heading without causing any problems.</p>
            <p>I am also some content edit me as you want </p>
            <p>Hello! I am syed Faizan Haider! I am a Software Engineer</p>
            <p>I am available for react projects!</p>
            </div>
            <div className='login_inner_2'>
                <button>Login</button>
            </div>
        </div>
    </div>
    </div>

    <div className='content-2'>
    <div className="sneaker-content-card">
      
        <div className='sneaker-image'>

     
          <h3>NIKE</h3>
          <p>Sneakers</p>
        
        </div>

          <div className="refresh-control">
            <div className="refresh-btn">
                <p>Refresh</p>
                </div>
                <p className="mode">Manual</p>
        
          </div>
        
        
    </div>

    <div className='sneaker-show'>
    <div className="logo1"><h1>AIR</h1></div>
    <div className='overlay'>   NIKE AIR 300$   </div>
    </div>

    </div>

    
    </div>
  );
};

export default SneakerCard;
