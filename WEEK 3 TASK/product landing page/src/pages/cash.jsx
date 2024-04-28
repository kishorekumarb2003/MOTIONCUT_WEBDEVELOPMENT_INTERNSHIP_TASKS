
import image15 from '../images/preloader4.gif'
import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom'
export const Cash = () => {


  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (


    <>
    <div>
    {loading ? (
             <div class="preloader3">
     <img style={{width:'300px'}}src={image15} alt="" />
             <h2>Processing</h2>

       </div>
     ) :(
    <div className='options' >
       <div className='upibody'>
      <div className='upiBox'>
          <div className='upiBorder1'>
              <form>
                <div className='upiTitle'>
                <label><b>Your Details</b> <i class="fa-solid fa-greater-than"></i><b> Payment</b></label>
                </div>
                <div className='success_div'>
                <i class="fa-solid fa-circle-check"></i>
                <h3>Order Placed</h3>
          </div>
                
                <b><h3 style={{marginTop:'15%'}}>Thank you for ordering !</h3></b>
      <h3 style={{color:'blue'}}> Order Id : 542-672-454-327</h3>
      <h3>Kindly have change !</h3>
           
                <div className='upiPay'>
                  <Link to='/orderstatus'><b>Track Your Order</b></Link>
                </div>
                <div style={{color:'rgb(0, 183, 255)',paddingTop:'15px'}}>
                </div>
              </form>
          </div>
        </div>
    </div>
    
</div>
 )}
 </div>
</>

)
}