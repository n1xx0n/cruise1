import React, { Fragment } from "react";
import img from "../images/cruiseship.jpg"

function CruiseShipImage(){
    return <img src={img} alt="Cruise1, Ahoi!"/>
   }
  
const Home = () => (
  <Fragment>
    {CruiseShipImage()}      
    <p>
        Cruise1
    </p>
  </Fragment>
);

// const Home = () => {return (<h2>HOME</h2>)}

export default Home;
