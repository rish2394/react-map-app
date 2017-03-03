import React from 'react';
import { Route } from 'react-router-dom';
import HomeContainer from './containers';

const Routes = () => {
  return (
    <div className="container">
      <Route exact pattern="/" component={HomeContainer} />
    </div>
  );
};

export default Routes;
