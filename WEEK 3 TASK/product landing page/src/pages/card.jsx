import React from 'react'
import '../styles/pay.css'
import { Link } from 'react-router-dom'

export const Card = () => {
  return (
    <div className='lingesh'>
    <div className='pot'>

    <div className='container10'>

        <form>
          <br/>
          <label>Card Number</label>&nbsp;&nbsp;&nbsp;
          <input type='password' placeholder='Enter your Card Number' maxLength={16}/>
          <br/>
          <br/>
          <label>CVV</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type='password' placeholder='123'maxLength={3}/>
          <br/>
          <br/>
          <label>Expiration Date</label>&nbsp;
          <input type='text' placeholder='MM' maxLength={2} style={{width:'40px'}}/>&nbsp;&nbsp;
          <input type='text' placeholder='YY'maxLength={2} style={{width:'40px'}}/>&nbsp;&nbsp;
          <br/>
          <br/>
          <br/>
          <button className='b10'><Link to='/p' style={{textDecoration:'none',color:'white'}}>Pay Now</Link></button>

        </form>
    </div>
    </div>
    </div>
   )
}