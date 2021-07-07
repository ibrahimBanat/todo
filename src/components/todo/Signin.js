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

  const context = useContext(AuthContext);
  console.log(context);

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
    context.signin(userState.username, userState.password);
  };

  return (
    <React.Fragment>
      <If condition={context.loginStatus}>
        <button onClick={context.signout}>Siginout</button>
      </If>
      <If condition={!context.loginStatus}>
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
