import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';

const List = props => {
  const [clicked, setClicked] = useState();

  return (
    <ListGroup>
      {props.list.map(
        item =>
          item.complete ? (
            <ListGroup.Item
              action
              variant='warning'
              key={item._id}
              completed={item.complete}
              onClick={e => {
                props.handleComplete(item._id);
              }}
              className={`complete-${item.complete.toString()}`}
              style={{ textDecoration: 'line-through' }}
            >
              {item.text}
            </ListGroup.Item>
          ) : (
            <ListGroup.Item
              action
              variant='success'
              key={item._id}
              completed={item.complete}
              onClick={() => props.handleComplete(item._id)}
              className={`complete-${item.complete.toString()}`}
            >
              {item.text}
            </ListGroup.Item>
          )

        // <li className={`complete-${item.complete.toString()}`} key={item._id}>
        //   <span onClick={() => props.handleComplete(item._id)}>
        //     {item.text}
        //   </span>
        // </li>
      )}
    </ListGroup>
  );
};

export default List;
