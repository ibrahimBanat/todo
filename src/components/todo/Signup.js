import React, { useState, useContext } from 'react';
import { LoginContext } from './context.js';

const If = props => {
  return props.condition ? props.children : null;
};

const SignUp = props => {
  // static contextType = LoginContext;
  const context = useContext(LoginContext);

  const [state, setState] = useState({
    username: '',
    password: '',
    email: '',
    role: 'user',
  });

  const handleChange = e => {
    console.log(state[`${e.target.name}`]);

    const { name, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));

    console.log(state);
  };

  const handleSubmit = e => {
    e.preventDefault();
    context.signup(state.username, state.password, state.email, state.role);
  };

  return (
    <>
      <If condition={context.loggedIn}>
        <></>
      </If>

      <If condition={!context.loggedIn}>
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
