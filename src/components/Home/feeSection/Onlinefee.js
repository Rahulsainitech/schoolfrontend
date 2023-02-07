import React,{useState} from "react";
import { Button, Container } from "react-bootstrap";
import { GooglePayButton } from "@google-pay/button-react";
// @google-pay/button-react"
const Onlinefee = () => {
  const [color,setColor]=useState(true)
  return (
    <>
      <Button onClick={()=>setColor(!false)}>button</Button>
    </>
  );
};

export default Onlinefee;
