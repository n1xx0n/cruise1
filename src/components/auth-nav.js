// src/components/auth-nav.js

import React from 'react';
import AuthenticationButton from './authentication-button';
import SignupButton from './signup-button';

const AuthNav = () => (
  <div className="navbar-nav ml-auto">
    <AuthenticationButton />
  </div>
);

export default AuthNav;