import '../styles/upipage.css';
import React from 'react'
import { Link } from 'react-router-dom'
import qr from '../images/qr.jpg'
export const Upi = () => {
  return (
    <div className='upibody'>
      <div className='upiBox'>
          <div className='upiBorder'>
              <form>
                <div className='upiTitle'>
                <label><b>Your Details</b> <i class="fa-solid fa-greater-than"></i><b> Payment</b></label>
                </div>
                <div className='upiPaymentBox'>
                  <p className='UPIBHIM'>UPI/BHIM</p>
                  <p>Your UPI app</p>
                  <div className='upiPayName'>
                  <i class="fa-brands fa-google-pay"></i>
                  </div>
                </div>
                <div className='upiInfo'>
                  <div className='upiInfoLeft'>
                    <label>Enter your UPI ID</label>
                  </div>
                  <div className='upiInfoRight'>
                    <label>How to find UPI ID?</label>
                  </div>
                </div>
                <div className='upiIdbox'>
                <input type="text" placeholder='UPI ID'  required/>
                <select>
                  <option value="A">@okhdfc</option>
                  <option value="B">@okicici</option>
                  <option value="C">@oksbi</option>
                  <option value="C">@okkvb</option>
                </select>
                </div>
                <div className='upiPay'>
                  <Link to='/paidamount'><b>VERIFY & PAY</b></Link>
                </div>
                <div style={{color:'rgb(0, 183, 255)',paddingTop:'15px'}}>
                  <p>How to pay using UPI?</p>
                </div>
              </form>
          </div>
          <div className='upiOR'>
            <h1>(OR)</h1>
          </div>
          <div className='qrimg'>
           <img src={qr} alt='' />
          </div>
          <div className='qrtitle'>
            Scan QR code To Pay
          </div>
        </div>
    </div>
  )
}
