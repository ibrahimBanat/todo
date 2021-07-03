import React, { useContext } from 'react';
import { AuthContext } from './context/auth-context';

const If = props => {
  return props.condition ? props.children : null;
};

const Auth = props => {
  const authContext = useContext(AuthContext);
  let render = false;
  try {
    render =
      context.loggedIn &&
      (props.capability
        ? context.user.capabilities.includes(props.capability)
        : true);
  } catch (error) {
    console.log('Not authoriazed');
  }
  return (
    <If condition={render}>
      <div class=''>{props.children}</div>
    </If>
  );
};

export default Auth;
