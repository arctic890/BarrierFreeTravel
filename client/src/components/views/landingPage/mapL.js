import React from 'react'
import GoogleMapReact from 'google-map-react'
import './mapL.css'

function MapL() {

    
  return (
    <div className='map'>
        <GoogleMapReact
            bootstrapURLKeys = {{key: "AIzaSyAe9nEsSOH42iZgyTvELDZjO8kKJF8P3Ik"}}
            defaultZoom={11}
            defaultCenter={{lat: 33.361417, lng: 126.529417}}
        >            
        </GoogleMapReact>
    </div>
  )
}

export default MapL