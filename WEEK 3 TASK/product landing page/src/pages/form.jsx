import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com'
import '../styles/form.css'
import image10 from '../images/image12.svg';
import image11 from '../images/preloader.gif'
import toast, { Toaster } from 'react-hot-toast';



const noti =() => toast("Cleared Successfully!",{
  icon:'😊'
});
const notify = () => toast.success('Booked Successfully !',
{
  position:'top-center',
  style:{
    borderRadius:'10px',
    background:'black',
    color:'white'
  }
});

const Form = () => {

  function sendEmail(e)
  {
    e.preventDefault();
    emailjs.sendForm('service_qpc7hgs','template_t8f1v69',e.target,"f6Lkaq3D_kXt_kYKE").then(res=>{
      console.log(res);
    })
    // .then((success) => {

    //   alert("message sent successfully.Booking has been confirmed");

    // }).catch((error) => {

    //   alert("error sending message");

    // })


  }
     const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1400);
  }, []);

  return (
    <div>
    {loading ? (
      	    <div class="preloader">
      <img src={image11} alt="" />
        </div>
      ):(
    <div className='formcontainer'>
    <div className='imgdiv'>
      <img className='imagecontainer1'src={image10} alt=""/>
    </div>
      <div className='lan'>
        <div className='lantext'>
         <h2>MAKE YOUR RESERVATION NOW</h2>
        </div>
       <form onSubmit={sendEmail}>
      <h2>Booking form</h2>
      <div>
    </div>
         <input type='text' name='name' placeholder='Enter Name' required/>
         <input type='email' name='user_email' placeholder='ex:myname@gmail.com' required/>
         <input type='number' name='number' placeholder='Enter Mobile Number' required/>
         <input type='text' name='guests' placeholder='Enter No of Guests' required/>
         <input className='datetime'type='date' name='reservation' placeholder='Enter Booking Date' required/>
         <select name='type' id="type" placeholder='Please Select' required>
              <option value="">Please Select</option>
              <option value="Dinner">Dinner</option>
              <option value="Birthday/Anniversary">Birthday/Anniversary</option>
              <option value="wedding">Wedding</option>
              <option value="VIP/Mezzanine">VIP/Mezzanine</option>
              <option value="party">Party</option>
              <option value="other">Other</option>
         </select>
         <textarea name='message' rows='2 ' placeholder='Any Special requests' required/>
         <div className='formbutton'>
         <button className='button50' onClick={notify}>Reserve</button>
      <Toaster />
  {/* <button className='button51'type='reset' onClick={() => window.confirm("Are you sure")}>Clear Form</button> */}
  <button className='button51'type='reset' onClick={noti}>Clear Form</button>
         </div>
       </form>
    </div>
    </div>
      )}
    </div>
  )
}

export default Form;