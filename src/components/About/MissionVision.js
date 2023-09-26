import React from "react";
import "../styles/App.css";
import { SiPowerbi } from "react-icons/si";
import { FaRegEye } from "react-icons/fa";
import { GiBullseye } from "react-icons/gi";

const MissionVision = () => {
  return (
    <div style={{ background: "#CFFF8D" }} className="py-3">
      <h4 className="text-center text-success">Acknoweledge</h4>
      <div className="boxarea">
        <div className="singlebox">
          <div className="imgarea">
            <GiBullseye />
          </div>
          <div className="imgtxt">
            <span>
              <strong>Mission</strong>
            </span>
            <p>
              {" "}
              Our mission is to nurture our students to realize their own
              potential and identify and achieve their goals in an environment
              of rich tutelage, joyful and harmonious learning while keeping
              alive the spirit of togetherness and ‘Service Before Self’.
            </p>
          </div>
        </div>
        <div className="singlebox">
          <div className="imgarea">
            <SiPowerbi />
          </div>
          <div className="imgtxt">
            <span>
              <strong>Our Strenth</strong>
            </span>
            <p>
              Our strength lies in its exceptional faculty, a team dedicated to
              nurturing students' potential. We boast fully-equipped
              laboratories that foster hands-on learning. Our consistent track
              record of producing outstanding results is a testament to our
              commitment to academic excellence,ensuring students are well-prepared for the challenges of the
              future.
            </p>
          </div>
        </div>
        <div className="singlebox">
          <div className="imgarea">
            <FaRegEye />
          </div>
          <div className="imgtxt">
            <span>
              <strong>Our Vision</strong>
            </span>
            <p>
              Our vision is rooted in a strong commitment to societal
              welfare. We take pride in our students who actively contribute to
              fields like engineering, medical science, and research. We aim to
              instill in them a sense of responsibility and purpose, inspiring
              them to make meaningful and positive impacts on society.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
