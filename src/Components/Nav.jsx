import React from "react";

export const Nav = () => {
  const Submit = () => {
    alert("Please Don't Click Me");
  };

  return (
    <div className="Div1">
      <div>
      <img src="https://www.dtdc.in/img/logos/logo.png" alt="" srcset="" />
      </div>
      <div className="subdiv1" >  
      <span>

        <a href=""> Companyˬ </a>
      </span>
      <span>
        <a href="">Our Servicesˬ</a>
      </span>
      <span>
        <a href=""> Grow With Usˬ </a>
      </span>
      <span>
        <a href="">Careersˬ</a>
      </span>
      <span>
        <a href="">Contact Usˬ</a>
      </span>
      </div>
      <div>
      <span>
        <button onClick={Submit}>Ship with MyDTDC</button>
      </span>
      </div>
    </div>
  );
};
