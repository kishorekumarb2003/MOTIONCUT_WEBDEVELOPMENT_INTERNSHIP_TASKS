import React from "react";
import { ListGroupItem } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "../../../styles/cart-item.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

const CartItem = ({ item }) => {
  const { id, title, price, image01, quantity, totalPrice } = item;

  const dispatch = useDispatch();

  const incrementItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image01,
      })
    );
  };

  const decreaseItem = () => {
    dispatch(cartActions.removeItem(id));
  };

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };

  return (
    <ListGroupItem className="border-0 cart__item">
      <div className="cart__item-info d-flex gap-2">
        <img src={image01} alt="product-img" />

        <div className="cart__product-info w-100 d-flex align-items-center gap-4 justify-content-between">
          <div>
            <h6 className="cart__product-title">{title}</h6>
            <p className=" d-flex align-items-center gap-5 cart__product-price">
              {quantity}x <span>₹{totalPrice}</span>
            </p>
            <div className=" d-flex align-items-center justify-content-between increase__decrease-btn">
              <i className="decrease__btn" onClick={decreaseItem}>
              <i class="fa-solid fa-circle-minus"></i>
              </i>
              <span className="quantity">{quantity}</span>
              <i className="increase__btn" onClick={incrementItem}>
              <i class="fa-solid fa-circle-plus"></i>
              </i>
            </div>
          </div>
          <i  onClick={deleteItem}>
          <i class="fa-solid fa-trash"></i>
          </i>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default CartItem;
