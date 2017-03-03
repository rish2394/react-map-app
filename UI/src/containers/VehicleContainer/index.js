import React, { Component } from 'react';
import VehicleList from '../../components/VehicleListPresentation/VehicleList';

/* This component will render the list of items */
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
