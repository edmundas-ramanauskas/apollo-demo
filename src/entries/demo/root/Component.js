import React from 'react';
import {ApolloProvider} from 'react-apollo';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import asyncComponent from '@lib/asyncComponent';
import {getClient} from '@api';

const Demo = asyncComponent(() => import('@app/demo'));
const client = getClient();

const Root = () => (
  <ApolloProvider client={client}>
    <Router>
      <Switch>
        <Route exact path="/" component={Demo} />
        <Redirect to="/" />
      </Switch>
    </Router>
  </ApolloProvider>
);

export default Root;
