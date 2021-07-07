import React, { useState } from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';
import axios from 'axios';

export const AuthContext = React.createContext();
const API = 'https://api-js401.herokuapp.com';

const AuthProvider = props => {
  const [loginStatus, setLoginStatus] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  const signin = async (username, password) => {
    try {
      let response = await axios({
        method: 'POST',
        url: `${API}/sigin`,
        body: {},
        headers: {
          mode: 'cors',
          cache: 'no-cache',
        },
        auth: {
          username: username,
          password: password,
        },
      });
      validateToken(response.data.token);
    } catch (error) {
      console.error(error);
    }
  };

  const signup = async (username, password, email, role) => {
    try {
      const user = {
        username: username,
        password: password,
        email: email,
        role: role,
      };
      let response = await axios({
        method: 'POST',
        url: `${API}/signup`,
        body: { user },
        headers: {
          mode: 'cors',
          cache: 'no-cache',
          contentType: 'application/json',
        },
      });
      validateToken(response.data.token);
    } catch (error) {
      console.log(error);
    }
  };
  const validateToken = token => {
    try {
      let user = jwt.decode(token);
      LoginStatus(!!user, token, user);
    } catch (error) {
      LoginStatus(false, null, {});
      console.log(`Validation Error: ${error}`);
    }
  };
  const signout = () => {
    LoginStatus(false, null, {});
  };
  const LoginStatus = (loginStatus, token, user) => {
    cookie.save('auth', token);
    setLoginStatus(loginStatus);
    setUserInfo(user);
  };
  const state = {
    loginStatus,
    signin,
    signout,
    signup,
    userInfo,
  };
  return (
    <AuthContext.Provider value={state}>{props.children}</AuthContext.Provider>
  );
};

export default AuthProvider;
