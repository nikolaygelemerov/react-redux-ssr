import React, { Fragment } from 'react';

const Home = () => {
  return (
    <Fragment>
      <div className="Home Kura">I'm the component</div>
      <button onClick={() => console.log('Hi there!')}>Press me!</button>
    </Fragment>
  );
};

export default Home;
