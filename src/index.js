import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";


// ReactDOM.render(
//   <Auth0Provider
//     domain="n1xx0n.eu.auth0.com"
//     clientId="B3NfaSTOOMW0pSxVeKlNyBcFPf4IbwwX"
//     redirectUri={window.location.origin}  // place to go after login with auth0
//   >
//   <App />
//   </Auth0Provider>,
//   document.getElementById("root")
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="n1xx0n.eu.auth0.com"
    clientId="B3NfaSTOOMW0pSxVeKlNyBcFPf4IbwwX"
    redirectUri={window.location.origin}  // place to go after login with auth0
  >
  <App />
  </Auth0Provider>,
  // document.getElementById("root")
);
