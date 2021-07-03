import React from 'react';
import cookie from 'react-cookie';
import jwt from 'jsonwebtoken';
import axios from 'axios';

export const AuthContext = React.useContext();

const AuthProvider = props => {
  return <AuthContext.Provider>{props.children}</AuthContext.Provider>;
};

export default AuthProvider;
