import React, { Fragment } from 'react';

const Home = () => {
  return (
    <Fragment>
      <div>I'm the home dsd component</div>
      <button onClick={() => console.log('Hi there!')}>Press me!</button>
    </Fragment>
  );
};

export default Home;
