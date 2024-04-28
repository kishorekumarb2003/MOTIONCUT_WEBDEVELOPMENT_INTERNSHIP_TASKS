import React, { useState, useEffect } from "react";
import "../styles/Landingpage1.css";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config.js";
import { Link } from "react-router-dom";
import avatar from "../images/avatar.png";
import { useStateValue } from "../context/StateProvider.js";
import { actionType } from "../context/reducer.js";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";
import image7 from "../images/image7.jpg";
import image8 from "../images/image8.jpeg";
import image9 from "../images/image9.jpg";
import image10 from "../images/preloader.gif";
import video2 from "../videos/video3.mp4";

const Landingpage = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 900);
  }, []);

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user }, dispatch1] = useStateValue();
  const login = async () => {
    // const response = await signInWithPopup(firebaseAuth,provider);
    // console.log(response);
    if (!user) {
      const {
        user: { providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch1({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    }
  };
  const logout = () => {
    localStorage.clear();

    dispatch1({
      type: actionType.SET_USER,
      user: null,
    });
  };

  return (
    <>
      <div>
        {loading ? (
          <div class="preloader">
            <img src={image10} alt="loading" />
          </div>
        ) : (
          // navigation container
          <div className="main-content">
            <div className="fulltext">
              <div className="landing">
                <div className="navigation">
                  <input type="checkbox" id="navigation-check" />
                  <div className="navigation-header">
                    <div className="navigation-title">
                      <Link
                        to="/About"
                        style={{ fontSize: "1.2em" }}
                        className="logo">
                        <i
                          style={{ fontSize: "1em" }}
                          class="fa-solid fa-utensils"></i>{" "}
                        Crispy Huts- Have it your way
                      </Link>
                    </div>
                  </div>
                  <div className="navigation-btn">
                    <label for="navigation-check">
                      <span></span>
                      <span></span>
                      <span></span>
                    </label>
                  </div>

                  <div className="navigation-links">
                    <Link to="/Menu" className="logo">
                      Menu
                    </Link>
                    <Link className="logo" to="/About">
                      About Us
                    </Link>
                    <Link className="logo" to="/login">
                      Login
                    </Link>

                    <Link to="/signup" className="logo">
                      SignUp
                    </Link>
                    <button className="button40">
                      <Link to="/cart">
                        <i class="fa-solid fa-cart-shopping"></i>
                      </Link>
                    </button>
                    <i
                      style={{ marginRight: "10px" }}
                      onClick={logout}
                      class="fa-solid fa-right-from-bracket"></i>
                    <img
                      style={{
                        width: "30px",
                        marginRight: "10px",
                        borderRadius: "100px",
                      }}
                      src={user ? user.photoURL : avatar}
                      onClick={login}
                      alt="profile"
                    />
                  </div>
                </div>
              </div>

              {/* container1 */}
              <div className="background">
                <div className="background__text">
                  <h1>
                    <span className="word">WELCOME BACK!</span>
                    <div className="message">
                      <div className="word1">Hungry?</div>
                      <div className="word2">Late Night?</div>
                      <div className="word3">Unexpected guests?</div>
                    </div>
                  </h1>
                </div>

                <div className="maintext">
                  <div className="tagline1">
                    <h1 className="t1">
                      {" "}
                      Order food from our restaurant Soon.
                    </h1>
                  </div>
                  <div className="tagline2">
                    <h1 className="t2"> Love well. Sleep well. Dine well.</h1>
                  </div>
                  <div
                    style={{ fontFamily: "serif", fontSize: "20px" }}
                    className="callus">
                    <h1 className="t3"> Call us @+91 9843678219</h1>
                  </div>
                  <button
                    className="button1"
                    style={{ fontFamily: "Aerial" }}
                    type="submit">
                    <Link to="/Menu     ">Order Now</Link>
                  </button>
                </div>
              </div>
            </div>

            {/* container2 */}

            <div className="container2">
              <div className="text">
                KINDNESS IS A GIFT EVERYONE CAN AFFORD TO GIVE.
                <h5>OUR DISHES</h5>
                <div className="List">
                  <ul>
                    <li className="list1">All</li>
                    <li>Awesome</li>
                    <li>Responsive</li>
                    <li>Created</li>
                    <li>Animated</li>
                  </ul>
                </div>
                <div className="imagediv">
                  <div className="food-img">
                    <img className="img4" src={image4} alt="Food" />{" "}
                    <h1>Juice</h1>
                  </div>

                  <div className="food-img">
                    <img className="img5" src={image5} alt="Food" />{" "}
                    <h1>Cake</h1>
                  </div>

                  <div className="food-img">
                    <img className="img6" src={image6} alt="Food" />{" "}
                    <h1>Idly</h1>
                  </div>

                  <div className="food-img">
                    <img className="img7" src={image7} alt="Food" />{" "}
                    <h1>Sweet</h1>
                  </div>
                  <div className="food-img">
                    <img className="img8" src={image8} alt="Food" />{" "}
                    <h1>Shake</h1>
                  </div>
                </div>
              </div>
            </div>

            {/* container3 */}
            <div className="container3">
              <div className="contentbox">
                <video
                  className="v1"
                  src={video2}
                  width="100%"
                  height=""
                  controls
                  autoPlay="autoplay"
                  loop
                  muted></video>
              </div>
              <div className="overlay">
                <div className="vt">
                  <h2 className="vt1">The Crispy Huts experience</h2>
                  <p className="vt2">
                    Second only to the incredible food is our atmosphere at
                    Crispy Huts. Located in TamilNadu, GA’s historic Castleberry
                    Hill, this multi-level dining and entertainment complex,
                    complete with two full bars and outdoor patio has a style
                    that’s all its own.
                  </p>
                  <button className="button10">GO INSIDE</button>
                </div>
              </div>
            </div>

            {/* container4 */}
            <div className="container4">
              <div className="bookcontainer">
                <div className="textbox3">
                  <h1 className="">Events</h1>
                  <p>
                    Celebrate at one of India's most awarded restaurants, with
                    panoramic views. From intimate dinner parties in the Private
                    Dining Room, to long lunches in the spectacular Upper Tower,
                    to large cocktail events in The Green Room – Quay delivers
                    an immersive dining experience with views like no other.
                  </p>
                </div>
                <button className="button30">
                  {" "}
                  <Link to="/Bookingform">Book Table</Link>
                </button>
              </div>

              <img className="image9" src={image9} alt="diningtable" />
            </div>

            {/* container5 */}

            <div id="map" className="container5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d504194.66554959514!2d76.21455144999999!3d9.152591500000009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0613990c0bfaf7%3A0x574093ab520cc73f!2sCrispy%20hut!5e0!3m2!1sen!2sin!4v1670524673427!5m2!1sen!2sin"
                width="100%"
                height="300"
                title="map"></iframe>
            </div>

            {/* container6 */}
            <div>
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
                    <li>
                      <b>Monday :</b> 9:00 A.M - 10:00 P.M
                    </li>
                    <li>
                      <b>Tuesday :</b> 9:00 A.M - 10:00 P.M
                    </li>
                    <li>
                      <b>Wednesday :</b> 9:00 A.M - 10:00 P.M
                    </li>
                    <li>
                      <b>Thursday :</b> 9:00 A.M - 10:00 P.M
                    </li>
                    <li>
                      <b>Friday :</b> 9:00 A.M - 10:00 P.M
                    </li>
                    <li>
                      <b>Saturday :</b> 8:00 A.M - 11:00 P.M
                    </li>
                    <li>
                      <b>Sunday :</b> 8:00 A.M - 11:00 P.M
                    </li>
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
                    <Link className="fontbird" style={{ fontSize: "2em" }}>
                      <i class="fa-brands fa-twitter"></i>{" "}
                    </Link>
                    <Link className="fontbird" style={{ fontSize: "2em" }}>
                      <i class="fa-brands fa-facebook"></i>{" "}
                    </Link>
                    <Link className="fontbird" style={{ fontSize: "2em" }}>
                      <i class="fa-brands fa-instagram"></i>{" "}
                    </Link>
                    <Link className="fontbird" style={{ fontSize: "2em" }}>
                      <i class="fa-brands fa-whatsapp"></i>{" "}
                    </Link>
                  </ul>
                </div>
              </footer>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Landingpage;
