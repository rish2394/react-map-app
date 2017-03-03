import React from 'react';

const VehiclesPresentation = ({ vehicles, onClickLocate }) => {
  return (
    <ul className="list-group">
      {vehicles.map((vehicle, index) => {
        const {objectID, timestamp, latitude, longitude, avatar} = vehicle;

        return (
          <li className="list-group-item" key={ objectID }>
            <button
              className="btn btn-danger pull-right"
              value={objectID}
              onClick={onClickLocate}
            >
            Locate Me
            </button>
            <img alt="car" src={avatar} className="avatar img-responsive" />
            <div>Item Name: {objectID}</div>
            <div>TimeStamp: {timestamp}</div>
            <div>Latitude: {latitude}</div>
            <div>Longitude: {longitude}</div>
          </li>
        )
      })}
   </ul>
  );
};
export default VehiclesPresentation;
