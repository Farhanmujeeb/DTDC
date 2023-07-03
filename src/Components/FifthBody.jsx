import React from "react";
import Experiance from "./imgs/experience.png";
import Network from "./imgs/network.png";
import Modern from "./imgs/modern-technology.png";
import Solution from "./imgs/customised-solutions.png";
import Robust from "./imgs/robust-infrastructure.png";
const FifthBody = () => {
  return (
    <div className="propmain"  >
      <div className="prophead">
        <h1>Our Unique Value Proposition</h1>
        <div className="propbrake"></div>
      </div>

      <div className="propcard" >
        <div>
          <img src={Experiance} alt="" />
          <p>30+ years of Experience</p>
        </div>
        <div>
          <img src={Network} alt="" />
          <p>Wide Spread Network</p>
        </div>
        <div>
          <img src={Modern} alt="" />
          <p>Modern Technology</p>
        </div>
      </div>
      <div className="propcard1" >
        <div>
          <img src={Solution} alt="" />
          <p>Customised Solutions</p>
        </div>
        <div>
          <img src={Robust} alt="" />
          <p>Robust Infrastructure</p>
        </div>
      </div>
    </div>
  );
};

export default FifthBody;
