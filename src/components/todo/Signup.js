import React, { useState, useContext } from 'react';
import { AuthContext } from './context/auth-context';

const If = props => {
  return props.condition ? props.children : null;
};

const SignUp = props => {
  const authContext = useContext(AuthContext);

  const [state, setState] = useState({
    username: '',
    password: '',
    email: '',
    role: 'user',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    authContext.signup(state.username, state.password, state.email, state.role);
  };

  return (
    <>
      <If condition={AuthContext.loginStatus}>
        <></>
      </If>

      <If condition={!AuthContext.loginStatus}>
        <form onSubmit={handleSubmit}>
          <input
            required
            type='email'
            placeholder='email'
            name='email'
            onChange={handleChange}
          />
          <input
            required
            placeholder='UserName'
            name='username'
            onChange={handleChange}
          />
          <input
            required
            placeholder='password'
            name='password'
            onChange={handleChange}
          />
          <input placeholder='role' name='role' onChange={handleChange} />

          <button>Sign Up</button>
        </form>
      </If>
    </>
  );
};

export default SignUp;
