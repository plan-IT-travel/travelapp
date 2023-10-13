/**
 * ************************************
 *
 * @module  Login.jsx
 * @author  Plan It Travel
 * @date    9-2-23
 * @description renders Login Page
 *
 * ************************************
 */

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import GCID_URI from './clientURLs';
import jwt_decode from 'jwt-decode';

const Login = () => {
  const [user, setUser] = useState({}); // currently using state, but need to use Redux store instead?

  const navigate = useNavigate();

  function handleCallbackResponse(response) {
    const userObject = jwt_decode(response.credential);
    setUser(userObject);
    console.log(userObject);
    fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify(userObject),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(json => console.log(json)).then(() => {
        navigate('/Home');
      });
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: GCID_URI,
      login_uri: '/',
      state_cookie_domain: '/',
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById('signInDiv'), {
      theme: 'outline',
      size: 'large',
    });
    google.accounts.id.prompt();
  }, []);

  return (
    <div id='Login'>
      <h1>Plan It Travel</h1>
      <div id='signInDiv'></div>
    </div>
  );
};

export default Login;
