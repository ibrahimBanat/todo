import React from 'react';

// import Todo from './components/todo/Todo';
import Todo from './components/todo/Todo-connected';
import SettingContextProvider from './components/todo/context/setting-context.js';

const App = () => {
  return (
    <React.Fragment>
      <SettingContextProvider>
        <Todo />
      </SettingContextProvider>
    </React.Fragment>
  );
};

export default App;
