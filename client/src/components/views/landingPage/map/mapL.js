import React, { useState, useEffect } from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from './marker'
import './mapL.css'

function MapL(props) {

  const defaultlng = 126.529417
  const defaultlat = 33.361417
  //const [Zoom, setZoom] = useState(11)
  //const [Clng, setClng] = useState(defaultlng)
  //const [Clat, setClat] = useState(defaultlat)
  const [Map, setMap] = useState(null)
  const [Maps, setMaps] = useState(null)

  let markers = props.marker
  let type = props.type
  console.log(markers)

  useEffect(() => {

    if (markers.length != 0){
      console.log('bounds')
      const bounds = getMapBounds(Map,Maps,markers)
      Map.fitBounds(bounds)
      bindResizeListener(Map,Maps,bounds)
    }
  
  }, [props])

  const getMapBounds = (map, maps, markers) => {
    //console.log('bounded')
    const bounds = new maps.LatLngBounds()
    markers.forEach((marker)=> {
      bounds.extend(new maps.LatLng(
        marker.geometry.coordinates[1],
        marker.geometry.coordinates[0]
      ))
    })
    return bounds
  }

  const handleApiLoaded=(map,maps) => {
    //console.log('loaded2')
    setMap(map)
    setMaps(maps)
  }

  const bindResizeListener = (map,maps,bounds)=> {
    maps.event.addDomListenerOnce(map, 'idle', ()=> {
      maps.event.addDomListener(window, 'resize', ()=> {
        map.fitBounds(bounds)
      })
    })
  }

  return (
    <div className='map'>
        <GoogleMapReact
            bootstrapURLKeys = {{key: "mapkey&region=KR"}}
            defaultZoom={11}
            defaultCenter={{lat: defaultlat, lng: defaultlng}}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({map,maps})=> handleApiLoaded(map, maps)} //map: map obj   maps:api 
        >
          {markers.length != 0 && markers.map((marker,index)=> {
            return (
                <Marker 
                key={index} 
                marker={marker} 
                type={type}
                lng={marker.geometry.coordinates[0]} 
                lat={marker.geometry.coordinates[1]}
                />
            )
          })}            
        </GoogleMapReact>
    </div>
  )
}

export default MapL