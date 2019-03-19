import React from 'react';
import PropTypes from 'prop-types';
import {Page} from '@app/layout';

const Demo = ({name, email}) => {
  return (
    <Page>
      <div>{name}</div>
      <div>{email}</div>
    </Page>
  );
};

Demo.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Demo;
