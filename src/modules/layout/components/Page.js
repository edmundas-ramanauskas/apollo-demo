import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {SingleColumnLayout} from '@lib/components';
import Header from './Header';

const Container = styled(SingleColumnLayout)({
  marginTop: 20,
  marginBottom: 20,
});

const Page = ({children}) => (
  <>
    <Header />
    <Container>{children}</Container>
  </>
);

Page.propTypes = {
  children: PropTypes.node,
};

export default Page;
