import React, { Fragment } from "react";
import img from "../images/cruiseship.jpg"
import { useSearchParams } from 'react-router-dom';

function DisplayError() {
  const [searchParams] = useSearchParams();
  var error = searchParams.get("error");
  var errormsg = searchParams.get("error_description");
  if (error != null) {
    return <p>{error} : {errormsg}</p>
  }

  return '';
}

function CruiseShipImage(){
    return <img src={img} alt="Cruise1, Ahoi!" className="photo"/>
   }
  
const Home = () => (
  <Fragment>
    {CruiseShipImage()}      
    <h1>Cruise1</h1>
      <div className="iternary">
        <h2>Iternary</h2>
        <ol>
          <li><b>Introduction</b> - The management console and the connection to a SPA.</li>
          <li><b>Universal Login</b> - How the new login experience can be customized.</li>
          <li><b>Social login</b> - Enable social identity providers for your app.</li>
          <li><b>Email verification</b> - Multiple ways to ensure verified emails.</li>
          <li><b>Account linking</b> - Avoid duplicate accounts with social login.</li>
        </ol>
    </div>
    {DisplayError()}
  </Fragment>
);

// const Home = () => {return (<h2>HOME</h2>)}

export default Home;
