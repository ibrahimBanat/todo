import React, { useEffect, useState } from 'react';
import TodoForm from './Form';
import TodoList from './List';

import '../design/Todo.scss';
import Header from './Header';

const Todo = props => {
  const [list, setList] = useState([]);
  const [count, setCount] = useState();
  console.log(list);
  const addItem = item => {
    item._id = Math.random();
    item.complete = false;
    setList([...list, item]);
  };
  const toggleComplete = id => {
    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let list2 = list.map(listItem =>
        listItem._id === item._id ? item : listItem
      );
      setCount(list.filter(item => !item.complete).length);
      setList(list2);
    }
  };

  useEffect(() => {
    let list = [
      {
        _id: 1,
        complete: false,
        text: 'Clean the Kitchen',
        difficulty: 3,
        assignee: 'Person A',
      },
      {
        _id: 2,
        complete: false,
        text: 'Do the Laundry',
        difficulty: 2,
        assignee: 'Person A',
      },
      {
        _id: 3,
        complete: false,
        text: 'Walk the Dog',
        difficulty: 4,
        assignee: 'Person B',
      },
      {
        _id: 4,
        complete: true,
        text: 'Do Homework',
        difficulty: 3,
        assignee: 'Person C',
      },
      {
        _id: 5,
        complete: false,
        text: 'Take a Nap',
        difficulty: 1,
        assignee: 'Person B',
      },
    ];
    console.log('after mount', list);
    setList(list);
    setCount(list.filter(item => !item.complete).length || 0);
  }, []);
  useEffect(() => {
    document.title = `To Do List: ${count}`;
  }, [count]);
  return (
    <React.Fragment>
      <Header color={'primary'} text={'Home'} />

      <section className='todo'>
        {/* <div>
          <h2>There are {count} Items To Complete</h2>
        </div> */}
        <Header color={'dark'} text={`To Do List Manager (${count})`} />
        <div class='sec--ctr'>
          <div class='form--div'>
            <TodoForm handleSubmit={addItem} />
          </div>

          <div>
            <TodoList list={list} handleComplete={toggleComplete} />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Todo;
