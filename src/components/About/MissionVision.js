import React from 'react'
import "../styles/App.css";
import {SiPowerbi} from 'react-icons/si'
import {FaRegEye} from "react-icons/fa";
import {GiBullseye} from "react-icons/gi"

const MissionVision = () => {
  return (
    
        <div className="boxarea">
        <div className="singlebox">
            <div className="imgarea"><GiBullseye/></div>
                <div className="imgtxt">
                    <span ><strong>Mission</strong></span>
                    <p> Our mission  is to nurture our students to realize their own potential and identify and achieve their goals in an environment of rich tutelage, joyful and harmonious learning while keeping alive the spirit of togetherness and ‘Service Before Self’.</p>
                </div>
        </div>
        <div className="singlebox">
            <div className="imgarea" ><SiPowerbi/></div>
                <div className="imgtxt">
                    <span><strong>Our Strenth</strong></span>
                    <p>Our mission  is to nurture our students to realize their own potential and identify and achieve their goals in an environment of rich tutelage, joyful and harmonious learning while keeping alive the spirit of togetherness and ‘Service Before Self’. </p>
                </div>
        </div>
        <div className="singlebox">
            <div className="imgarea"><FaRegEye/></div>
                <div className="imgtxt">
                    <span ><strong>Our Vision</strong></span>
                    <p> Our mission  is to nurture our students to realize their own potential and identify and achieve their goals in an environment of rich tutelage, joyful and harmonious learning while keeping alive the spirit of togetherness and ‘Service Before Self’. </p>
                </div>
            </div>
    </div>
    
  )
}

export default MissionVision