import "../styles/about.css";
import YT from "../images/Youtube.svg";
import IG from "../images/Instagram.svg";
import FB from "../images/Facebook.svg";
import TW from "../images/Twitter.svg";
import React from "react";
import kishore from "../images/KishoreKumar.jpg";
import nithin from "../images/Nithin.jpg";
import lingesh from "../images/Lingesh.jpg";
import Jeeva from "../images/JeevaPerumal.jpg";
import Naveena from "../images/Naveena.jpeg";
import Keerthivasan from "../images/Keerthivasan.jpg";

import mavericks from "../images/Mavericks.png";
import { Link } from "react-router-dom";

function About() {
  return (
    <React.Fragment>
      <div className="AboutBody">
        <div className="Intro">
          <div>
            <h1 className="CriHut">CRISPY HUTS</h1>
            <p className="quote">Love Food, Enjoy Life</p>
          </div>
        </div>
        <div className="Welcome">
          <div className="para">
            <h2 className="WelLand">
              Welcome to the land of <food className="FoOD">Foods</food>
            </h2>
            <p style={{ fontSize: "18px" }}>
              We are new to this sector. Our journey just started just now at
              2022. However our motive is to fight against your hunger. We are
              going to change this world, The world without hunger. One day we
              will reach that Destination of the world without hunger
            </p>
          </div>
          <div className="Img"></div>
        </div>
        <div className="Hello">
          <div className="HelloDesc">
            <h2>Hello Foodies,</h2>
            <p>
              Launched in 2022, Our technology platform connects customers,
              restaurant partners and delivery partners, serving their multiple
              needs. Customers use our platform to search and discover
              restaurants, read and write customer generated reviews and view
              and upload photos, order food delivery, book a table and make
              payments while dining-out at restaurants.
            </p>
            <p>
              On the other hand, we provide restaurant partners with
              industry-specific marketing tools which enable them to engage and
              acquire customers to grow their business while also providing a
              reliable and efficient last mile delivery service. We also operate
              a one-stop procurement solution, Mavericks, which supplies high
              quality ingredients and kitchen products to restaurant partners.
            </p>
            <p>
              We also provide our delivery partners with transparent and
              flexible earning opportunities.
            </p>
          </div>
          <div className="HelloImg">
            <img
              src="https://cdn.pixabay.com/photo/2018/07/14/15/27/cafe-3537801_960_720.jpg"
              alt="Crispy"></img>
          </div>
        </div>
        <div className="Hello">
          <div className="HelloImg">
            <img
              src="https://cdn.pixabay.com/photo/2017/03/22/16/07/villa-2165428_960_720.jpg"
              alt="Crispy"></img>
          </div>
          <div className="HelloDesc">
            <h2>Our Ambience</h2>
            <p>
              Webster’s defines ambiance as: a feeling or mood associated with a
              particular place, person, or thing. Restaurant ambiance involves
              everything from lighting and sound to décor and color. But it also
              involves the mood and, of course, cleanliness.
            </p>
            <p>
              Our Restaurants have a World class Ambience and cleanliness is
              maintained very well. Maintenance is done at the end of every day.
              Our Workers are working hard to improve the customer experience in
              the best way. Your Happieness is our Happieness.
            </p>
            <p>
              Without Cleanliness there is no good health. So We are working for
              your good health.
            </p>
          </div>
        </div>
        <div className="Hello">
          <div className="HelloDesc">
            <h2>Our Benefits</h2>
            <p>
              Crispy Huts is an equal-opportunity employer that offers a variety
              of employee-centric benefits such as competitive salaries,
              comprehensive health benefits, and exciting equity opportunities.
              With this in practice, we like to empower and motivate our
              employees to boost their efforts towards realizing Crispy Huts’s
              vision, ‘To elevate the quality of life for the urban consumer
              with unparalleled convenience.’
            </p>
          </div>
          <div className="HelloImg">
            <img
              src="https://cdn.pixabay.com/photo/2015/01/08/18/26/man-593333_960_720.jpg"
              alt="Crispy"></img>
          </div>
        </div>
        <div className=""></div>
        <div className="foodies">
          <div className="ItsUs">
            <img className="ItImg" src={kishore} alt="Kishore Kumar"></img>
            <div className="ItPara">
              <p style={{ fontWeight: "bold" }}>
                KISHORE KUMAR, 727821TUCS115, SKCT
              </p>
              <p>
                Kishore Kumar is one of our team member of Project Crispy Huts.
                He has strong knowledge in css. He is handling the Landing Page
                of the Project Crispy
              </p>
            </div>
          </div>
          <div className="ItsUs">
            <img className="ItImg" src={nithin} alt="Nithin"></img>
            <div className="ItPara">
              <p style={{ fontWeight: "bold" }}>NITHIN, 727821TUCS143, SKCT</p>
              <p>Description is yet to added.</p>
            </div>
          </div>
          <div className="ItsUs">
            <img className="ItImg" src={lingesh} alt="Lingesh"></img>
            <div className="ItPara">
              <p style={{ fontWeight: "bold" }}>LINGESH, 727821TUCS119, SKCT</p>
              <p>Description is yet to added.</p>
            </div>
          </div>
          <div className="ItsUs">
            <img className="ItImg" src={Naveena} alt="Naveena"></img>
            <div className="ItPara">
              <p style={{ fontWeight: "bold" }}>NAVEENA, 727821TUCS138, SKCT</p>
              <p>Description is yet to added.</p>
            </div>
          </div>
          <div className="ItsUs">
            <img className="ItImg" src={Keerthivasan} alt="Keerthivasan"></img>
            <div className="ItPara">
              <p style={{ fontWeight: "bold" }}>
                KEERTHIVASAN, 727821TUCS112, SKCT
              </p>
              <p>Description is yet to added.</p>
            </div>
          </div>
          <div className="ItsUs">
            <img className="ItImg" src={Jeeva} alt="Jeeva Perumal"></img>
            <div className="ItPara">
              <p style={{ fontWeight: "bold" }}>
                JEEVA PERUMAL, 727821TUCS102, SKCT
              </p>
              <p>
                Jeeva is Handling the About Page and the Career page of the
                project Crispy Huts
              </p>
            </div>
          </div>
        </div>
        <div className="Collab">
          <h2>OUR COLLABORATORS</h2>
          <div className="Part">
            <div className="PartImg">
              <img
                className="swiggy"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/220px-Swiggy_logo.svg.png"
                alt="Swiggy"></img>
            </div>
            <div className="PartImg">
              <img
                classNmae="Zomato"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Zomato_Logo.svg/220px-Zomato_Logo.svg.png"
                alt="Zomato"></img>
            </div>
            <div className="PartImg">
              <img
                classNmae="Dunzo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Dunzo_Logo.svg/200px-Dunzo_Logo.svg.png"
                alt="Zomato"></img>
            </div>
          </div>
          <div className="Part">
            <div className="PartImg">
              <img className="Mavericks" src={mavericks} alt="Mavericks"></img>
            </div>
          </div>
        </div>
        <div className="End">
          <div className="sect">
            <h3>CRISPY HUTS</h3>
            <p>About Us</p>
            <p>Career</p>
            <p>
              <Link className="endlink" to="/why-to-choose-us">
                Why to choose us
              </Link>
            </p>
            <p>Achievements</p>
          </div>
          <div className="sect">
            <h3>LEGAL</h3>
            <p>Terms of use</p>
            <p>
              <Link className="endlink" to="/refund-policy">
                Refund and cancellation
              </Link>
            </p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
          </div>
          <div className="sect">
            <h3>CONTACT</h3>
            <p>Help & Support</p>
            <div>
              <h3>CONNECT WITH US</h3>
              <div className="Link">
                <img src={YT} alt="yt"></img>
                <img src={FB} alt="yt"></img>
                <img src={IG} alt="yt"></img>
                <img src={TW} alt="yt"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default About;
