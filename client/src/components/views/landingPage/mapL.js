import React from 'react'
import GoogleMapReact from 'google-map-react'

function MapL() {

    let mkey=""
  return (
    <div style={{width:'85%', height: '84vh', borderStyle: 'solid', borderWidth: '4px', borderColor: '#3d8af7'}}>
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