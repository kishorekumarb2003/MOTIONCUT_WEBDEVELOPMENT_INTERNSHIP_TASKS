import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import imageemptycart from "../../../images/emptyCart.svg";
import { useDispatch, useSelector } from "react-redux";
import { cartUiActions } from "../../../store/shopping-cart/cartUiSlice";

import "../../../styles/shopping-cart.css";

const Carts = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };
  return (
    <div className="cart__container">
      <ListGroup className="cart">
        <div className="cart__close">
          <i onClick={toggleCart}>
          <i class="fa-solid fa-xmark"></i>
          </i>
        </div>

        <div className="cart__item-list">
          {cartProducts.length === 0 ? (
            <div>
                    <img style={{width:'370px'}}src={imageemptycart} alt="empty"/>

            <h6 className="text-center mt-5">No items in the cart</h6>
            </div>
          ) : (
            cartProducts.map((item, index) => (
              <CartItem item={item} key={index} />
            ))
          )}
        </div>

        <div className="cart__bottom d-flex align-items-center justify-content-between">
          <h6>
            Item Total : <span>₹{totalAmount}</span>
          </h6>

          <button >
            <Link to="/checkout" onClick={toggleCart}>
              Checkout  <i class="fa-solid fa-arrow-right"></i>
            </Link>
          </button>
        </div>
      </ListGroup>
    </div>
  );
};

export default Carts;
