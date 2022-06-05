import React, { Fragment } from "react";
import img from "../images/cruiseship.jpg"
import { useSearchParams } from 'react-router-dom';

function DisplayError() {
  const [searchParams, setSearchParams] = useSearchParams();
  var error = searchParams.get("error");
  var errormsg = searchParams.get("error_description");
  if (error != null) {
    return <p>{error} : {errormsg}</p>
  }

  return '';
}

function CruiseShipImage(){
    return <img src={img} alt="Cruise1, Ahoi!"/>
   }
  
const Home = () => (
  <Fragment>
    {CruiseShipImage()}      
    <p>
        Cruise1
    </p>
    {DisplayError()}
  </Fragment>
);

// const Home = () => {return (<h2>HOME</h2>)}

export default Home;
