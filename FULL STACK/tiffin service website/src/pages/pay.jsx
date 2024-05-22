import React, { useState, useEffect } from 'react';
import image15 from '../images/preloader2.gif'
import image16 from '../images/image100.png'
import image17 from '../images/cooking.gif'
import image18 from '../images/delivery.gif'
import image19 from '../images/food.gif'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';



const Print = () =>{     
  let printContents = document.getElementById('printablediv').innerHTML;
  let originalContents = document.body.innerHTML;
  document.body.innerHTML = printContents;
  window.print();
 document.body.innerHTML = originalContents; 
}

export const Pay = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);

  const deliveryCost = 50;
  const serviceFee=cartTotalAmount*0.02;
  
  const tax=cartTotalAmount*0.05;
  const totalAmount = cartTotalAmount + Number(tax+serviceFee);
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
      	    <div class="preloader2">
      <img style={{width:'300px'}}src={image15} alt="" />
              <h2>Payment Successful</h2>

        </div>
      ) :(
        
      
<div  id='printablediv'>
  <img src={image17} style={{width:'150px',float:'right',position:'relative',right:'4em',top:'8em'}} alt=''/>
  <img src={image18} style={{width:'150px',float:'right',position:'relative',left:'6em',top:'20em'}} alt=''/>
  <img src={image19} style={{width:'150px',float:'right',position:'relative',left:'15em',top:'33em'}} alt=''/>
<div className='rec_box'>
 <center>
   <h1>Hotel receipt</h1>
   

 </center>
  </div> 
  <div className='rec_box1'>
 
    <ul>
    <h3><b>BILL TO</b></h3>
    <h4><b>Name:</b></h4>
     <h5>Vikram</h5>
    <h5><b>Phone Number:</b></h5>
     <h5> 9676537756</h5>
    <h5><b>Email:</b></h5>
     <h5> vikram234@gmail.com</h5>
    <h5><b>Address:</b></h5>
     <h5> Srikrishna college of technology.</h5>
    <h5><b>Payment Method:</b></h5>
     <h5> UPI</h5>
     <h6 style={{color:'blue'}}> <b>Order Id :</b> 5432-4412-3213</h6>
        <h6> <b>Pay Mode :</b>Unified Payments-UPI </h6>
        <h6><b>Bank Ref # :</b> 234457683033 </h6>
     </ul>
 
    </div>
   


        <div className='bb'>
        <div className='bgbox'>
         <b> Ordered Items</b>
      </div>
        <table className="table table-bordered">
                  <tbody>
                    {cartItems.map((item) => (
                      <Tr item={item} key={item.id} />
                      ))}
                  </tbody>
                </table>
                <div className='billbox'>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                <b>Bill details</b> 
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                 Item Total<span>₹{cartTotalAmount}</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  DeliveryFee: <span><del>₹{deliveryCost}</del>  FREE</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                Govt Taxes & Restaurant Charges(5%): <span>₹{tax}</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Service Fee(2%): <span>₹{serviceFee}</span>
                </h6>
                </div>
              
                <div className="checkout__total">
                  <h5 className="d-flex align-items-center justify-content-between">
                  <b> Paid Amount: </b> <span><b> ₹{totalAmount}</b></span>
                  </h5>
                </div>
  
    
<button className='button60' type="button"><Link to='/orderstatus'>Track order</Link></button>
<button className='button60' type="button" onClick={Print} >print</button>
        </div>


 <center className='foot'> <img src={image16} style={{width:'350px',position:'relative',zIndex:'100'}} alt=''/>
 <h1>Hope you enjoy our Service and Foods!</h1>
 </center>


        </div>
        )}
        </div>
    </>
    );
}



const Tr = (props) => {
  const {image01, title, price, quantity} = props.item;

 
  return (
    <tr>
      <td className="text-center cartimgdiv">
        <img src={image01} alt="" />
      </td>
      <td className="text-center">{title}</td>
      <td className="text-center">₹{price}</td>
      <td className="text-center">{quantity}</td>
      <td className="text-center cartitemdivl">
      </td>
    </tr>
  );
};