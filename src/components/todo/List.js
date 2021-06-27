import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { If, Else } from './IF';

const List = props => {
  const [clicked, setClicked] = useState();

  return (
    <ListGroup>
      {props.list.map(
        item => (
          <>
            <If condition={item.complete}>
              <ListGroup.Item
                action
                variant='danger'
                key={item._id}
                onClick={e => {
                  props.handleComplete(item._id);
                }}
                className={`complete-${item.complete.toString()}`}
                style={{ textDecoration: 'line-through' }}
              >
                {item.text}, 'difficulty:'{item.difficulty}, 'assignee:'
                {item.assignee}
              </ListGroup.Item>
            </If>

            <Else condition={item.complete}>
              <ListGroup.Item
                action
                variant='success'
                key={item._id}
                onClick={() => props.handleComplete(item._id)}
                className={`complete-${item.complete.toString()}`}
              >
                {`${item.text}, difficulty:${item.difficulty}, assignee:${item.assignee}`}
              </ListGroup.Item>
            </Else>
          </>
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
