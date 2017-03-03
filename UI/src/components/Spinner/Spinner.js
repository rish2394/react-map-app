import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const Spinner = ({heading}) => (
  <div>
    <CircularProgress size={60} thickness={5} />
    <p>Fetching {heading}</p>
  </div>

);

export default Spinner;
