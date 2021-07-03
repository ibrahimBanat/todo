import React, { useState } from 'react';
import cookie from 'react-cookie';
import jwt from 'jsonwebtoken';
import axios from 'axios';

export const AuthContext = React.useContext();
const API = 'https://api-js401.herokuapp.com';

const AuthProvider = props => {
  const [loginStatus, setLoginStatus] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  const login = async (username, password) => {
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
      validateToekn(response.data.token);
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
      setLoginStatus(!!user, token, user);
    } catch (error) {
      setLoginStatus(false, null, {});
      console.log(`Validation Error: ${error}`);
    }
  };
  return <AuthContext.Provider>{props.children}</AuthContext.Provider>;
};

export default AuthProvider;
