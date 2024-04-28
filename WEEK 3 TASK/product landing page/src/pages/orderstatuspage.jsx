import '../styles/orderstatuspage.css'
import Gopal from '../images/gopalsamy.jpg';
import video1 from  '../videos/video1.mp4';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { GiCampCookingPot } from 'react-icons/gi';
import { MdDeliveryDining } from 'react-icons/md';

export const OrderUs = () =>{
    const cartItems = useSelector((state) => state.cart.cartItems);
    const cartTotalAmount = useSelector((state) => state.cart.totalAmount);

    const deliveryCost = 50;
    const serviceFee=cartTotalAmount*0.02;

    const tax=cartTotalAmount*0.05;
    const totalAmount = cartTotalAmount + Number(tax+serviceFee);
    return (

            <div className='OrderPage'>

                <div className='OrderDetailsUltraMain'>
                    <div className='OrderDetailsMain'>
                        <div className='OrderDetails'>
                            <p><i class="fa-solid fa-clipboard-check"></i>Order Placed</p>
                            <span><GiCampCookingPot /></span>  <p>Cooking done</p>
                            <span><MdDeliveryDining /></span> <p>Order Picked</p>
                            <p><i class="fa-solid fa-box"></i>Delivered</p>
                        </div>
                        <div className='ProgressBarMain'>
                            <div className='ProgressBar'>
                                <div className='ProgressPercent'>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='OrderMap'>
                    <video src={video1} width="100%" height="40%" controls autoPlay='autoplay' loop muted>
                    </video>
                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d504194.66554959514!2d76.21455144999999!3d9.152591500000009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0613990c0bfaf7%3A0x574093ab520cc73f!2sCrispy%20hut!5e0!3m2!1sen!2sin!4v1670524673427!5m2!1sen!2sin" width='100%' height='50%' title='map'></iframe> */}
                        <div className='time'>
                            <h3><b>Estimated time: 40min</b></h3>
                            <p>Delivery Address:</p>
                            <p> Vikram</p>
                            <p> Sri Krishna College Of Technology</p>
                            <p> Arivozhi Nagar, Kovaipudur</p>
                            <p> Coimbatore, 641042</p>

                            <p></p>
                        </div>
                        <div>
                            <button className='button71'><Link to='/reasonpage'>Cancel Order</Link></button>
                        </div>
                        <div>
                        </div>
                            <button className='button70'><Link to='/reviewpage'>Review us</Link></button>
                 <div className='bb1'>
        <div className='bgbox1'>
         <b>Ordered Items</b>
      </div>
        <table className="table table-bordered">
                  <tbody>
                    {cartItems.map((item) => (
                      <Tr item={item} key={item.id} />
                      ))}
                  </tbody>
                </table>
                <div className='billbox1'>
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
                </div>

                    </div>
                    <div className='GopalKrishna'>
                        <img src={Gopal} alt='Gopal'></img>
                        <p><b>Delivery Agent: </b>GopalSaamy</p>
                        <p>300+ FiveStar ratings</p>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                    </div>

                </div>
            </div>

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
