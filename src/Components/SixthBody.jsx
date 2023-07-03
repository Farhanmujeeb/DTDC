import React from "react";
import Retail from "./imgs/retail.jpg";
import Finance from "./imgs/financial_express.jpg";
import Aramex from "./imgs/dtdc-aramex.jpg";
import Adopt from "./imgs/dtdc-adopts.jpg";
import Board from "./imgs/board.jpg";
const SixthBody = () => {
  return (
    <div>
      <div className="newshead">
        <h1>In The News</h1>
        <div className="newsbrake"></div>
        <p>Read all the latest updates about DTDC</p>
      </div>
      <div className="newscardmain">
        <div className="newscard">
          <img src={Retail} alt="" />
          <a href="">
            <h3>
              DTDC retail counter inaugurated at Kolkata's Sealdah Metro Station
            </h3>
          </a>
          <p>
            For the first time in India, a pickup and drop off (PUDO) facility
            was inaugurated at Sealdah metro station in Kolkata by DTDC, which
            would help commuters dispatch and receive parcels during the service
            hours of the East-West Metro (Green Line).
          </p>
          <a className="Readdiv" href="">
            READ MORE +
          </a>
        </div>

        <div className="newscard">
          <img src={Finance} alt="" />
          <a href="">
            <h3>DTDC's brand campaign on Financial Express' Spotlight</h3>
          </a>
          <p>
            We have seen logistics companies spin emotional stories before. But
            I am not sure I have seen DTDC craft such messages in the past.
            Through some simple yet compelling stories that draw from everyday
            life, DTDC manages to connect us with the importance ....
          </p>
          <a className="Readdiv" href="">
            READ MORE +
          </a>
        </div>

        <div className="newscard">
          <img src={Adopt} alt="" />
          <a href="">
            <h3>DTDC adopts what3words for deliveries across India</h3>
          </a>
          <p>
            "Now, customers can add their what3words address in the address
            section of the MyDTDC App, enabling them to specify a very precise
            delivery location – be it the front door, specific apartment complex
            entrance, or a tucked-away side passage," says an official
            release...
          </p>
          <a className="Readdiv" href="">
            READ MORE +
          </a>
        </div>
      </div>
      <div className="newscardmain1">
        <div className="newscard">
          <img src={Board} alt="" />
          <a href="">
            <h3>
              DTDC and Narayana Health sets up oxygen generator plant in Jaipur
            </h3>
          </a>
          <p>
            DTDC and its strategic partner, Geopost SA, owned by France’s Le
            Groupe La Poste., has collaborated with Narayana Hrudayalaya
            Charitable Trust and Narayana Hrudayalaya for the successful set-up
            and inauguration of an oxygen generator plant in Jaipur...
          </p>
          <a className="Readdiv" href="">
            READ MORE +
          </a>
        </div>

        <div className="newscard">
          <img src={Aramex} alt="" />
          <a href="">
            <h3>DTDC enters into an MoU with Aramex India</h3>
          </a>
          <p>
            MUMBAI, India, Dec. 20, 2022 /PRNewswire/ -- DTDC Express Ltd, one
            of India's leading Integrated Express Logistics companies offering
            domestic and international delivery solutions, has signed a
            non-binding MoU with Aramex India Private Limited...
          </p>
          <a className="Readdiv" href="">
            READ MORE +
          </a>
        </div>
      </div>
    </div>
  );
};

export default SixthBody;
