import React from "react";

import Navbar from "../Navbar/Navbar";
import Routes from "../../Routers";

import Carts from "../UI/cart/Carts.jsx";
import { useSelector } from "react-redux";

const Layout = () => {
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);
  return (
    <div>
      <Navbar />
      {showCart && <Carts />}

      <div>
        <Routes />
      </div>
     
    </div>
  );
};

export default Layout;
