import React from "react";
import Logo from "../styles/logo.png";
import "../styles/App.css";

const PreNav = () => {
  return (
    
        <div className="prenav">
          <div className="pre col-3 col-md-3">
            <img src={Logo} alt="logo" style={{height:"140px",width:'150px'}} />
          </div>
          <div className="pre col-9 col-md-6">
            <h1 className="text-center">
              Sarvodaya Public School
              <br />{" "}
              <span className="display-4 col-12 text-center">
                {" "}
                We believe in excellence
              </span>
            </h1>
          </div>
          <div className="pre col-md-3">
            <p>
              <span>
                <i className="fas fa-phone-square-alt"></i>Contact us
              </span>
              <br />
              Firozepur Jhirka
              <br />
              Mewat,Haryana
              <br />
              Phone:989448478
              <br />
              Email:rahul@gmail.com
            </p>
          </div>
        </div>
      
  );
};

export default PreNav;
