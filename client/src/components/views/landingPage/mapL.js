import React, { useState, useEffect } from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from './marker'
import './mapL.css'

function MapL(props) {

  const [Zoom, setZoom] = useState(11)
  const [Clng, setClng] = useState(126.529417)
  const [Clat, setClat] = useState(33.361417)

  let markers = props.marker
  let type = props.type
  console.log(markers)

  useEffect(() => {
    if (type=='Info'){
      setClng(markers[0].geometry.coordinates[0])
      setClat(markers[0].geometry.coordinates[1])
      setZoom(17)
    }
  
  }, [props])
    
  return (
    <div className='map'>
        <GoogleMapReact
            bootstrapURLKeys = {{key: "AIzaSyAe9nEsSOH42iZgyTvELDZjO8kKJF8P3Ik"}}
            zoom={Zoom}
            center={{lat: Clat, lng: Clng}}
        >
          {markers.length != 0 && markers.map((marker, index)=> {
            return (
              <Marker key={index} lng={marker.geometry.coordinates[0]} lat={marker.geometry.coordinates[1]}/>
            )
          })}            
        </GoogleMapReact>
    </div>
  )
}

export default MapL