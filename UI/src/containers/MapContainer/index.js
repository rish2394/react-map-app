import React, { Component } from 'react';
import MapPresentation from '../../components/MapPresentation';

/* This component will render the Map */
class MapContainer extends Component {

  constructor(props) {
    super(props);
    this.markers = this.transformVehicleObject(this.props.vehicles);
    this.defaultLat = this.props.defaultLat;
    this.defaultLng = this.props.defaultLng;
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.handleMarkerClose = this.handleMarkerClose.bind(this);
  }
  /* this function will transform ur json object into json object suitable for GoogleMap */
  /* creating markers jsn object */
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
            showInfo: false,
            infoContent: objectID

      }
    });
    return markers;
  }

  componentWillReceiveProps(nextProps) {
    this.markers = this.transformVehicleObject(nextProps.vehicles);
    this.defaultLat = nextProps.defaultLat;
    this.defaultLng = nextProps.defaultLng;
  }
  /* trigger when a marker is clicked and pop out objectID */
  handleMarkerClick(targetMarker) {
      this.markers = this.markers.map(marker => {
      if (marker === targetMarker) {
        return {
          ...marker,
          showInfo: true,
        };
      }
      return marker;
    });
    this.forceUpdate();
  }
  /* trigger on clicking cross button on opened marker */
  handleMarkerClose(targetMarker) {
    this.markers = this.markers.map(marker => {
      if (marker === targetMarker) {
        return {
          ...marker,
          showInfo: false,
        };
      }
      return marker;
    });
    this.forceUpdate();
  }
  render() {
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
          onMarkerClick={this.handleMarkerClick}
          onMarkerClose={this.handleMarkerClose}
     />
    );
  }
}

export default MapContainer;
