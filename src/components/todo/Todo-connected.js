import React, { useContext } from 'react';
import TodoForm from './Form.js';
import TodoList from './List.js';
import { AuthContext } from './context/auth-context';
import useAxios from './hooks/useAxios';
import '../design/Todo.scss';
import Signup from './Signup';
import Signin from './Signin';

const ToDo = () => {
  const authContext = useContext(AuthContext);
  const [list, _getTodoItems, _toggleComplete, _addItem, _deleteComplete] =
    useAxios();
  console.log(_getTodoItems);
  return (
    <>
      <Signin /> <Signup />
      <header>
        <h2>
          There are {list.filter(item => !item.complete).length} Items To
          Complete
        </h2>
      </header>
      <section className='todo'>
        <div>
          <TodoForm handleSubmit={_addItem} />
        </div>

        <div>
          <TodoList
            list={list}
            handleComplete={_toggleComplete}
            deleteH={_deleteComplete}
            editor={_toggleComplete}
          />
        </div>
      </section>
    </>
  );
};

export default ToDo;
