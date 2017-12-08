import React, { Component } from 'react';
import Helmet from 'react-helmet';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>My Title</title>
        </Helmet>
        <h1>HomePage</h1>
      </div>
    );
  }
}

export default HomePage;
