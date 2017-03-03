import React from 'react';
import {withGoogleMap, GoogleMap, Marker} from "react-google-maps";

const MapPresentation = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={3}
    defaultCenter={{ lat: props.defaultLat, lng: props.defaultLng }}
    onClick={props.onMapClick}
  >
    {props.markers.map(marker => (
      <Marker
        {...marker}
        onRightClick={() => props.onMarkerRightClick(marker)}
      />
    ))}
  </GoogleMap>
));

export default MapPresentation;
