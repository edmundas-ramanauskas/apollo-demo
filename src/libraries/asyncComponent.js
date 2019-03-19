/* eslint-disable react/display-name */
import React, {lazy, Suspense} from 'react';

export default function(loadable) {
  const AsyncComponent = lazy(loadable);
  return props => (
    <Suspense fallback={<div>Loading...</div>}>
      <AsyncComponent {...props} />
    </Suspense>
  );
}
