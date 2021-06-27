import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';

const Index = () => {
  return <App />;
};

const rootElement = document.getElementById('root');
ReactDOM.render(<Index />, rootElement);
