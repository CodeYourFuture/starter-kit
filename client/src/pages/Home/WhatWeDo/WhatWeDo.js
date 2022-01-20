import React from 'react';
import './WhatWeDo.css'

function WhatWeDo() {
  return(
    <div className='whatwedo_main_container'>
     
      <div className='whatwedo_container'>
          <div className='whatwedo_text_container'>
           
            <div className='whatwedo_header'>
              <span >What We Do? </span>          
            </div>
            <div className='whatwedo_text'>            
              <span> We are provide advice, signposting, tips and <br />
               products to help support parents of autistic <br />children on their autism journey
              within the <br />neurodiverse family.</span>                
            </div>
            <button className='whatwedo_button'>Read More</button> 
          </div>
          
          <div className='whatwedo_img_container'>
              <div className='whatwedo_img_color'>
              <div className='whatwedo_img'><img src="https://i.postimg.cc/52Nj0XdD/cute-girl-with-down-syndrome-in-mothers-arms-2021-09-24-04-06-20-utc.jpg" alt='img'  /></div>
              </div> 
          </div>        

      </div>  

</div>
    );
}

export default WhatWeDo;
