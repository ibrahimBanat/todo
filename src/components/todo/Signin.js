import React, { useContext, useState } from 'react';
import { AuthContext } from './context/auth-context';
const If = props => {
  return props.condition ? props.children : null;
};
const Signin = () => {
  const [userState, setUserState] = useState({
    username: '',
    password: '',
  });

  const authContext = useContext(AuthContext);

  const handleChange = event => {
    let value = event.target.value;
    let name = event.target.name;
    setUserState({
      ...userState,
      [name]: value,
    });
  };
  const handleSubmit = event => {
    event.preventDefault();
    authContext.signin(userState.username, userState.password);
  };

  return (
    <React.Fragment>
      <If condition={authContext.loginStatus}>
        <button onClick={authContext.signout}>Siginout</button>
      </If>
      <If condition={!authContext.loginStatus}>
        <form onSubmit={handleSubmit}>
          <input
            required
            placeholder='Username'
            name='username'
            onChange={handleChange}
          />
          <input
            required
            placeholder='Password'
            name='password'
            onChange={handleChange}
          />
          <button>sign in</button>
        </form>
      </If>
    </React.Fragment>
  );
};

export default Signin;
