import React, { useState } from 'react';
import { ListGroup, Button, Form } from 'react-bootstrap';
import { If, Else } from './IF';
import Card from './Card';

const List = props => {
  const [id, setId] = useState('');
  const [flag, setFlag] = useState(false);

  const toggle = id => {
    setFlag(!flag);
    setId(id);
    // props.updateState(id);
  };
  const editor = e => {
    e.preventDefault();
    toggle(id);
    let newUpdate = e.target.text.value;
    props.editor(id);
  };

  return (
    <ListGroup>
      {props.list.map(
        item => (
          <>
            <If condition={item.complete}>
              <Card color={'danger'} />
            </If>
            <Else condition={item.complete}>
              <Card color={'success'} asignee={item.asignee} />
            </Else>
            {/* <If condition={item.complete}>
              <Button
                variant='outline-danger'
                onClick={() => props.deleteH(item._id)}
                value={item._id}
              >
                Delete
              </Button>
              <Button
                variant='outline-secondary'
                onClick={() => toggle(item._id)}
                value={item._id}
              >
                Edit
              </Button>{' '}
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
              <If condition={flag}>
                <Form onSubmit={editor}>
                  <Form.Label>
                    <span>Edit Task</span>
                    <Form.Control type='text' name='text' />
                  </Form.Label>
                  <Button variant='outline-secondary' type='submit'>
                    Submit Edit
                  </Button>
                </Form>
              </If>
            </If>

            <Else condition={item.complete}>
              <Button
                variant='outline-danger'
                onClick={() => props.deleteH(item._id)}
                value={item._id}
              >
                Delete
              </Button>
              <Button
                variant='outline-secondary'
                onClick={() => toggle(item._id)}
                value={item._id}
              >
                Edit
              </Button>{' '}
              <ListGroup.Item
                action
                variant='success'
                key={item._id}
                onClick={() => props.handleComplete(item._id)}
                className={`complete-${item.complete.toString()}`}
              >
                {`${item.text}, difficulty:${item.difficulty}, assignee:${item.assignee}`}
              </ListGroup.Item>
              <If condition={flag}>
                <Form onSubmit={editor}>
                  <Form.Label>
                    <span>Edit Task</span>
                    <Form.Control type='text' name='text' />
                  </Form.Label>
                  <Button variant='outline-secondary' type='submit'>
                    Submit Edit
                  </Button>
                </Form>
              </If>
            </Else> */}
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
