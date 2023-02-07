import React,{useEffect} from "react";
import "./event.css";
import {useDispatch,useSelector} from "react-redux";
import { getSplImage } from '../../Action/imageAction';
import Loader from "../../Warning/Loader";
import Error from "../../Warning/Error";


const NewsAndEvent = () => {
  const dispatch = useDispatch()
  const userState = useSelector(state=>state.getSplImgReducer)
  const { allimages, error, loading } = userState;
  console.log(allimages,"specialimages")
  useEffect(() => {
    dispatch( getSplImage());
  }, [dispatch]);
  return (
    <>
    {loading && <Loader/>}
    {error && <Error error={"error while loading events :" + error} />}
    <h4 className="text-center text-danger">Our Student</h4>
      <ul className="honeycomb">
       {allimages && allimages.data.map(img => {return(
        <li className="honeycomb-cell" id={img._id}>
          <img className="honeycomb-cell_img" src={img.image} alt={img.category} />
          <dic className="honeycomb-cell_title">{img.description}</dic>
        </li>
       )}) }
       <li className="honeycomb-cell honeycomb_Hidden">
          <img className="honeycomb-cell_img" src="https://dais.edu.in/images/photogallery.jpg" alt="jfk"/>
          <dic className="honeycomb-cell_title">School level poster making competition</dic>
        </li>
      </ul>
    </>
  );
};

export default NewsAndEvent;
