import {compose} from 'recompose';
import withQuery from '@lib/withQuery';
import {getUser} from '@api/queries';
import Demo from './Demo';

export default compose(
  withQuery({
    query: getUser,
    props: ({data: {user}, ...props}) => ({
      ...user,
      ...props,
    }),
  }),
)(Demo);
