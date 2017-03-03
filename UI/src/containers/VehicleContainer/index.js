import React, { Component } from 'react';
import VehicleList from '../../components/VehicleListPresentation/VehicleList';

class VehicleContainer extends Component {
  render() {
    const { vehicles, onClickLocate } = this.props;
    return (
      <div>
       <VehicleList vehicles={vehicles} onClickLocate={onClickLocate}/>
      </div>
    );
  }
}

export default VehicleContainer;
