import React from 'react';
import './Welcome.css';

function Welcome() {
  return (
  <div className='welcome_main_container'>
     
      <div className='welcome_container'>
        <div className='welcome_text_container'>
          <div className='welcome_header'>
            <span >Welcome to </span><br/>
            <span>SENsational Life</span>
          </div>
          <div className='welcome_text'>            
              <span><input  type="checkbox"  checked  className='welcome_input'   />Supporting Families</span><br />
              <span><input type="checkbox" checked className='welcome_input' />Empowering Neuradiverse Families</span>
           </div>
          <button className='welcome_button'>Click here to Register</button>
        </div>
        <div className='welcome_img_container'>
            <div className='welcome_img_color'>
            <div className='welcome_img'><img src="https://i.postimg.cc/kgnHYHV3/autistic-little-girl-close-up-2021-09-24-04-06-23-utc.jpg" alt='img'  /></div>
            </div>
        </div>        

      </div>  
  
  </div>
  );
};

export default Welcome;
