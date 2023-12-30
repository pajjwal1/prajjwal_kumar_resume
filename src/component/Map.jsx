import React from 'react'
import GoogleMapReact from 'google-map-react'
import './Map.scss'
import LocationOnIcon from '@mui/icons-material/LocationOn';
const LocationPin = ({ text }) => (
    <div className="pin">
      <LocationOnIcon className="pin-icon" />
      <p className="pin-text">{text}</p>
    </div>
  )

const Map = ({location, zoomLevel}) => {
  return (
    <div className="map">
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyD2s9HzfONbAgXUILzRZM_7s6UxMZ_XF8g' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
  )
}

export default Map
