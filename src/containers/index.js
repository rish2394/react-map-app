import React, {Component} from 'react';
import axios from 'axios';


class HomeContainer extends Component {
  state = {
    vehicle: []
  }
  componentDidMount() {
  }
  render() {
    return (
      <div>
          <h1>Home Component</h1>
      </div>
    );
  }
}

export default HomeContainer;
