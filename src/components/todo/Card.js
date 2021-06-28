import React from 'react';
import BootStrapCard from 'react-bootstrap/Card';
import { Badge, CloseButton } from 'react-bootstrap';

const Card = props => {
  return (
    <BootStrapCard
      style={{
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
      }}
    >
      <BootStrapCard.Header
        style={{
          backgroundColor: '#fff',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            backgroundColor: '#fff',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <Badge variant={props.color} pill onClick={props.callToggle}>
            {props.badge}
          </Badge>
          <span style={{ color: 'rgba(0,0,0,0.45)', fontWeight: '700' }}>
            {props.asignee}
          </span>
        </div>
        <CloseButton onClick={props.callDelete} />
      </BootStrapCard.Header>
      <BootStrapCard.Body style={{ display: 'flex', flexDirection: 'column' }}>
        <BootStrapCard.Title>{props.title}</BootStrapCard.Title>
        <BootStrapCard.Text
          style={{ alignSelf: 'flex-end', color: 'rgba(0,0,0,0.45)' }}
        >
          Difficulty: {props.diff}
        </BootStrapCard.Text>
      </BootStrapCard.Body>
    </BootStrapCard>
  );
};

export default Card;
