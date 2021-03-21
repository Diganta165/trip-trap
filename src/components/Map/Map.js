import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
    lat: 23.825159,
    lng: 90.371089
};

function Map() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCdHZ5LUlQU2F8wOBx6Q4qfMCYsfJDpQJU"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={18}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)