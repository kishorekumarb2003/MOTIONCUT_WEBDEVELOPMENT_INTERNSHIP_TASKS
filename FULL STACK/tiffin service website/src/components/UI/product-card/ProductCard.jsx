import React from "react";
import "../../../styles/productcard.css";
import "bootstrap/dist/css/bootstrap.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

const ProductCard = (props) => {
  const { id, title, image01, price,rating } = props.item;
  const dispatch = useDispatch();
   const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
        rating,
      })
    );
  };

  return (
    <div className="productitems">
      <div>
      </div>
      <div className="productimages">
        <img src={image01} alt="product-img" className="w-75 " />
      </div>

    <div className="productcontent">
      <div className="productstars">
      <i class="fa-solid fa-star"></i>  <span className="productratings">{rating}</span>
      </div>
        <h5>
          {title}
        </h5>
        <div className="productdetails d-flex align-items-center justify-content-between ">
          <span className="productprices">₹{price}</span>
          <button className="addtocartbutton1" onClick={addToCart}>
               Add <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
};


export default ProductCard;
