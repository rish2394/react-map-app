import React from 'react';
import Match from 'react-router/Match';
import HomeContainer from './containers';

const Routes = () => {
  return (
    <div className="container">
      <Match exactly pattern="/" component={HomeContainer} />

    </div>
  );
};

export default Routes;
