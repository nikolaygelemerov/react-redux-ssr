import React, { Fragment } from 'react';

import Test from './test/Test';

const Home = () => {
  return (
    <Fragment>
      <div className="Home Client">I'm s Niki</div>
      <button onClick={() => console.log('Hi there!')}>Press me!</button>
      <Test />
    </Fragment>
  );
};

export default Home;
