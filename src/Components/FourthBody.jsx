import React from "react";
import Express from "./imgs/express-parcels.jpg";
import Shipment from "./imgs/international.jpg";
import Logistic from "./imgs/integrated-ecommerce-logistics.jpg";
const FourthBody = () => {
  return (
    <div className="Servmain">
      <div className="servhead">
        <h1>Our Services</h1>
        <div className="servbrake"></div>
      </div>
      <div className="servcardmain">
        <div className="servcard">
          <img src={Express} alt="" />
          <h3>Express Parcels</h3>
          <p>
            The Express Parcels Vertical offers a wide range of domestic
            products and services catering to C2C and B2B customers for
            documents and parcels of all sizes including part-truck-load
            shipments...
          </p>
          <a href=""> Read more → </a>
        </div>

        <div className="servcard">
          <img src={Shipment} alt="" />
          <h3>International Shipments</h3>
          <p>
            We provide shipping to over 220 destinations by leveraging our
            tie-ups with international partners and our own offices in major
            commerce centers across the globe. Our wide range of international
            shipping solutions are...
          </p>
          <a href=""> Read more → </a>
        </div>

        <div className="servcard">
          <img src={Logistic} alt="" />
          <h3>Integrated E-commerce Logistics</h3>
          <p>
            Our Integrated E-commerce Logistics is an end-to-end solution
            specifically designed for e-commerce companies who need quick and
            reliable logistics to gain a competitive edge. From pick-up...
          </p>
          <a href=""> Read more → </a>
        </div>
      </div>
    </div>
  );
};

export default FourthBody;
