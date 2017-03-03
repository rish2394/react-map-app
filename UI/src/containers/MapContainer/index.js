import React, { Component } from 'react';
import MapPresentation from '../../components/MapPresentation';

class MapContainer extends Component {

  constructor(props) {
    super(props);
    this.markers = this.transformVehicleObject(this.props.vehicles);
    this.defaultLat = this.props.defaultLat;
    this.defaultLng = this.props.defaultLng;
  }
  transformVehicleObject(vehicles) {
    const markers = vehicles.map((vehicle, index) => {
      const {objectID, latitude, longitude} = vehicle;
      return {

            position: {
              lat: Number(latitude),
              lng: Number(longitude)
            },
            key: objectID,
            defaultAnimation: 2,

      }
    });
    return markers;
  }
  componentWillReceiveProps(nextProps) {
    this.markers = this.transformVehicleObject(nextProps.vehicles);
    this.defaultLat = nextProps.defaultLat;
    this.defaultLng = nextProps.defaultLng;
  }
  render() {
    console.log(this.markers);
    return (
      <MapPresentation
          containerElement={
              <div style={{ height: `1000px` }} />
          }
          mapElement={
           <div style={{ height: `1000px` }} />
          }
          markers={this.markers}
          style={{height: '75%', width: '75%'}}
          defaultLat={this.defaultLat}
          defaultLng={this.defaultLng}
     />
    );
  }
}

export default MapContainer;
