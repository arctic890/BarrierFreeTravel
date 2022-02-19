import React from 'react'
import GoogleMapReact from 'google-map-react'

function MapL() {

    let mkey=""
  return (
    <div style={{width:'90%', height: '85vh', paddingTop: '25px'}}>
        <GoogleMapReact
            bootstrapURLKeys = {{key: "AIzaSyAe9nEsSOH42iZgyTvELDZjO8kKJF8P3Ik"}}
            defaultZoom={17}
            defaultCenter={{lat: 37.5079523, lng: 127.0632954}}
        >            
        </GoogleMapReact>
    </div>
  )
}

export default MapL