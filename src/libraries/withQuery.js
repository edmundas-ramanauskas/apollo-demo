import {identity} from 'ramda';
import {graphql} from 'react-apollo';
import {branch, compose, mapProps, renderNothing} from 'recompose';
import {withErrorBoundary} from 'react-error-boundary';

const isLoading = key => props => {
  return props[key] && props[key].loading;
};

export default ({
  query,
  name = 'data',
  options = {},
  props = identity,
  loader = renderNothing,
}) =>
  compose(
    withErrorBoundary,
    graphql(query, {name, options}),
    branch(isLoading(name), loader),
    mapProps(props),
  );
