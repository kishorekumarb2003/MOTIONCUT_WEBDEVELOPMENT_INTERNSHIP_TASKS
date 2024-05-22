import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import logo from '../images/gpay.png'
import logo1 from '../images/paytm.png'

import logo5 from '../images/cash.png'
import image10 from '../images/preloader1.gif'

export const Home = () => {
   const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1800);
  }, []);
  return (
    <>
    <div>
    
    {loading ? (
      	    <div class="preloader1">
              <h2>Coming Soon</h2>
      <img style={{width:'300px'}}src={image10} alt="" />
        </div>
      ) :(
     <div>
      <div className='options1'>
      <h3 className='para'>How would you like to pay !.</h3>
          <div className='Button'>
            <button className='button1'><Link to='/u'><img src={logo} alt=''/></Link></button>
            <button className='button1'><Link to='/paytm'><img src={logo1} alt=''/></Link></button>
            <button className='button1'><Link to='/d'><img src={logo5} alt=''/></Link></button>
          </div>
         
      </div>
      </div>
      )}
      </div>
   </>
   );
}