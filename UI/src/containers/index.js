import React, {Component} from 'react';
import axios from 'axios';
import _ from 'lodash';
import VehicleContainer from './VehicleContainer';
import Spinner from '../components/Spinner/Spinner.js';
import MapContainer from './MapContainer';

class HomeContainer extends Component {
  // this is the state of our component which will change over and the component  and its children will re-render
  state = {
    vehicles: [],
    defaultLat: 20.5937,
    defaultLng: 78.9629
  }
  componentDidMount() {
    /* sending requestion to the server here to fetch data using axios*/
    setInterval(
      () =>  axios.get('http://192.168.1.42:3002/api/v1/vehicle-info')
                  .then((res) => {
                       return res.data;
                  })
                  .then((data) => {
                    this.setState({vehicles: data})
                  }),
      10000
    );
      
  }
  onClickLocate = (evt) => {
    evt.preventDefault();
    const { vehicles } = this.state;
    // getting object id of the item clicked
    const objectID = evt.target.value;

    // finding the index of the item clicked
    const index = _.findIndex(vehicles, (vehicle) => (vehicle.objectID === objectID ));

    // fetching the information of clicked item and printing on alert
    // alert(JSON.stringify(vehicles[index], null, 2));
    this.setState({defaultLat: vehicles[index].latitude, defaultLng: vehicles[index].longitude});
  }
  render() {
    const { vehicles } = this.state;
    /* Until  json data is not fetched from server it is good to show user some spinner for good UI experience*/


    if(!vehicles.length) {
      return (
        <div className="text-center">
         <Spinner heading="Vehicle-List"/>
       </div>
     );
    }
    return (
      <div>
        <div className="col-lg-6">
          <VehicleContainer vehicles={vehicles} onClickLocate={this.onClickLocate}/>
        </div>
        <div className="col-lg-6">
          <MapContainer {...this.state} />
        </div>
      </div>
    );
  }
};

export default HomeContainer;
