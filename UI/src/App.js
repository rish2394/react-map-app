import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Routes from './Routes';

injectTapEventPlugin();

const App = () => (
  <Router>
    <MuiThemeProvider>
      <Routes />
    </MuiThemeProvider>
  </Router>
)


export default App;
