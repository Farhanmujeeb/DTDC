import React from "react";
import Facebook from "./imgs/Facebook.png";
import Insta from "./imgs/insta.jpg";
import Twitter from "./imgs/twitter.jpg";
import Youtube from "./imgs/youtube.jpg";
const Footer = () => {
  return (
    <div className="footdiv">
      <div className="dtdiv">
        <img
          src="https://www.dtdc.in/img/logos/logo-footer.png"
          alt=""
          srcset=""
        />
        <p>Email : customersupport@dtdc.com</p>
        <div className="dtbrake"></div>
        <p>Phone : +91- 89 2986 9688</p>
        <div className="dtbrake"></div>
        <p>Follow us on :</p>
        <div className="socialdiv">
          <img src={Facebook} alt="" />
          <img src={Insta} alt="" />
          <img src={Youtube} alt="" />
          <img src={Twitter} alt="" />
        </div>
      </div>
      <div className="compmain">
        <h3>COMPANY</h3>
        <div className="compbrake"></div>
        <a href="">About Us</a>
        <a href="">Awards & Recognition</a>
        <a href="">Corp. Social Responsibility</a>
      </div>
      <div className=" shipdiv ">
        <h3>SHIP WITH US</h3>
        <div className="compbrake"></div>
        <a href="">Book a Shipment</a>
        <a href="">Track a Shipment</a>
        <a href="">Business Inquiry</a>
      </div>

      <div className="helpdiv">
        <h3>HELP & SUPPORT</h3>
        <div className="compbrake"></div>
        <a href="">Email Us</a>
        <a href="">Locate Us</a>
        <a href="">Customer Care</a>
      </div>

      <div className="selfdiv">
        <h3>SELF SERVICE PORTALS</h3>
        <div className="compbrake"></div>
        <a href="">Customer Login</a>
        <a href="">Channel Partner Login</a>
        <a href="">Employee Login</a>
        <a href="">Download your PODs</a>
      </div>
    </div>
  );
};

export default Footer;
