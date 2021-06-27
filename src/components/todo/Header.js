import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';

const Header = props => {
  return (
    <React.Fragment>
      <Navbar bg={props.color} variant='dark'>
        <Container>
          <Navbar.Brand>{props.text}</Navbar.Brand>
        </Container>
      </Navbar>
    </React.Fragment>
  );
};

export default Header;
