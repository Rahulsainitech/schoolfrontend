import React from "react";
import Logo from "../styles/logo.png";
import "../styles/App.css";

const PreNav = () => {
  return (
    
        <div className="prenav">
          <div className="pre col-3 col-md-3">
            <img src={Logo} alt="logo" style={{height:"140px",width:'150px'}} />
          </div>
          <div className="pre col-md-9 col-9">
            <h2 className="text-center">
              Sunrise Public Sr. Secondary School
              <br />{" "}
              <span className="display-4 col-12 text-center">
                {" "}
                We believe in excellence
              </span>
            </h2>
          </div>
          <div className="pre col-md-3">
            <address>
              <span>
                <i className="fas fa-phone-square-alt"></i>Contact us
              </span>
              <br />
              Agon,Firozepur Jhirka
              <br />
              Mewat,Haryana,122104
              <br />
              Phone:9991304077
              <br />
              Email:spsssagon@gmail.com
            </address>
          </div>
        </div>
      
  );
};

export default PreNav;
