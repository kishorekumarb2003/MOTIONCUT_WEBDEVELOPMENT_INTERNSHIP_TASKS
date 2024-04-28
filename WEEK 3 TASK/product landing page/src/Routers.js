import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AllFoods from "./pages/Menu";
import Cart from "./pages/Cartpage";
import Checkout from "./pages/checkoutpage";
import SignIn from "./pages/SignIn";
import Form from "./pages/form.jsx";
import Landingpage from "./pages/Landingpage.jsx";
import Refund from "./pages/refundpolicy.jsx";
import About from "./pages/about.jsx";
import Review from "./pages/review";
import { Home } from "./pages/payment.jsx";
import { Upi } from "./pages/upi.jsx";
import { Card } from "./pages/card.jsx";
import { Cash } from "./pages/cash.jsx";
import { Pay } from "./pages/pay.jsx";
import { Paytm } from "./pages/paytm";
import Landingpageal from "./pages/Landingpageal.jsx";
import SignUp from "./pages/SignUp";
import { OrderUs } from "./pages/orderstatuspage";
import Reason from "./pages/reasonpage";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Home" />} />
      <Route path="/Menu" element={<AllFoods />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/Home1" element={<Landingpageal />} />
      <Route path="/Home" element={<Landingpage />} />
      <Route path="/Bookingform" element={<Form />} />
      <Route path="/About" element={<About />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/payment" element={<Home />} />
      <Route path="/u" element={<Upi />} />
      <Route path="/c" element={<Card />} />
      <Route path="/d" element={<Cash />} />
      <Route path="/paidamount" element={<Pay />} />
      <Route path="/paytm" element={<Paytm />} />
      <Route path="/refund-policy" element={<Refund />} />
      <Route path="/reviewpage" element={<Review />} />
      <Route path="/orderstatus" element={<OrderUs />} />
      <Route path="/reasonpage" element={<Reason />} />
    </Routes>
  );
};

export default Routers;
