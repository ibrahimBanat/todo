import React, { useEffect, useState } from 'react';
import TodoForm from './Form';
import TodoList from './List';
import useAxios from './hooks/useAxios';

import '../design/Todo.scss';
import Header from './Header';

const Todo = props => {
  const [list1, _getTodoItems, _toggleComplete, _addItem, _deleteComplete] =
    useAxios();
  const [list, setList] = useState([]);
  const [count, setCount] = useState();
  console.log(list);

  const addItem = item => {
    // item._id = Math.random();
    // item.complete = false;
    _addItem(item);
    // setList([...list, item]);
    console.log(list1[-1]);
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
  const editor = (text, id) => {
    let item = list.filter(item => item._id === id)[0] || {};
    if (item) {
      item.text = text;
      let list5 = list.map(itm => {
        if (itm._id === id) {
          return item;
        } else {
          return itm;
        }
      });
      setList(list5);
    }
  };
  const updateState = id => {
    setCount(list.filter(item => !item.complete).length);
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
  const deleteH = id => {
    let list4 = list.filter(item => item._id !== id) || {};
    console.log('deleted', list4);
    setList(list4);
    console.log(list.filter(item => !item.complete !== false).length);
    setCount(list4.filter(item => !item.complete).length);
  };

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
            <TodoList
              list={list}
              handleComplete={toggleComplete}
              deleteH={_deleteComplete}
              editor={_toggleComplete}
              updateState={updateState}
            />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Todo;
