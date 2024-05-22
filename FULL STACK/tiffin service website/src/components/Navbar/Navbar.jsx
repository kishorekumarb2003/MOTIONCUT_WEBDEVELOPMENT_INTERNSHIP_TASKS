import React, { useRef } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {app} from "../../firebase.config.js";
import { Container } from "reactstrap";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";
import avatar from '../../images/avatar.png';
import "../../styles/Navbar.css";
import { useStateValue } from "../../context/StateProvider.js";
import { actionType } from "../../context/reducer.js";



const navbarlinks = [
  {
    display:"Home",
    path:"/Home",
  },
  {
    display: "Menu",
    path: "/Menu",
  },
  {
    display:'About Us',
    path:"/about",
  },
  {
    display: "Cart",
    path: "/cart",
  },

];



const Navbar = () => {

 const firebaseAuth=getAuth(app);
 const provider =new GoogleAuthProvider();



 const [{user},dispatch1]=useStateValue();
  const login= async () =>
  {
    if(!user)
    {
       const {
        user:{providerData},
      } = await  signInWithPopup(firebaseAuth,provider);
     dispatch1({
      type:actionType.SET_USER,
      user:providerData[0],

     });
     localStorage.setItem("user",JSON.stringify(providerData[0]));
    }
  }
  const logout = () => {
    localStorage.clear();

      dispatch1({
        type: actionType.SET_USER,
        user: null,
      });
    };



  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };



  return (
    <header className="headerdiv" ref={headerRef}>
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logocontainer">

             <h3> <i  class="fa-solid fa-utensils"></i> Crispy Huts-Have it your way</h3>

          </div>

          <div className="navigation1" ref={menuRef} onClick={toggleMenu}>
            <div className="menu flex align-items-center gap-10">
              {navbarlinks.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "activemenu" : ""
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>


          <div className="nav__right d-flex align-items-center gap-4">
            <span className="cart__icon" onClick={toggleCart}>
            <i class="fa-solid fa-cart-shopping"></i>

              <span style={{color:'black',fontFamily:'Roboto Slab'}} className="cart__badge">{totalQuantity} </span>
            </span>
          <img style={{width:'30px' ,borderRadius:'50px'}}src={user ? user.photoURL:avatar} onClick={login} alt='profile'/>
          <i style={{marginRight:'10px'}}onClick={logout} class="fa-solid fa-right-from-bracket"></i>
            <span className="mobilemenu" onClick={toggleMenu}>
            <i class="fa-solid fa-bars"></i>
            </span>

          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
