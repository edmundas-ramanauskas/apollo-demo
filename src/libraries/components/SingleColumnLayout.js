import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SingleColumnLayout = ({children, ...props}) => (
  <Container {...props}>
    <Row>
      <Col>{children}</Col>
    </Row>
  </Container>
);

SingleColumnLayout.propTypes = {
  children: PropTypes.node,
};

export default SingleColumnLayout;
