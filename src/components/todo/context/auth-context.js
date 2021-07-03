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
  return <AuthContext.Provider>{props.children}</AuthContext.Provider>;
};

export default AuthProvider;
