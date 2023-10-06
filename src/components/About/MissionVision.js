import React from "react";
import "../styles/App.css";
import { SiPowerbi } from "react-icons/si";
import { FaRegEye } from "react-icons/fa";
import { GiBullseye } from "react-icons/gi";

const MissionVision = () => {
  return (
    <div style={{ background: "#34A853" }} className="py-3">
      <h4 className="text-center text-white">Acknoweledge</h4>
      <div className="boxarea">
        <div className="singlebox">
          <div className="imgarea py-2">
            <GiBullseye />
          </div>
          <div className="imgtxt">
            <span>
              <strong>Mission</strong>
            </span>
            <p>
              {" "}
              Our Mision is to help our students discover their abilities and
              reach their dreams in a happy, supportive learning atmosphere. We
              promote unity and the idea of helping others as we guide them on
              their journey towards success.We also emphasize the importance of helping others.
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
              commitment to academic excellence,ensuring students are
              well-prepared for the challenges of the future.
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
              Our vision is rooted in a strong commitment to societal welfare.
              We take pride in our students who actively contribute to fields
              like engineering, medical science, and research. We aim to instill
              in them a sense of responsibility and purpose, inspiring them to
              make meaningful and positive impacts on society.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
