import { Container} from "reactstrap";
import CommonSection from "../components/UI/common-section/CommonSection";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/shopping-cart/cartSlice";
import { Link } from "react-router-dom";
import imageemptycart from "../images/deliveryboy.gif";
import React from 'react';

import emailjs from 'emailjs-com'
import toast, { Toaster } from 'react-hot-toast';

import "bootstrap/dist/css/bootstrap.css";

import "../styles/checkout.css";
const noti =() => toast("Cleared Successfully!",{
  icon:'😊'
});
const notify = () => toast.success('Submited Successfully !',
{
  position:'top-center',
  style:{
    borderRadius:'10px',
    background:'black',
    color:'white'
  }
});




 
const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  
  const deliveryCost = 50;
  const serviceFee=cartTotalAmount*0.02;
  
  const tax=cartTotalAmount*0.05;
  const totalAmount = cartTotalAmount + Number(tax+serviceFee);

  function sendEmail(e)
  {
    e.preventDefault();

    emailjs.sendForm('service_713njas','template_mkqrjzp',e.target,"f6Lkaq3D_kXt_kYKE").then(res=>{
      console.log(res);
    })
   

  }
 

  


  return (
    <section title="Checkout">

      <CommonSection title="Checkout" />

      <section>
        <Container>

              <div className="checkoutbill">
              <table className="table table-bordered">
                  
                  <tbody>
                    {cartItems.map((item) => (
                      <Tr item={item} key={item.id} />
                      ))}
                  </tbody>
                </table>
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
              
                <div className="checkout__total">
                  <h5 className="d-flex align-items-center justify-content-between">
                  <b> TO PAY: </b> <span><b> ₹{totalAmount}</b></span>
                  </h5>
                </div>
                <button className="addtocartbutton"><Link to='/payment'>Make Payment</Link></button>
              </div>
           
      

        </Container>
      </section>
      <div>
    
      <div className='formcontainerdiv'>
        
      <div className='imgdiv'>
      <img className='imagecontainerdiv' src={imageemptycart} alt="empty" />
  
        
      </div>
        <div className='lan'>
          <div className='lantext'>
          </div>
     
         <form onSubmit={sendEmail}> 
           
        <h4>Please Fill Your Details</h4>
        
        <div>
      
      </div>
           <input type='text' name='name' placeholder='Enter Name' required/>
           <input type='email' name='user_email' placeholder='ex:myname@gmail.com' required/>
           <input type='number' name='number' placeholder='Enter Mobile Number' required/>
           <select name='type' id="type" placeholder='Please Select' required>
    <option value="">Please Select Location</option>
    <option value="l1">Kovaipudur</option>
    <option value="l2">Kuniyamuthur</option>
    <option value="l3">Gandipuram</option>
    <option value="l4">Ukkadam</option>
    <option value="l5">Podanur</option>
    <option value="l6">Rayapuram</option>
    <option value="l7">Sulthanpettai</option>
        </select>
       
        <textarea name='Address' rows='2 ' placeholder='Your Address' required/>

           <textarea name='message' rows='2 ' placeholder='Add Cooking instructions' required/>
           <div className='formbutton'>
           <button className='button50' onClick={notify}>Submit</button>
        <Toaster />
    <button className='button51'type='reset' onClick={noti}>Clear Form</button>
           </div>
        
         </form>
        
      </div>
      </div>
      </div>
      {/* <div>      
   <footer className="footer">
    <h4>Questions? Call 0421-8758-4945</h4>
    <div className="footer-cols">
        <ul>
    <h2>CRISPY HUTS</h2>
            <h2>About Crispy Huts</h2>
            <li>Who we are</li>
            <li>Blog</li>
            <li>Work with Us</li>
            <li>Investor Relations</li>
            <li>Report Fraud</li>
        </ul>
        <ul>
            <h2>Opening hours</h2>
            <li ><b>Monday :</b> 9:00 A.M - 10:00 P.M</li>
            <li><b>Tuesday :</b> 9:00 A.M - 10:00 P.M</li>
            <li><b>Wednesday :</b> 9:00 A.M - 10:00 P.M</li>
            <li><b>Thursday :</b> 9:00 A.M - 10:00 P.M</li>
            <li><b>Friday :</b> 9:00 A.M - 10:00 P.M</li>
            <li><b>Saturday :</b> 8:00 A.M - 11:00 P.M</li>
            <li><b>Sunday :</b> 8:00 A.M - 11:00 P.M</li>
           
        </ul>
        <ul>
            <h2>We deliver to</h2>
            <li>Kuniyamuthur</li>
            <li>Kovaipudur</li>
            <li>Gandhipuram</li>
            <li>Ukkadam</li>
            <li>Somanur</li>
            <li>Sulthanpettai</li>
            <li>Rayapuram</li>
        </ul>
        <ul>

            <h2>Social Links</h2>
            <li>Media Centre</li>
            <li>Terms of Use</li>
            <li>Contact Us</li>
         
            <h3>We are available at</h3>
            <Link className='fontbird'  style={{fontSize:'2em'}}><i class="fa-brands fa-twitter"></i> </Link>
            <Link    className='fontbird' style={{fontSize:'2em'}}><i class="fa-brands fa-facebook"></i> </Link>
            <Link  className='fontbird'  style={{fontSize:'2em'}}><i class="fa-brands fa-instagram"></i> </Link>
            <Link  className='fontbird'style={{fontSize:'2em'}}><i class="fa-brands fa-whatsapp"></i> </Link>
            
        </ul>
    </div>
</footer>
               </div>
   */}
    </section>
      
    

  );
};
const Tr = (props) => {
  const { id, image01, title, price, quantity } = props.item;
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };
  return (
    <tr>
      <td className="text-center cartimgdiv">
        <img src={image01} alt="" />
      </td>
      <td className="text-center">{title}</td>
      <td className="text-center">Rs.{price}</td>
      <td className="text-center">{quantity}</td>
      <td className="text-center cartitemdivl">
      <i class="fa-solid fa-trash" onClick={deleteItem}></i>
      </td>
    </tr>
  );
};


export default Checkout;
