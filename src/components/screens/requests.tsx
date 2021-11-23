import * as React from 'react';

import { RequestList } from 'features';

export function Requests() {
  return (
    <React.Fragment>
      <RequestList
        requests={[
          {
            date: '2021-11-22',
            done: true,
            establishment: 'Sei la',
            number: 1,
          },
          {
            date: '2021-11-22',
            done: false,
            establishment: 'Sei la',
            number: 2,
          },
        ]}
      />
    </React.Fragment>
  );
}
