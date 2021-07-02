import React, { useContext, useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { If, Else } from './IF';
import Card from './Card';
import SettingContext from './context/setting-context';

const List = props => {
  const settingContext = useContext(SettingContext);
  const [index, setIndex] = useState(0);
  const [stopIndex, setStopIndex] = useState(SettingContext.itemPage);
  let length = props.list.length;

  useEffect(() => {
    setStopIndex(index + SettingContext.itemPage);
  }, [SettingContext.itemPage, index]);
  return (
    <ListGroup>
      {props.list
        .filter(item => (SettingContext.completed ? true : !item.complete))
        .sort((a, b) => {
          let x;
          SettingContext.difficulty === 'Ascending' ? (x = -1) : (x = 1);
          if (a.difficulty > b.difficulty) {
            return x;
          }
          if (a.difficulty < b.difficulty) {
            return x * -1;
          } else {
            return 0;
          }
        })
        .slice(index, stopIndex)
        .map(
          item => (
            <>
              <If condition={item.complete}>
                <Card
                  color={'success'}
                  asignee={item.assignee}
                  title={item.text}
                  diff={item.difficulty}
                  key={item._id}
                  callDelete={() => {
                    props.deleteH(item._id);
                  }}
                  callToggle={() => {
                    props.handleComplete(item._id);
                  }}
                  badge={'Completed'}
                />
              </If>
              <Else condition={item.complete}>
                <Card
                  color={'danger'}
                  asignee={item.assignee}
                  title={item.text}
                  diff={item.difficulty}
                  key={item._id}
                  callDelete={() => {
                    props.deleteH(item._id);
                  }}
                  callToggle={() => {
                    props.handleComplete(item._id);
                  }}
                  badge={'In Progress'}
                />
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
