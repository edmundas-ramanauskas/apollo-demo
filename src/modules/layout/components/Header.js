import React from 'react';
import styled from '@emotion/styled'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from '@lib/components';
import {home} from '@app/routes';

const HomeLink = styled(Link)({
  color: 'white',
  ':hover': {
    color: 'white',
  },
});

const Header = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand as="span">
        <HomeLink to={home()}>
          Apollo
        </HomeLink>
      </Navbar.Brand>
    </Container>
  </Navbar>
);

export default Header;
