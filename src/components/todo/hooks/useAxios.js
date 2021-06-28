import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useAxios = () => {
  const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';
  const [list, setList] = useState([]);

  const _addItem = item => {
    item.due = new Date();
    axios({
      method: 'post',
      url: todoAPI,
      mode: 'cors',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    })
      .then(response => response.json())
      .then(savedItem => {
        setList([...list, savedItem]);
      })
      .catch(console.error);
  };

  const _toggleComplete = id => {
    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;

      let url = `${todoAPI}/${id}`;

      axios({
        method: 'put',
        url: todoAPI,
        mode: 'cors',
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item),
      })
        .then(response => response.json())
        .then(savedItem => {
          setList(
            list.map(listItem =>
              listItem._id === item._id ? savedItem : listItem
            )
          );
        })
        .catch(console.error);
    }
  };

  const _getTodoItems = () => {
    axios({
      method: 'get',
      url: todoAPI,
      mode: 'cors',
    })
      .then(data => data.json())
      .then(data => setList(data.results))
      .catch(console.error);
  };

  useEffect(_getTodoItems, []);
  return [_addItem, _toggleComplete, _getTodoItems];
};

export default useAxios;
