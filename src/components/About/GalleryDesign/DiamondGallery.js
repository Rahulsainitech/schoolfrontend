import React, { useEffect, useState } from "react";
import "./gallerydiamond.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllFacultyImages } from "../../Action/userAction";
import { Image } from "react-bootstrap";
import Loader from "../../Warning/Loader";
const DiamondGallery = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.getAllFacultyImgReducer);
  const { users, error, loading } = userState;
  console.log("sare faculty images", users);
  const [facultyImage,setFacultyImage]=useState([])
  useEffect(() => {
    setFacultyImage(users)
    dispatch(getAllFacultyImages());
  }, [dispatch]);
  // const func = () => {
  //   if (facultyImage) {
  //     return "url(facultyImage[0].url)";
  //   } else {
  //     return "#000";
  //   }
  // };
  return (
    <div
      className="main"
      style={{ height: "60vh", position: "relative", marginTop: "3rem" }}
    >
        <ul className="ul">
          <li className="item1 li">
            <div className="bg">
              <Image
                src={'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png'}
                style={{
                  overflow: "hidden",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "100%",
                  height:"100%",
                  transform:"rotate(-45deg) scale(1.5)"
                }}
              />
            </div>
          </li>
          <li className="item2 li">
            <div className="bg">
            <Image
                src={'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png'}
                style={{
                  overflow: "hidden",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginTop:"-1rem",
                  width: "100%",
                  height:"100%",
                  transform:"rotate(-45deg) scale(1.5)"
                }}
              />
            </div>
          </li>
          <li className="item3 li">
            <div className="bg">
            <Image
                src={"https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png"}
                style={{
                  transform: "rotate(-45deg)",
                  overflow: "hidden",
                  display: "block",
                  marginLeft: "2rem",
                  marginRight: "auto",
                  width: "120%",
                  height:"100%",
                  transform:"rotate(-45deg) scale(1.3)"
                }}
              />
            </div>
          </li>
          <li className="item4 li">
            <div className="bg">
            <Image
                src={"https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png"}
                style={{
                  transform: "rotate(-45deg)",
                  overflow: "hidden",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "130%",
                  height:"120%"
                }}
              />
            </div>
          </li>
          <li className="item5 li">
            <div className="bg">
            <Image
                src={"https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png"}
                style={{
                  transform: "rotate(-45deg)",
                  overflow: "hidden",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "100%",
                  height:"100%",
                  transform:"rotate(-45deg) scale(1.5)"
                }}
              />
            </div>
          </li>
        </ul>
    </div>
  );
};

export default DiamondGallery;
