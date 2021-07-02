import React, { useContext, useState, useEffect } from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import { If, Else } from './IF';
import Card from './Card';
import { SettingContext } from './context/setting-context';

const List = props => {
  const settingContext = useContext(SettingContext);
  const [index, setIndex] = useState(0);
  const [stopIndex, setStopIndex] = useState(settingContext.itemPage);
  let length = props.list.length;

  const nextPage = () => {
    if (stopIndex < length) {
      setIndex(index + settingContext.itemPage);
      setStopIndex(stopIndex + settingContext.itemPage);
    }
  };
  const prevPage = () => {
    if (index > 0) {
      setIndex(index - settingContext.itemPage);
      setStopIndex(stopIndex - settingContext.itemPage);
    }
  };
  console.log(settingContext.itemPage);
  // useEffect(() => {
  //   setStopIndex(index + SettingContext.itemPage);
  // }, [index]);
  return (
    <ListGroup>
      {props.list
        .filter(item => (settingContext.completed ? true : !item.complete))
        .sort((a, b) => {
          let x;
          settingContext.difficulty === 'Ascending' ? (x = -1) : (x = 1);
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
        .map(item => (
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
          </>
        ))}
      <div className='buttons'>
        <Button onClick={prevPage}> Previous </Button>
        <Button onClick={nextPage}> Next </Button>
      </div>
    </ListGroup>
  );
};

export default List;
