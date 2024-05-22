import React from "react";

import CommonSection from "../components/UI/common-section/CommonSection";
import "../styles/cartpage.css";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { cartActions } from "../store/shopping-cart/cartSlice";
import { Link } from "react-router-dom";
import imageemptycart from "../images/shoppingimg.gif";
import "bootstrap/dist/css/bootstrap.css";


const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <section title="Cart">
      <CommonSection title="Your Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              {cartItems.length === 0 ? (
              
                <div className="emptycontainer">
                    <img style={{width:'230px',position:'relative',left:'50em',top:'3em'}}src={imageemptycart} alt="empty" />
                    
                    <h3  className="text-center">Your cart is empty</h3>
              
                  </div>
              ) : (
                <table className="table table-bordered">
                
                  <tbody>
                    {cartItems.map((item) => (
                      <Tr item={item} key={item.id} />
                    ))}
                  </tbody>
                </table>
              )}

              <div className="mt-1">
                <h5>
                  Item Total: ₹
                  <span className="cartsubtotal">{totalAmount}</span>
                </h5>
                <p>Taxes and delivery charge  will be calculated at checkout</p>
                <div className="cartpagebutton">
                  <button className="addtocartbutton me-4">
                    <Link to="/Menu">Order More</Link>
                  </button>
                  <button className="addtocartbutton">
                    <Link to="/checkout">Proceed to checkout</Link>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
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
      <td className="text-center">₹{price}</td>
      <td className="text-center">{quantity}</td>
      <td className="text-center cartitemdiv">
      <i class="fa-solid fa-trash" onClick={deleteItem}></i>
      </td>
    </tr>
  );
};

export default Cart;
