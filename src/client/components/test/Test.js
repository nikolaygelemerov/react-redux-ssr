import React, { Component } from 'react';

class Test extends Component {
  componentDidMount() {
    console.log('component did mount');
  }

  render() {
    return <div className="Test">I am test Component</div>;
  }
}

export default Test;
